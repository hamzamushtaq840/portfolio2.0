import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="px-32 py-20 flex gap-10">
      {/* left-section */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 font-medium text-3xl">
          <span>Hamza</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>Mushtaq</span>
        </div>

        <span className="font-bold text-5xl">
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
            <span className="text-textOrange text-xs font-semibold">
              BORN IN
            </span>
            <span className="font-bold text-2xl">Pakistan</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-textOrange text-xs font-semibold">
              EXPERIENCE
            </span>
            <span className="font-bold text-2xl">4+ Years</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-textOrange  text-xs font-semibold">
              DATE OF BIRTH
            </span>
            <span className="font-bold text-2xl">26 Feb 2000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
