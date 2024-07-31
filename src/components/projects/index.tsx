import { cn } from "@/utils/utils";
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

      <div className="flex flex-col gap-32">
        {[1, 2, 3, 4].map((v, i) => {
          return (
            <div
              className={cn("flex gap-14", i % 2 == 0 && "flex-row-reverse")}
            >
              <Image
                src={"/portfolio.png"}
                alt="pfp"
                height={307}
                width={460}
              />
              <div className="flex flex-col justify-between py-5">
                <span className="flex self-start bg-textOrange px-4 py-2 text-lg font-bold leading-[32px]">
                  ART DIRECTION
                </span>
                <span className="flex text-5xl font-bold leading-[56px]">
                  Beautiful and advanced website interfaces
                </span>
                <span className="flex text-xl font-bold leading-[32px]">
                  Read More
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProjects;
