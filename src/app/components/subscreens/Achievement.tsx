"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { WobbleCard } from "../ui/wobble-card";
import { CardSpotlight } from "../ui/card-spotlight";


export function Achievement() {
    return (
      <div className="h-[22rem] rounded-md flex flex-col antialiased bg-white dark:bg-black/40 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mx-auto border border-white/20">
        <CardSpotlight>
       <WobbleCard>
        <p className="text-center font-serif font-bold my-1 text-2xl text-white z-30">Achievements🏆</p>
       <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
          className="z-30"
          
        />
       </WobbleCard>
       </CardSpotlight>
      </div>
    );
  }

  const testimonials = [
    {
      src:"/grps.jpg",
      alt: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      src:"/pccoer.jpeg",
      alt: "William Shakespeare",
      title: "Hamlet",
    },
    {
        src:"/dhgtrophy.jpg",
        alt: "sprp",
        title: "dhg",
      },
      {
        src:"/topperclg.jpg",
        alt: "sid Shakespeare",
        title: "pccoer",
      },]