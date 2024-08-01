"use client";
import { cn } from "@/utils/utils";
import Image from "next/image";
import React, { useState } from "react";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {!showMenu && (
        <Image
          className="lg:hidden"
          src={"/hamburger.svg"}
          alt={"logo"}
          width={25}
          height={25}
          onClick={handleClick}
        />
      )}
      {showMenu && (
        <Image
          className="lg:hidden"
          src={"/hamburger2.svg"}
          alt={"logo"}
          width={25}
          height={25}
          onClick={handleClick}
        />
      )}
      <ul
        className={cn(
          "absolute left-8 right-8 top-20 flex h-[0px] flex-col items-center gap-8 overflow-hidden bg-[#181818] font-bold transition-all duration-500 lg:hidden",
          showMenu && "h-[180px] py-5",
        )}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
};

export default Hamburger;
