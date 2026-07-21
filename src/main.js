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
function animate() {
  requestAnimationFrame(animate);

  cell.rotation.y += 0.003;
  cell.userData.nucleus.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate();
