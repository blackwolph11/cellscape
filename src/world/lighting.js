import * as THREE from "three";

export function addLights(scene) {

    const ambient = new THREE.AmbientLight(
        0xffffff,
        2.0
    );

    scene.add(ambient);

    const sun = new THREE.DirectionalLight(
        0xffffff,
        3
    );

    sun.position.set(6, 8, 6);

    scene.add(sun);

    const rim = new THREE.DirectionalLight(
        0x66aaff,
        1.2
    );

    rim.position.set(-5, 2, -5);

    scene.add(rim);

}