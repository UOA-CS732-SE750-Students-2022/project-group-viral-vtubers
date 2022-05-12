import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { VRM, VRMUtils } from '@pixiv/three-vrm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { bindToVRM, convert } from './vmd-animator';
import VRMIKHandler from './vrm-ik-handler';

@Component({
  selector: 'app-vrm-canvas',
  templateUrl: './vrm-canvas.component.html',
  styleUrls: ['./vrm-canvas.component.scss'],
})
export class VrmCanvasComponent implements OnInit {
  @Input()
  vrmUrl: string = 'assets/loli.vrm';

  @Input()
  vmdUrl: string = 'assets/vmd/appearing.vmd';

  @ViewChild('canvas')
  canvasRef!: ElementRef;
  scene: THREE.Scene;
  loaderGLTF = new GLTFLoader();
  camera!: THREE.Camera;
  mixer?: THREE.AnimationMixer;
  ikHandler?: VRMIKHandler;

  private renderer!: THREE.WebGLRenderer;
  private vrm!: VRM;

  private clock!: THREE.Clock;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(255, 255, 255);
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1.0, 1.0, 1.0).normalize();
    this.scene.add(light);
  }

  ngOnInit(): void {}

  async ngAfterViewInit(): Promise<void> {
    this.camera = new THREE.PerspectiveCamera(
      30.0,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      20.0
    );
    this.camera.position.set(0.0, 1.0, 5.0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setPixelRatio(
      window.screen.availWidth / document.documentElement.clientWidth
    );
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    await this.loadVRM(this.vrmUrl);
    await this.loadAnimation(
      'assets/vmd/appearing.vmd',
      'assets/vmd/liked.vmd',
      'assets/vmd/waiting.vmd'
    );
    this.startRenderingLoop();
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
            console.log(vrm);
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

  private getVmd(url: string): Promise<ArrayBufferLike> {
    return fetch(url)
      .then((res) => res.blob())
      .then((blob) => blob.arrayBuffer());
  }

  private async loadAnimation(
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
    animateWaiting.clampWhenFinished = true;
    animateAppearing.crossFadeTo(animateLiked, 0.2, false);
    animateLiked.crossFadeTo(animateWaiting, 0.2, false);
    animateWaiting.crossFadeTo(animateLiked, 0.2, false);

    animateWaiting.play();

    // clips.map((clip) => {
    //   if (this.mixer == null) {
    //     return;
    //   }
    //   const animate = this.mixer.clipAction(clip);
    //   animate.play();
    // });
  }

  private startRenderingLoop() {
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

      // update ik handler for IK bones (e.g. legs, feet).
      if (this.ikHandler) {
        this.ikHandler.update();
      }

      // update vrm itself (e.g. hair physics, animations).
      if (this.vrm) {
        this.vrm.update(delta);
      }
    };

    render();
  }
}
