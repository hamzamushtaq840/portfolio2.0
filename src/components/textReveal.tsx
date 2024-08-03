"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TextReveal() {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom 50%",
        markers: true,
      },
      color: "#ffffff",
      duration: 10,
      stagger: 2,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <>
      <div className="mx-32 my-20 flex justify-center">
        <div ref={triggerRef} className="w-1/2">
          {text.split("").map((letter, index) => (
            <span
              className="reveal-text text-justify text-7xl font-bold text-[#20262E]"
              key={index}
              ref={(el) => {
                if (el) lettersRef.current[index] = el;
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TextReveal;
