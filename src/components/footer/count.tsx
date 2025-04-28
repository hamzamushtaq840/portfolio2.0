"use client";
import { useEffect, useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchCount = async () => {
      try {
        const response = await fetch("/api/counter");
        const data = await response.json();
        console.log(data);
        setCount(data);
      } catch (error) {}
    };

    const updateCounter = async () => {
      try {
        await fetch("/api/counter", { method: "POST" });
        fetchCount(); // Update the displayed count after incrementing
      } catch (error) {}
    };

    updateCounter(); // Increment and fetch the count on component mount
  }, []);

  return (
    <div className="rounded-sm px-2 text-sm capitalize text-textOrange">
      Visit count : {count !== null ? count : "..."}
    </div>
  );
};

export default Count;
