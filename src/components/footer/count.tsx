"use client";
import React, { useEffect, useState } from "react";
import countapi from "countapi-js";

const Count = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const updateCounter = async () => {
      try {
        console.log("Fetching count...");
        // Increment the count
        const incrementResponse = await countapi.hit(
          "hamzamushtaq.vercel.app",
          "visits",
        );
        console.log("Response received:", incrementResponse);

        // Set the count state to update the display
        setCount(incrementResponse.value);
      } catch (error) {
        console.error("Error updating the counter:", error);
      }
    };

    updateCounter();
  }, []);

  return <div>Count: {count !== null ? count : "Loading..."}</div>;
};

export default Count;
