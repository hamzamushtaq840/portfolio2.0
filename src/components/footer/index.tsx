import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-black px-8 py-14 lg:flex-row lg:px-56">
      <div className="flex flex-col items-center gap-10 lg:items-start">
        <Image src={"/singlelogo2.svg"} alt="pfp" height={20} width={30} />
        <span>
          2024 © Made with <span className="text-red-600">❤</span> by Hamza
        </span>
      </div>
      <div className="mt-6 flex items-end justify-center gap-3 lg:mt-0">
        <a
          className="rounded-full border border-[#BDB8AD] p-2 transition-all duration-500 hover:scale-110 hover:border-white"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hamza-mushtaq-8bb8ab246"
          target="_blank"
        >
          <Image
            className="grayscale"
            src={"/linkedin3.svg"}
            alt="pfp"
            height={20}
            width={20}
          />
        </a>
        <a
          className="rounded-full border border-[#BDB8AD] p-2 transition-all duration-500 hover:scale-110 hover:border-white"
          rel="noreferrer"
          href="https://github.com/hamzamushtaq840"
          target="_blank"
        >
          <Image
            className="grayscale"
            src={"/github3.svg"}
            alt="pfp"
            height={20}
            width={20}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
