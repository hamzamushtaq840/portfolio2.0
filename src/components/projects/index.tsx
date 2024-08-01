import { cn } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const LatestProjects = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-8 lg:mt-32 lg:px-56">
      <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
      <h2 className="mt-6 text-center text-5xl font-bold leading-[64px]">
        LATEST PROJECTS
      </h2>
      <span className="mb-16 mt-2 text-center text-lg font-medium leading-[32px] tracking-widest lg:mb-24">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>

      <div className="flex flex-col gap-14 lg:gap-32">
        {[1, 2, 3, 4].map((v, i) => {
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-12 lg:flex-row lg:gap-14",
                i % 2 == 0 && "flex-col lg:flex-row-reverse",
              )}
            >
              <Image
                src={"/portfolio.png"}
                alt="pfp"
                height={307}
                width={460}
              />
              <div className="flex flex-col justify-between py-0 lg:py-5">
                <span className="mb-8 flex self-start bg-textOrange px-4 py-2 text-lg font-bold leading-[32px]">
                  ART DIRECTION
                </span>
                <span className="mb-8 flex text-4xl font-bold leading-[46px] lg:mb-0 lg:text-5xl lg:leading-[56px]">
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
