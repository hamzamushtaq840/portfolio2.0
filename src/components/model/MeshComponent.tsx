import { useGLTF, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
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

export default MeshComponent;
