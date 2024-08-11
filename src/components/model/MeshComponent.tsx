import { useGLTF, useProgress } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { AnimationMixer, Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function MeshComponent({ onLoad }: { onLoad: () => void }) {
  const fileUrl = "/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF(fileUrl); // Load animations
  const mixer = useRef<AnimationMixer | null>(null); // Ref for AnimationMixer

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoad(); // Notify parent component when loading is complete
    }
    console.log(progress);
  }, [progress, onLoad]);

  useEffect(() => {
    // Set up the AnimationMixer and play the animation
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current?.clipAction(clip).play();
      });
    }

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
  }, [scene, animations]);

  useFrame((state, delta) => {
    // Update the mixer on each frame
    mixer.current?.update(delta);

    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  );
}

export default MeshComponent;
