import { experiences } from "@/constants/consts";
import Image from "next/image";
import TextReveal from "../textReveal";

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative mb-32 mt-20 flex flex-col items-center overflow-hidden px-8 lg:px-56"
    >
      <Image
        src={"/singlelogo.svg"}
        className="mb-6"
        alt="pfp"
        height={40}
        width={40}
      />
      <TextReveal
        text={`Experience`}
        start={"top 70%"}
        end={"bottom 20%"}
        className="text-outline z-20 mt-6 text-4xl font-bold leading-[64px] lg:text-5xl"
      />
      <span className="z-20 mb-16 mt-3 text-center font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>
      <div className="z-20 grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
        {experiences.map((v, i) => {
          return (
            <div
              key={i}
              className="flex gap-3 border border-white px-8 py-5 lg:flex-row lg:items-center lg:gap-6 lg:py-9"
            >
              <div className="flex flex-1 flex-col gap-6">
                <div className="flex h-8 w-8 items-center justify-center bg-textOrange text-lg font-bold text-white lg:h-12 lg:w-12">
                  {i + 1}
                </div>
                <span className="text-2xl font-bold">{v.organizationName}</span>
              </div>
              <div className="flex h-full flex-col items-end justify-between">
                <span className="text-end text-sm font-bold lg:text-base">
                  {v.timeline}
                </span>
                <span className="text-end text-base font-thin tracking-wide lg:text-lg">
                  {v.position}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Image
        alt={"side"}
        src={"/side2.svg"}
        width={270}
        height={100}
        className="absolute left-[-130px] z-10 opacity-50"
      />
    </div>
  );
};

export default Experience;
