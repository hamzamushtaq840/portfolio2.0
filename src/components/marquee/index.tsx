import { marqueeItems } from "@/constants/consts";
import Image from "next/image";

const Marquee = () => {
  return (
    <div className="overflow-hidden py-20">
      <div className="stock-ticker bg-black">
        <ul>
          {marqueeItems.map((item, index) => (
            <li key={index} className="flex gap-16 text-lg font-bold uppercase">
              {item}
              <Image
                src={"/break.svg"}
                priority
                alt="pfp"
                height={20}
                width={20}
              />
            </li>
          ))}
        </ul>
        <ul className="marquee-item">
          {marqueeItems.map((item, index) => (
            <li key={index} className="flex gap-16 text-lg font-bold uppercase">
              {item}
              <Image
                src={"/break.svg"}
                priority
                alt="pfp"
                height={20}
                width={20}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
