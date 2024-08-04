import Image from "next/image";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <div className="relative flex items-center justify-between px-7 pb-2 pt-7 lg:px-32 lg:pb-3 lg:pt-7">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt={"logo"} width={32} height={32} />
        <span className="text-3xl font-bold">hamza.</span>
      </div>

      <ul className="hidden gap-8 font-semibold lg:flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="hidden border border-white px-6 py-2 lg:block">
        Let&apos;s Talk
      </button>
      <Hamburger />
    </div>
  );
};

export default NavBar;
