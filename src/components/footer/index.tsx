import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between bg-black px-56 py-14">
      <div className="flex flex-col gap-10">
        <Image src={"/singlelogo2.svg"} alt="pfp" height={20} width={30} />
        <span>
          2024 © Made with <span className="text-red-600">❤</span> by Hamza
        </span>
      </div>
      <div className="flex items-end gap-3">
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
