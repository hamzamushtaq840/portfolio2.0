import { experiences } from "@/constants/consts";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="relative my-32 flex flex-col items-center overflow-hidden px-8 lg:px-56">
      <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
      <h2 className="z-20 mt-6 text-5xl font-bold leading-[64px]">
        Experience
      </h2>
      <span className="z-20 mb-16 mt-2 text-center text-lg font-medium leading-[32px] tracking-widest">
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
                <div className="flex h-12 w-12 items-center justify-center bg-textOrange text-lg font-bold text-white">
                  {i + 1}
                </div>
                <span className="text-2xl font-bold">{v.organizationName}</span>
              </div>
              <div className="flex h-full flex-col items-end justify-between">
                <span className="text font-bold">{v.timeline}</span>
                <span className="text-lg font-thin tracking-wide">
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
        className="absolute left-[-130px] z-10"
      />
    </div>
  );
};

export default Experience;
