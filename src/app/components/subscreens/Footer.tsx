"use client";
import React from "react";
import {FaHeartbeat , FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 z-50 fixed bg-black border-gray-600 border-[0.2px]  w-full py-3 bottom-0 ">
        <div className="text-2xl font-bold"><FaCode /></div>
        <h2>with</h2>
        <div className="text-xl"><FaHeartbeat/></div>
        <h2>by Siddhesh Pornima Ramesh Patole</h2>
    </div>
  );
};

export default Footer;
