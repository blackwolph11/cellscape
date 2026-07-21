import './style.css';
import { createControls } from './core/controls';
import { createRenderer } from './core/renderer';
import { createScene } from './core/scene';
import { createCamera } from './core/camera';

import { addLights } from './world/lighting';
import { createCell } from './world/cell';

const scene = createScene();

const camera = createCamera();

const renderer = createRenderer();

const controls = createControls(camera, renderer);

addLights(scene);

const cell = createCell();

scene.add(cell);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation
const clock = performance;

function animate() {

    requestAnimationFrame(animate);

    const t = clock.now();

    cell.rotation.y += 0.0015;

    if (cell.userData.animate) {
        cell.userData.animate(t);
    }

    controls.update();

    renderer.render(scene, camera);
}

animate();
