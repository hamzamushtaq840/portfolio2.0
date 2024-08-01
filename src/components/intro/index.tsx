import Image from "next/image";
import React from "react";

const data = [
  {
    label: "BORN IN",
    value: "Pakistan",
  },
  {
    label: "EXPERIENCE",
    value: "4+ Years",
  },
  {
    label: "DATE OF BIRTH",
    value: "26 Feb 2000",
  },
];

const Intro = () => {
  return (
    <div className="flex flex-col gap-10 px-8 pb-10 lg:flex-row lg:px-56 lg:py-32">
      {/* left-section */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 text-2xl font-semibold lg:text-3xl">
          <span>Hamza</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>Mushtaq</span>
        </div>

        <span className="text-5xl font-bold leading-[64px]">
          Lead product designer and art director.
        </span>
      </div>

      {/* right-section */}
      <div className="flex flex-col gap-10">
        <span className="text-2xl font-bold leading-[40px] lg:text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </span>

        <span className="text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </span>

        <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-3">
          {data.map((v, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-wider text-textOrange">
                  {v.label}
                </span>
                <span className="font-bold lg:text-2xl">{v.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
