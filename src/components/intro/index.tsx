import { intro } from "@/constants/consts";
import Image from "next/image";
import TextReveal from "../textReveal";

const Intro = () => {
  return (
    <div className="flex flex-col gap-10 px-8 pb-10 lg:flex-row lg:px-56 lg:py-32">
      {/* left-section */}
      <div className="flex flex-col gap-10">
        <div className="flex gap-2 text-2xl font-semibold lg:text-3xl">
          <span>Hamza</span>
          <Image src={"/break.svg"} alt="pfp" height={20} width={20} />
          <span>Mushtaq</span>
        </div>

        <TextReveal
          text={intro.title}
          start={"top 80%"}
          end={"bottom 55%"}
          className="text-5xl font-bold leading-[64px]"
        />
      </div>

      {/* right-section */}
      <div className="flex flex-col gap-10">
        <span className="text-xl font-bold leading-9 text-[#ffffffe0] lg:text-3xl lg:leading-[40px]">
          {intro.heading}
        </span>

        <span className="font-medium text-[#ffffffa2] lg:text-lg">
          {intro.aboutMe}
        </span>

        <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-3">
          {intro.cards.map((v, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-widest text-textOrange">
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
