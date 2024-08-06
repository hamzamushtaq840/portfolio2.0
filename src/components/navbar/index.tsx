import Image from "next/image";
import Hamburger from "./Hamburger";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="relative flex items-center justify-between px-7 pb-2 pt-7 lg:px-32 lg:pb-3 lg:pt-7">
      <div className="flex items-center gap-2">
        <Image priority src={"/logo.svg"} alt={"logo"} width={32} height={32} />
        <span className="text-3xl font-bold">hamza.</span>
      </div>

      <ul className="hidden gap-8 font-semibold lg:flex">
        <li>
          <Link className="hover:text-white/70" href="/#about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/70" href="/#experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/70" href="/#projects">
            Projects
          </Link>
        </li>
      </ul>

      <Link
        className="hidden border border-white px-6 py-2 hover:border-textOrange hover:text-white/80 lg:block"
        href="/#contact"
      >
        Let&apos;s Talk
      </Link>
      <Hamburger />
    </div>
  );
};

export default NavBar;
