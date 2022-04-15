import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VRM, VRMSchema } from '@pixiv/three-vrm';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const Bone = VRMSchema.HumanoidBoneName;

@Component({
  selector: 'app-vrm-viewer',
  templateUrl: './vrm-viewer.component.html',
  styleUrls: ['./vrm-viewer.component.scss'],
})
export class VrmViewerComponent implements OnInit {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(255, 255, 255);

    // camera
    this.camera = new THREE.PerspectiveCamera(
      30.0,
      window.innerWidth / window.innerHeight,
      0.1,
      20.0
    );
    this.camera.position.set(0.0, 1.0, 5.0);

    // light
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1.0, 1.0, 1.0).normalize();
    this.scene.add(light);
  }

  @ViewChild('canvas')
  private canvasRef: ElementRef = {} as ElementRef;
  private scene: THREE.Scene;
  private loaderGLTF = new GLTFLoader();
  private camera: THREE.Camera;

  private renderer!: THREE.WebGLRenderer;
  private vrm: VRM = {} as VRM;

  private clock: THREE.Clock = {} as THREE.Clock;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private startRenderingLoop() {
    this.clock = new THREE.Clock();

    this.camera = new THREE.PerspectiveCamera(
      30.0,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      20.0
    );
    this.camera.position.set(0.0, 1.0, 5.0);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(
      window.screen.availWidth / document.documentElement.clientWidth
    );
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // camera controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.screenSpacePanning = true;
    controls.target.set(0.0, 1.0, 0.0);
    controls.update();

    const render = () => {
      requestAnimationFrame(render);
      this.renderer.render(this.scene, this.camera);

      const t = this.clock.getElapsedTime();

      console.log(this.vrm.humanoid);
      if (this.vrm.humanoid === undefined) {
        return;
      }
      const leftLowerArm = this.vrm.humanoid.getBoneNode(Bone.LeftUpperArm);
      if (leftLowerArm) leftLowerArm.rotation.z = 1.2;

      const rightLowerArm = this.vrm.humanoid.getBoneNode(Bone.RightUpperArm);
      if (rightLowerArm) rightLowerArm.rotation.z = -1.2;

      const head = this.vrm.humanoid.getBoneNode(Bone.Head);
      // if (head)
      //   head.rotation.y +=
      //     20 *
      //     Math.sin(t / 8) *
      //     Math.sin((9 * t) / 8) *
      //     Math.sin((3 * t) / 8) *
      //     0.1;

      const leftEye = this.vrm.humanoid.getBoneNode(Bone.LeftEye);
      const rightEye = this.vrm.humanoid.getBoneNode(Bone.RightEye);

      if (leftEye) leftEye.rotation.x = 0.3;
      if (rightEye) rightEye.rotation.x = 0.3;

      // const mouth = this.vrm.humanoid.getBoneNode(Bone.)

      this.renderer.render(this.scene, this.camera);
    };

    render();
  }

  private loadVRM(): void {
    this.loaderGLTF.load(
      '/assets/loli.vrm',
      (gltf) => {
        // generate a VRM instance from gltf
        VRM.from(gltf).then((vrm) => {
          // add the loaded vrm to the scene
          this.scene.add(vrm.scene);
          this.vrm = vrm;

          // deal with vrm features
          console.log(vrm);
          this.moveVRM();
        });
      },

      // called while loading is progressing
      (progress) =>
        console.log(
          'Loading model...',
          100.0 * (progress.loaded / progress.total),
          '%'
        ),

      // called when loading has errors
      (error) => console.error(error)
    );
  }

  private moveVRM(): void {
    console.log(this.vrm.humanoid);
    if (this.vrm.humanoid === undefined) {
      return;
    }

    const hip = this.vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Hips);

    console.log(hip);

    if (hip) {
      console.log(hip.rotation);
      hip.rotation.y = 180;
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadVRM();
    this.startRenderingLoop();
  }
}
