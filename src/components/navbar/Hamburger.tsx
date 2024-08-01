"use client";
import { cn } from "@/utils/utils";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      el: null,
      container: document.body,
      className: "mf-cursor",
      innerClassName: "mf-cursor-inner",
      textClassName: "mf-cursor-text",
      mediaClassName: "mf-cursor-media",
      mediaBoxClassName: "mf-cursor-media-box",
      iconSvgClassName: "mf-svgsprite",
      iconSvgNamePrefix: "-",
      iconSvgSrc: "",
      dataAttr: "cursor",
      hiddenState: "-hidden",
      textState: "-text",
      iconState: "-icon",
      activeState: "-active",
      mediaState: "-media",
      stateDetection: {
        "-pointer": "a,button",
        "-hidden": "iframe",
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: "expo.out",
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      // hideMediaTimeout: 300,
    });

    return () => {
      cursor.destroy();
    };
  }, []);

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