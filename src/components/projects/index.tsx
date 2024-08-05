import { projects } from "@/constants/consts";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const LatestProjects = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-8 lg:mt-32 lg:px-56">
      <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
      <h2 className="text-outline mt-6 text-center text-5xl font-bold leading-[64px]">
        LATEST PROJECTS
      </h2>
      <span className="mb-16 mt-3 text-center font-medium leading-[32px] tracking-widest">
        REGONITIONS & ACCOIMPLISHMENTS
      </span>

      <div className="flex flex-col gap-14 lg:gap-32">
        {projects.map((v, i) => {
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-12 lg:flex-row lg:gap-14",
                i % 2 == 0 && "flex-col lg:flex-row-reverse",
              )}
            >
              <Image
                src={"/projects/yoomy.png"}
                alt="pfp"
                height={307}
                width={460}
                className="rounded-md"
              />
              <div className="flex flex-col justify-between py-0 lg:py-5">
                <span className="mb-8 flex self-start bg-textOrange px-4 py-2 text-lg font-bold leading-[32px]">
                  {v.name}
                </span>
                <span className="mb-4 flex text-4xl font-bold leading-[46px] lg:mb-8 lg:text-5xl lg:leading-[56px]">
                  {v.desc}
                </span>
                <Link href={`/projects/${v.id}`}>
                  <span className="flex cursor-pointer text-xl font-bold leading-[32px] hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProjects;
