"use client";
import React, { useEffect } from "react";
// import fetchAndUpdateData from "../utils/index";
const Five = () => {
  useEffect(() => {
    console.log("Inside Effect");
    const getsol = async () => {
      const response = await fetch("/api/getset", {
        cache: "no-store",
        mode: "no-cors",
      });
      const data = await response.json();
      //const result = await response.text();
      console.log("Atfive", data);
    };
    const interval = setInterval(getsol, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-2 border-red-600">
      This is five secound response
    </div>
  );
};

export default Five;
