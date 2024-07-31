import Image from "next/image";
import React from "react";

const LatestProjects = () => {
  return (
    <div className="mt-32 flex flex-col items-center px-56">
      <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
      <h2 className="mt-6 text-5xl font-bold leading-[64px]">
        LATEST PROJECTS
      </h2>
      <span className="mb-24 mt-2 text-lg font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>
    </div>
  );
};

export default LatestProjects;
