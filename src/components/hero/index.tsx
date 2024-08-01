import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col px-8 pt-10 lg:flex-row lg:items-center lg:justify-between lg:px-32 lg:pb-10">
      <div className="text-4xl font-bold leading-[48px] lg:text-5xl lg:leading-[64px]">
        <h1>HI, I’M HAMZA.</h1>

        <div className="flex flex-wrap items-center lg:gap-3">
          <span className="">FULL STACK</span>
          <Image
            src={"/singlelogo.svg"}
            className="ml-4"
            alt="pfp"
            height={40}
            width={40}
          />
          <span>DEVELOPER</span>
        </div>

        <h1>
          BASED IN <s>PAKISTAN</s>
        </h1>

        <span className="mb-14 mt-10 flex flex-wrap justify-center gap-2 text-lg lg:mb-14 lg:justify-start lg:text-2xl">
          <span>DESIGN</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>DEVELOPMENT</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>WEBFLOW</span>
        </span>
      </div>

      <Image
        src={"/heroImage6.png"}
        alt="pfp"
        height={532}
        width={532}
        // className="rounded-full border"
        sizes="(max-width: 768px) 60vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Hero;
