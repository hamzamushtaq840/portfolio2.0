import { projects } from "@/constants/consts";
import { cn } from "@/utils/utils";
import Image from "next/image";
import TextReveal from "../textReveal";

const LatestProjects = () => {
  return (
    <div
      id="projects"
      className="mt-20 flex flex-col items-center px-8 lg:mt-32 lg:px-56"
    >
      <Image
        className="mb-6"
        src={"/singlelogo.svg"}
        alt="pfp"
        height={40}
        width={40}
      />
      <div className="flex text-center">
        <TextReveal
          text={`Latest Projects`}
          start={"top 60%"}
          end={"bottom 40%"}
          className="text-outline mt-6 text-center text-5xl font-bold leading-[64px]"
        />
      </div>
      <span className="mb-16 mt-3 text-center font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>

      <div className="flex flex-col gap-14 lg:gap-32">
        {projects.map((v, i) => {
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center gap-12 lg:flex-row lg:gap-14",
                i % 2 == 0 && "flex-col lg:flex-row-reverse",
              )}
            >
              <Image
                src={`/projects${v.picture}`}
                alt="pfp"
                height={307}
                width={510}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between py-0 lg:py-5">
                <span className="mb-8 flex self-start bg-textOrange px-4 py-2 text-lg font-bold leading-[32px]">
                  {v.name}
                </span>
                <span className="mb-4 flex text-4xl font-bold leading-[46px] lg:mb-8 lg:text-5xl lg:leading-[56px]">
                  {v.desc}
                </span>
                <div className="flex gap-2">
                  <a
                    className="rounded-full border border-[#BDB8AD] p-2 transition-all duration-500 hover:scale-110 hover:border-white"
                    rel="noreferrer"
                    href={v.live}
                    target="_blank"
                  >
                    <Image
                      className="grayscale"
                      src={"/computer.svg"}
                      alt="pfp"
                      height={20}
                      width={20}
                    />
                  </a>
                  {!v.restrictedCodebase && (
                    <a
                      className="rounded-full border border-[#BDB8AD] p-2 transition-all duration-500 hover:scale-110 hover:border-white"
                      rel="noreferrer"
                      href={v.codebase}
                      target="_blank"
                    >
                      <Image
                        className="grayscale"
                        src={"/code.svg"}
                        alt="pfp"
                        height={20}
                        width={20}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProjects;
