import * as THREE from "three";

export function createCell() {

    const cell = new THREE.Group();

    // Cell membrane
    const membrane = new THREE.Mesh(
        new THREE.SphereGeometry(2, 64, 64),
        new THREE.MeshPhysicalMaterial({
            color: 0x7fdcff,
            transparent: true,
            opacity: 0.18,
            transmission: 0.9,
            roughness: 0.05,
            thickness: 0.3
        })
    );

    cell.add(membrane);

    // Cytoplasm
    const cytoplasm = new THREE.Mesh(
        new THREE.SphereGeometry(1.92, 64, 64),
        new THREE.MeshPhongMaterial({
            color: 0xffd79c,
            transparent: true,
            opacity: 0.45
        })
    );

    cell.add(cytoplasm);

    // Nucleus
    const nucleus = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 48, 48),
        new THREE.MeshPhongMaterial({
            color: 0x8a5cff
        })
    );

    nucleus.position.set(0.4, 0.2, 0.1);

    cell.add(nucleus);

    //Add Nucleolus
    const nucleolus = new THREE.Mesh(

      new THREE.SphereGeometry(0.18,32,32),
  
      new THREE.MeshPhongMaterial({
  
          color:0xff66aa
  
      })
  
  );
  
  nucleolus.position.set(0.15,0.05,0.35);
  
  nucleus.add(nucleolus);

  //Add Mitochondria


    // Save a reference so other parts of the app can animate it
    cell.userData.nucleus = nucleus;
    
    for(let i=0;i<15;i++){

    const mito = new THREE.Mesh(

        new THREE.CapsuleGeometry(0.08,0.35,8,16),

        new THREE.MeshPhongMaterial({

            color:0xff8844

        })

    );

    const r = 1.4 * Math.cbrt(Math.random());

    const theta = Math.random() * Math.PI * 2;

    const phi = Math.acos(2*Math.random()-1);

    mito.position.set(

        r*Math.sin(phi)*Math.cos(theta),

        r*Math.cos(phi),

        r*Math.sin(phi)*Math.sin(theta)

    );

    mito.rotation.set(

        Math.random()*Math.PI,

        Math.random()*Math.PI,

        Math.random()*Math.PI

    );

    cell.add(mito);

}
cell.userData.animate = function (time) {

    const s = 1 + Math.sin(time * 0.0015) * 0.015;

    cell.scale.set(s, s, s);

};

return cell;

}