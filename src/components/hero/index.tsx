import Image from "next/image";
import { Model } from "../model";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-3 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-32 lg:pb-10">
      <div className="px-8 text-center text-4xl font-bold leading-[48px] lg:px-0 lg:text-left lg:text-5xl lg:leading-[64px]">
        <h1>HI, I’M HAMZA.</h1>
        <div className="flex flex-wrap items-center justify-center lg:items-start lg:gap-3">
          <span className="">FULL STACK</span>
          <Image
            src={"/singlelogo.svg"}
            className="ml-4"
            alt="pfp"
            height={40}
            width={40}
            priority
          />
          <span>DEVELOPER</span>
        </div>
        <h1>
          BASED IN <s>PAKISTAN</s>
        </h1>
        <span className="mb-14 mt-10 flex flex-wrap justify-center gap-2 text-lg lg:mb-14 lg:justify-start lg:text-2xl">
          <span>DESIGN</span>
          <Image src={"/break.svg"} priority alt="pfp" height={20} width={20} />
          <span>DEVELOPMENT</span>
          <Image src={"/break.svg"} priority alt="pfp" height={20} width={20} />
          <span>WEBFLOW</span>
        </span>
      </div>
      <Model />
      {/* 
      <Image
        src={"/heroImage10.png"}
        alt="pfp"
        height={532}
        width={532}
        priority
        sizes="(max-width: 768px) 348px, (max-width: 1200px) 384px, 522px"
      /> */}
    </div>
  );
};

export default Hero;
