import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VRM, VRMSchema, VRMUtils } from '@pixiv/three-vrm';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { bindToVRM, calculatePosition, convert } from './vmd-animator';
import VRMIKHandler from './vrm-ik-handler';

@Component({
  selector: 'app-vrm-canvas',
  templateUrl: './vrm-canvas.component.html',
  styleUrls: ['./vrm-canvas.component.scss'],
})
export class VrmCanvasComponent implements OnInit {
  @Input()
  vrmUrl = 'assets/vrm/loli-maid.vrm';

  @ViewChild('canvas')
  canvasRef!: ElementRef;
  scene: THREE.Scene;
  loaderGLTF = new GLTFLoader();
  camera!: THREE.PerspectiveCamera;
  mixer?: THREE.AnimationMixer;
  ikHandler?: VRMIKHandler;

  private renderer!: THREE.WebGLRenderer;
  private vrm!: VRM;

  private clock!: THREE.Clock;

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe((params) => {
      if (params['vrm']) {
        this.vrmUrl = params['vrm'];
      }
    });
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(255, 255, 255);
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1.0, 1.0, 1.0).normalize();
    this.scene.add(light);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.camera = new THREE.PerspectiveCamera(
      30.0,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      20.0
    );

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setPixelRatio(2);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    const randomNum = (n: number) => Math.floor(Math.random() * n) + 1;

    const start = async () => {
      await this.loadVRM(this.vrmUrl);

      this.camera.position.set(0.0, 1.0, 4);
      await this.loadAnimation(
        'assets/vmd/appearing/' + randomNum(2) + '.vmd',
        'assets/vmd/liked/' + randomNum(5) + '.vmd',
        'assets/vmd/waiting/' + randomNum(5) + '.vmd'
      );
      this.startRenderingLoop();
    };
    start();
  }

  calcHeightVRM(): number {
    const { humanoid } = this.vrm;
    if (!humanoid) throw new Error('VRM does not have humanoid');

    const foot = humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftFoot);
    const head = humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Head);
    const currentPose = humanoid.getPose();
    humanoid.resetPose();

    const headY = calculatePosition(head, head)?.[1];
    const footY = calculatePosition(foot, foot)?.[1];
    if (!headY || !footY) {
      return 0;
    }

    const height = headY - footY;
    humanoid.setPose(currentPose);

    return height;
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  loadVRM(vrmUrl: string): Promise<void> {
    return new Promise((resolve) =>
      this.loaderGLTF.load(
        vrmUrl,
        (gltf) => {
          VRM.from(gltf).then((vrm) => {
            VRMUtils.removeUnnecessaryJoints(gltf.scene);
            VRMUtils.removeUnnecessaryVertices(gltf.scene);
            this.scene.add(vrm.scene);
            this.vrm = vrm;
            this.vrm.scene.rotation.y = Math.PI;
            this.vrm.scene.position.set(0, 0, 0);
            const scale = 0.4 + 0.34 / this.calcHeightVRM();
            this.vrm.scene.scale.set(scale, scale, scale);
            resolve();
          });
        },
        (progress) =>
          console.log(
            'Loading model...',
            100.0 * (progress.loaded / progress.total),
            '%'
          ),
        (error) => console.error(error)
      )
    );
  }

  async getVmd(url: string): Promise<ArrayBufferLike> {
    const res = await fetch(url);
    const blob = await res.blob();
    return await blob.arrayBuffer();
  }

  async loadAnimation(
    appearingVmd: string,
    likedVmd: string,
    waitingVmd: string
  ) {
    // convert animation to AnimationClip

    // setup mixer and ik handler
    const vmds = await Promise.all([
      this.getVmd(appearingVmd),
      this.getVmd(likedVmd),
      this.getVmd(waitingVmd),
    ]);

    const clips = vmds.map((vmd) => {
      const animationData = convert(vmd, this.vrm);
      return bindToVRM(animationData, this.vrm);
    });

    this.mixer = new THREE.AnimationMixer(this.vrm.scene);
    this.ikHandler = VRMIKHandler.get(this.vrm);

    const animateAppearing = this.mixer.clipAction(clips[0]);
    animateAppearing.clampWhenFinished = true;
    const animateLiked = this.mixer.clipAction(clips[1]);
    animateLiked.clampWhenFinished = true;
    const animateWaiting = this.mixer.clipAction(clips[2]);

    animateWaiting.setLoop(THREE.LoopRepeat, 1);
    animateLiked.setLoop(THREE.LoopRepeat, 1);
    animateAppearing.setLoop(THREE.LoopOnce, 1);
    animateAppearing.play();

    this.mixer.addEventListener('finished', ({ action }) => {
      action.fadeOut(0.2);
      if (action === animateAppearing || action === animateWaiting) {
        animateLiked.reset().fadeIn(0.2).play();
        animateLiked.clampWhenFinished = true;
        return;
      }
      if (action === animateLiked) {
        animateWaiting.reset().fadeIn(0.2).play();
        animateWaiting.clampWhenFinished = true;
        return;
      }
    });
  }

  startRenderingLoop() {
    this.clock = new THREE.Clock();

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.screenSpacePanning = true;
    controls.target.set(0.0, 1.0, 0.0);
    controls.update();

    const render = () => {
      requestAnimationFrame(render);
      this.renderer.render(this.scene, this.camera);
      const delta = this.clock.getDelta();

      // update mixer for animations
      if (this.mixer) {
        this.mixer.update(delta);
      }

      // update vrm itself (e.g. hair physics, animations).
      if (this.vrm) {
        this.vrm.update(delta);
      }
    };

    render();
  }

  onResize(event: any) {
    console.log(event);
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
  }
}
