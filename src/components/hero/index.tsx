import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-32 pb-5 pt-10">
      <div className="text-5xl font-bold leading-[64px]">
        <h1>HI, I’M HAMZA.</h1>

        <div className="flex flex-wrap items-center gap-3">
          <span>FULL STACK</span>
          <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
          <span>DEVELOPER</span>
        </div>

        <h1>
          BASED IN <s>PAKISTAN</s>
        </h1>

        <span className="my-10 flex gap-2 text-2xl">
          <span>DESIGN</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>DEVELOPMENT</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>WEBFLOW</span>
        </span>

        {/* <div className="flex">
          <button>Got a project?</button>
          <button>Let's Talk</button>
        </div> */}
      </div>

      <Image
        src={"/heroImage.png"}
        alt="pfp"
        height={562}
        width={562}
        className=""
      />
    </div>
  );
};

export default Hero;
