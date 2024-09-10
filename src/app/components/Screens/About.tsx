'use client';
import React, { useState, useEffect } from "react";
import Aboutme from "../subscreens/Aboutme";
import Socialmedia from "../subscreens/Socialmedia";
import { WobbleCard } from "../ui/wobble-card";
import {Achievement} from "../../components/subscreens/Achievement"
import { Skills } from "../subscreens/Skills";

import { InfiniteSlider } from "../subscreens/Tech";
import { CardSpotlight } from "../ui/card-spotlight";
import Projects from "../subscreens/Projects";

function About() {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect hook to set isMounted to true after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return null or a loading indicator while the component mounts
    return null;
  }
  

  return (
    <div id="about" className="h-auto mt-[10rem]">
      <div className="flex  flex-col mx-auto gap-4">
       
      <div className="flex flex-col md:flex-row  md:justify-start justify-center items-center md:items-start  gap-4">
          <div className="flex flex-col items-center justify-center">
            <Aboutme />
          
          </div>

          
            {/* card for location */}
            <div className="flex flex-col md:gap-10 gap-3">
            <CardSpotlight>
           <div className="flex flex-col relative w-full ">
                <WobbleCard>
                <p className=" text-xl text-center font-serif font-semibold ml-4 md:ml-0  text-white z-30">Tech I ❤️</p>
                <InfiniteSlider></InfiniteSlider>
                </WobbleCard>
           </div>
            </CardSpotlight>
            <CardSpotlight>
           <div className="flex flex-col relative w-full ">
                <WobbleCard>
                <p className=" text-xl text-center font-serif font-semibold ml-4 md:ml-0 mt-2 text-white z-30">Skills I Mastered 🥷🏻</p>
                <Skills></Skills>
                </WobbleCard>
           </div>
            </CardSpotlight>
            
            </div>

      </div>



       
        <div className="flex flex-col gap-5">
          <Achievement></Achievement>
          <Socialmedia></Socialmedia>
          <Projects></Projects>
          
        </div>
      </div>
    </div>
  );
}

export default About;
