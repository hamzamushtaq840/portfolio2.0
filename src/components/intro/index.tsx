import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex gap-10 px-32 py-20">
      {/* left-section */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 text-3xl font-medium">
          <span>Hamza</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>Mushtaq</span>
        </div>

        <span className="text-5xl font-bold">
          Lead product designer and art director.
        </span>
      </div>

      {/* right-section */}
      <div className="flex flex-col gap-8">
        <span className="text-3xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </span>

        <span className="text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </span>

        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-wider text-textOrange">
              BORN IN
            </span>
            <span className="text-2xl font-bold">Pakistan</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest text-textOrange">
              EXPERIENCE
            </span>
            <span className="text-2xl font-bold">4+ Years</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-wider text-textOrange">
              DATE OF BIRTH
            </span>
            <span className="text-2xl font-bold">26 Feb 2000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
