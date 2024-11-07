// import { useRef, useEffect, useState } from "react";
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// const ThreeDModel = () => {
//   const containerRef = useRef();
//   const [followMouse, setFollowMouse] = useState(false);
//   let targetX = 0;
//   let targetY = 0;
//   let object;

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 12;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     const loader = new GLTFLoader();
//     loader.load(
//       "./src/assets/computer3D/scene.gltf",
//       (gltf) => {
//         object = gltf.scene;
//         scene.add(object);
//       },
//       undefined,
//       (error) => {
//         console.error("Erro ao carregar o modelo:", error);
//       }
//     );

//     const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
//     topLight.position.set(0, 1, 1);
//     scene.add(topLight);

//     const ambientLight = new THREE.AmbientLight(0x404040, 1);
//     scene.add(ambientLight);

//     const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x333333, 0.75);
//     scene.add(hemisphereLight);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;
//     controls.enableDamping = false;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (object && followMouse) {
//         object.rotation.y += (targetX - object.rotation.y) * 0.05;
//         object.rotation.x += (targetY - object.rotation.x) * 0.05;
//       }
//       renderer.render(scene, camera);
//     };
//     animate();

//     window.addEventListener("resize", () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     document.onclick = (e) => {
//       setFollowMouse(true);
//       targetX = (e.clientX / window.innerWidth) * 2 - 1;
//       targetY = (e.clientY / window.innerHeight) * -2 + 1;
//     };

//     return () => {
//       containerRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, [followMouse]);

//   return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
// };

// export default ThreeDModel;
