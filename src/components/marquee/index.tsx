import Image from "next/image";
import React from "react";

const Marquee = () => {
  const items = [
    { src: "/react.svg", alt: "React", width: 60, height: 80 },
    { src: "/nextjs.svg", alt: "Next.js", width: 50, height: 128 },
    { src: "/javascript.svg", alt: "JavaScript", width: 60, height: 128 },
    { src: "/typescript.svg", alt: "TypeScript", width: 45, height: 80 },
    { src: "/docker.svg", alt: "Docker", width: 60, height: 80 },
    { src: "/github.svg", alt: "GitHub", width: 50, height: 80 },
    { src: "/postgresql.svg", alt: "PostgreSQL", width: 50, height: 80 },
    { src: "/mysql.svg", alt: "MySQL", width: 60, height: 80 },
    { src: "/nodejs.svg", alt: "Node.js", width: 130, height: 68 },
    { src: "/gitBash.svg", alt: "Node.js", width: 50, height: 68 },
  ];

  return (
    <div className="overflow-hidden py-20">
      <div className="stock-ticker">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </li>
          ))}
        </ul>
        <ul className="marquee-item">
          {items.map((item, index) => (
            <li key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
