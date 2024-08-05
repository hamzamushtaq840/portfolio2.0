import Image from "next/image";

const Marquee = () => {
  const items = [
    { src: "/react.svg", alt: "React", width: 45, height: 80 },
    { src: "/nextjs.svg", alt: "Next.js", width: 40, height: 128 },
    { src: "/javascript.svg", alt: "JavaScript", width: 50, height: 128 },
    { src: "/typescript.svg", alt: "TypeScript", width: 35, height: 80 },
    { src: "/docker.svg", alt: "Docker", width: 50, height: 80 },
    { src: "/github2.svg", alt: "GitHub", width: 40, height: 80 },
    { src: "/postgresql.svg", alt: "PostgreSQL", width: 40, height: 80 },
    { src: "/mysql.svg", alt: "MySQL", width: 40, height: 80 },
    { src: "/nodejs.svg", alt: "Node.js", width: 100, height: 68 },
    { src: "/gitBash.svg", alt: "Node.js", width: 40, height: 68 },
  ];

  return (
    <div className="overflow-hidden py-20">
      <div className="stock-ticker bg-black">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex gap-16 text-lg font-bold uppercase">
              {/* <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              /> */}
              {item.alt}
              <Image
                src={"/break.svg"}
                priority
                alt="pfp"
                height={20}
                width={20}
              />
            </li>
          ))}
        </ul>
        <ul className="marquee-item">
          {items.map((item, index) => (
            <li key={index} className="flex gap-16 text-lg font-bold uppercase">
              {/* <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              /> */}
              {item.alt}
              <Image
                src={"/break.svg"}
                priority
                alt="pfp"
                height={20}
                width={20}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
