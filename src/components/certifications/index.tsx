import Image from "next/image";
import React from "react";

const Certifications = () => {
  return (
    <div className="relative mt-32 flex flex-col items-center overflow-hidden px-56">
      <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
      <h2 className="mt-6 text-5xl font-bold leading-[64px]">Certifications</h2>
      <span className="mb-16 mt-2 text-lg font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>
      <div className="flex w-full flex-col gap-6">
        {[1, 2, 3, 4].map((v, i) => {
          return (
            <div className="flex items-center gap-6 border border-white px-8 py-9">
              <div className="flex h-12 w-12 items-center justify-center bg-textOrange text-lg font-bold text-white">
                {v}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-3xl font-bold">
                  Webflow Awwwards Team
                </span>
                <span className="text-lg font-thin">
                  Runner Up - Webflow Expert Design
                </span>
              </div>
              <span className="text-lg font-semibold tracking-wide">2021</span>
            </div>
          );
        })}
      </div>

      <Image
        alt={"side"}
        src={"/side.svg"}
        width={160}
        height={100}
        className="absolute right-[-80px] top-[50%] -translate-y-[-50%] rotate-[25deg]"
      />
    </div>
  );
};

export default Certifications;