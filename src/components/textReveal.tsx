"use client";
import { cn } from "@/utils/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

function TextReveal({
  text,
  className,
  start,
  end,
  marker,
}: {
  text: string;
  className: string;
  start: string;
  end: string;
  marker?: boolean;
}) {
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: start,
        end: end,
        markers: marker,
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
      <div>
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span
              className={cn(
                "reveal-text text-justify font-bold text-[#20262E]",
                className,
              )}
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
