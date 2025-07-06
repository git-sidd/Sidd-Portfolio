"use client";
import React from "react";


import { WobbleCard } from "../ui/wobble-card";
import { CardSpotlight } from "../ui/card-spotlight";

import Project from "./Project";


function Projects() {
  return (
    <div className="px-30  rounded-xl ">
      <CardSpotlight>
        <div className="md:p-4 h-screen ">
          <WobbleCard>
          <p className=" text-xl text-center  font-serif font-semibold ml-4 md:ml-0 mt-2 my-4 text-white z-50">
            Projects 🖥
          </p>
         <div className="max-h-[400px] overflow-scroll scroll-smooth scrollbar-hide">
           <Project/>
         </div>
         
        </WobbleCard>
        </div>
      </CardSpotlight>
    </div>
  );
}


export default Projects;
