import Image from "next/image";
import Count from "./count";

const Footer = () => {
  return (
    <div className="pb-4 lg:pb-8">
      <div className="m-4 mb-0 flex flex-col justify-between rounded-lg bg-black px-8 py-10 lg:m-12 lg:flex-row lg:px-56 lg:py-20">
        <div className="flex flex-col items-center gap-10 lg:items-start">
          <Image src={"/singlelogo2.svg"} alt="pfp" height={20} width={30} />
          <span>
            2024 © Made with <span className="text-red-600">❤</span> by Hamza
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 lg:justify-between">
          <div className="mt-6 flex items-end justify-center gap-3 lg:mt-0">
            <a
              className="rounded-full border border-[#BDB8AD] p-2 transition-all duration-500 hover:scale-110 hover:border-white"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hamza-mushtaq-8bb8ab246"
              target="_blank"
            >
              <Image
                className="grayscale"
                src={"/linkedin.svg"}
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
                src={"/github.svg"}
                alt="pfp"
                height={20}
                width={20}
              />
            </a>
          </div>
          <Count />
        </div>
      </div>
    </div>
  );
};

export default Footer;
