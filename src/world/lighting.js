import * as THREE from "three";

export function addLights(scene){

    const ambient = new THREE.AmbientLight(
        0xffffff,
        1.5
    );

    scene.add(ambient);

    const sun = new THREE.DirectionalLight(
        0xffffff,
        2
    );

    sun.position.set(5,5,5);

    scene.add(sun);

}