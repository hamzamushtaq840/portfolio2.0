"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";
import MeshComponent from "./MeshComponent";

export function Model() {
  const [enableZoom, setEnableZoom] = useState<boolean>(
    window.innerWidth > 700,
  );

  useEffect(() => {
    const handleResize = () => {
      setEnableZoom(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex h-[45vh] w-full lg:h-[70vh] lg:w-[45%]">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0.5, 5], fov: 45 }}
          className="h-2xl w-2xl"
        >
          <OrbitControls enableZoom={enableZoom} />
          <MeshComponent onLoad={() => {}} />
        </Canvas>
      </Suspense>
    </div>
  );
}
