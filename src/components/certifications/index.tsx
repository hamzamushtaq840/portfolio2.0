import { certifications } from "@/constants/consts";
import Image from "next/image";
import TextReveal from "../textReveal";

const Certifications = () => {
  return (
    <div className="relative mt-20 flex flex-col items-center overflow-hidden px-8 lg:mt-32 lg:px-56">
      <Image
        src={"/singlelogo.svg"}
        className="mb-6"
        alt="pfp"
        height={40}
        width={40}
      />
      <TextReveal
        text={`Certifications`}
        start={"top 70%"}
        end={"bottom 20%"}
        className="text-outline text-4xl font-bold leading-[64px] lg:text-5xl"
      />
      <span className="mb-16 mt-3 text-center font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>
      <div className="z-[20] flex w-full flex-col gap-6">
        {certifications.map((v, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-6 border border-white px-8 py-9 lg:flex-row"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-textOrange text-lg font-bold text-white">
                {i + 1}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-center text-2xl font-bold lg:text-3xl">
                  {v.courseName}
                </span>
                <span className="text-center text-base font-thin lg:text-lg">
                  {v.organizationName}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-lg font-semibold tracking-wide">
                  {v.year}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Image
        alt={"side"}
        src={"/side.svg"}
        width={160}
        height={100}
        className="absolute right-[-80px] top-[50%] z-[10] -translate-y-[-50%] rotate-[25deg] opacity-50"
      />
    </div>
  );
};

export default Certifications;
