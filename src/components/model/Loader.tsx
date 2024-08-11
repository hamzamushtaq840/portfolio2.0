import { useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
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

export default Loader;
