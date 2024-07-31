import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-10 pb-5 px-32 flex justify-between items-center">
      <div className="text-5xl leading-[64px] font-bold">
        <h1>HI, I’M HAMZA.</h1>

        <div className="flex flex-wrap items-center gap-3">
          <span>FULL STACK</span>
          <Image src={"/singlelogo.svg"} alt="pfp" height={40} width={40} />
          <span>DEVELOPER</span>
        </div>

        <h1>
          BASED IN <s>PAKISTAN</s>
        </h1>

        <span className="flex gap-2 text-2xl my-10">
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
