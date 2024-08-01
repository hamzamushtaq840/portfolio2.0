import { cn } from "@/utils/utils";
import React from "react";

const data = [
  { label: "YEARS OF EXPERIENCE", value: "4+" },
  { label: "PROJECT COMPLETED", value: "4+" },
  { label: "HAPPY CLIENTS", value: "4+" },
];

const Details = () => {
  return (
    <div className="grid grid-cols-3 px-8 lg:px-56">
      {data.map((v, i) => {
        return (
          <div
            key={i}
            className={cn(
              "flex flex-col items-center justify-center gap-5 border border-white py-6",
              i == 1 && "bg-white text-black",
            )}
          >
            <span className="h-1/2 text-4xl font-bold lg:text-6xl">
              {v.value}
            </span>
            <span className="h-1/2 text-center text-xs font-bold lg:text-lg">
              {v.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
