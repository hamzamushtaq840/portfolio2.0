"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useProgress, OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();

  // Calculate the width of the progress bar
  const progressBarWidth = `${progress}%`;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-2 w-1/2 rounded bg-gray-300">
        <div
          className="absolute left-0 top-0 h-full rounded bg-textOrange"
          style={{ width: progressBarWidth }}
        />
      </div>
      <span className="mt-2 text-white"> Loading 3D model {progress}%</span>
    </div>
  );
}

function MeshComponent({ onLoad }: { onLoad: () => void }) {
  const fileUrl = "/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const { scene } = useGLTF(fileUrl);

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoad(); // Notify parent component when loading is complete
    }
    console.log(progress);
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
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0.5, 5], fov: 45 }}
          className="h-2xl w-2xl"
        >
          <OrbitControls enableZoom={false} />
          <MeshComponent onLoad={handleLoad} />
        </Canvas>
      </Suspense>
    </div>
  );
}
