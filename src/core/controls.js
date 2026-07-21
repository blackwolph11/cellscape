import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function createControls(camera, renderer) {

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enablePan = true;

    controls.minDistance = 3;
    controls.maxDistance = 12;

    return controls;

}