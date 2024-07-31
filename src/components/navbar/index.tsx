import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-32 py-7">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt={"logo"} width={32} height={32} />
        <span className="text-3xl font-bold">hamza.</span>
      </div>

      <ul className="flex gap-8 font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="border border-white px-6 py-2">Let's Talk</button>
    </div>
  );
};

export default NavBar;
