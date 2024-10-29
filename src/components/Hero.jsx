import { useRef, useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const Hero = () => {
  const containerRef = useRef();
  const [followMouse, setFollowMouse] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    let targetX = 0;
    let targetY = 0;
    let object;

    const loader = new GLTFLoader();
    loader.load(
      "./src/assets/computer3D/scene.gltf",
      (gltf) => {
        object = gltf.scene;
        scene.add(object);
      },
      undefined,
      (error) => {
        console.error("Erro ao carregar o modelo:", error);
      }
    );

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 0.5);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      if (object && followMouse) {
        // Calcular a posição alvo e aplicar uma interpolação suave
        object.rotation.y += (targetX - object.rotation.y) * 0.05;
        object.rotation.x += (targetY - object.rotation.x) * 0.05;
      }
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Ao clicar, ativa o modo de seguir o mouse
    document.onclick = (e) => {
      setFollowMouse(true);
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * -2 + 1;
    };

    return () => {
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [followMouse]);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Tiago Gabriel
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center" ref={containerRef} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
