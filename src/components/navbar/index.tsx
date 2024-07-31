import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-32 py-7">
      <Image src={"/logo.svg"} alt={"logo"} width={132} height={32} />

      <ul className="flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="border border-white px-6 py-2">Let's Talk</button>
    </div>
  );
};

export default NavBar;
