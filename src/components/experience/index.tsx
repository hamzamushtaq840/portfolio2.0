import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="relative my-32 flex flex-col items-center overflow-hidden px-56">
      <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
      <h2 className="mt-6 text-5xl font-bold leading-[64px]">Experience</h2>
      <span className="mb-16 mt-2 text-lg font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>
      <div className="flex w-full flex-col gap-6">
        {[1, 2, 3, 4].map((v, i) => {
          return (
            <div className="flex items-center gap-6 border border-white px-8 py-9">
              <div className="flex flex-1 flex-col gap-2">
                <span className="text font-bold text-textOrange">
                  NOV 2022 - DEC 2023
                </span>
                <span className="text-xl font-bold">APIMIO</span>
              </div>
              <span className="text-lg font-thin tracking-wide">
                FRONTEND DEVELOPER
              </span>
            </div>
          );
        })}
      </div>

      <Image
        alt={"side"}
        src={"/side2.svg"}
        width={270}
        height={100}
        className="absolute left-[-130px]"
      />
    </div>
  );
};

export default Experience;
