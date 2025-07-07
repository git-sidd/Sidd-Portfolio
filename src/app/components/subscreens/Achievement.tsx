"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { WobbleCard } from "../ui/wobble-card";
import { CardSpotlight } from "../ui/card-spotlight";


export function Achievement() {
    return (
      <div className="h-[22rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black/40 dark:bg-grid-white/[0.05] items-center md:justify-center relative overflow-hidden mx-auto border border-white/20">
        <CardSpotlight className="">
       <WobbleCard>
       <p className=" text-xl text-start md:text-center font-serif font-semibold ml-24 md:ml-0 mt-2 mb-4 text-white z-30">Achievements 🏆</p>
       <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          className="z-30 "
          
        />
       </WobbleCard>
       </CardSpotlight>
      </div>
    );
  }

  const testimonials = [
    {
      src:"https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867196/grps_vr4oqh.jpg",
      alt: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      src:"https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867197/pccoer_ffqik4.jpg",
      alt: "William Shakespeare",
      title: "Hamlet",
    },
    {
        src:"https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867210/rme_pwa6w4.jpg",
        alt: "sprp",
        title: "dhg",
      },
      {
        src:"https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867223/topperclg_kuickj.jpg",
        alt: "sid Shakespeare",
        title: "pccoer",
      },]