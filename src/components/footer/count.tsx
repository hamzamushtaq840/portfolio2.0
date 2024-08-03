"use client";
import React, { useEffect, useState, useRef } from "react";

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
        console.log("Fetched count:", data);
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    const updateCounter = async () => {
      try {
        await fetch("/api/counter", { method: "POST" });
        fetchCount(); // Update the displayed count after incrementing
      } catch (error) {
        console.error("Error updating count:", error);
      }
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
