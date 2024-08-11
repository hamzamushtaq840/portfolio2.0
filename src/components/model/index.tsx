"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import MeshComponent from "./MeshComponent";

export function Model() {
  return (
    <div className="relative flex h-[45vh] w-full lg:h-[70vh] lg:w-[45%]">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0.5, 5], fov: 45 }}
          className="h-2xl w-2xl"
        >
          <OrbitControls enableZoom={false} />
          <MeshComponent onLoad={() => {}} />
        </Canvas>
      </Suspense>
    </div>
  );
}
