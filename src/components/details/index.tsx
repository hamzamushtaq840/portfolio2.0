import { cn } from "@/utils/utils";
import React from "react";

const data = [
  { label: "YEARS OF EXPERIENCE", value: "4+" },
  { label: "PROJECT COMPLETED", value: "4+" },
  { label: "HAPPY CLIENTS", value: "4+" },
];

const Details = () => {
  return (
    <div className="grid grid-cols-3 px-56">
      {data.map((v, i) => {
        return (
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-5 border border-white py-6",
              i == 1 && "bg-white text-black",
            )}
          >
            <span className="text-6xl font-bold">{v.value}</span>
            <span className="text-lg font-bold">{v.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
