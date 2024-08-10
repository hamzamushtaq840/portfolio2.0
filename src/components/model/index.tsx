"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Mesh } from "three";

function MeshComponent({ onLoad }: { onLoad: () => void }) {
  const fileUrl = "/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const { scene } = useGLTF(fileUrl);

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoad(); // Notify parent component when loading is complete
    }
  }, [progress, onLoad]);

  useEffect(() => {
    if (window.innerWidth > 700) {
      scene.position.y = -0.9;
    } else {
      scene.position.y = -0.8;
    }
    if (scene && window.innerWidth < 700) {
      scene.scale.set(0.9, 0.9, 0.9); // Apply scaling to the scene
    }
    if (mesh.current && window.innerWidth > 700) {
      mesh.current.position.x = 0.2;
    }
    if (mesh.current) {
      mesh.current.rotation.y = -Math.PI / 4; // Rotate slightly to the left (adjust value as needed)
    }
  }, [scene]);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const elapsedTime = clock.getElapsedTime();
      const amplitude = 0.05; // Amplitude of the oscillation
      const frequency = 1.5; // Frequency of the oscillation

      mesh.current.rotation.y += 0.003;

      // Apply small oscillating rotation
      // mesh.current.position.y = Math.sin(elapsedTime * 1.5) * 0.02;
      // mesh.current.rotation.y = Math.sin(elapsedTime * frequency) * amplitude;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  );
}

export function Model() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false); // Update loading status when model is loaded
  };

  return (
    <div className="relative flex h-[45vh] w-full lg:h-[70vh] lg:w-[45%]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20">
            <svg
              version="1.1"
              id="L9"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 0 0"
            >
              <path
                fill="#fff"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        className="h-2xl w-2xl"
      >
        <OrbitControls enableZoom={false} />
        <MeshComponent onLoad={handleLoad} />
      </Canvas>
    </div>
  );
}
