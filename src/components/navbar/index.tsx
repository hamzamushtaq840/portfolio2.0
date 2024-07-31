import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="px-32 py-7 flex justify-between items-center">
      <Image src={"/logo.svg"} alt={"logo"} width={132} height={32} />

      <ul className="flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="px-6 py-2 border border-white">Let's Talk</button>
    </div>
  );
};

export default NavBar;
