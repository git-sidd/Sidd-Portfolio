"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";
import { CardSpotlight } from "../ui/card-spotlight";
import Link from "next/link";
const content = [
  {
    title: "Food Ordering Site",
    description:
      "Food Ordering Site: A web application that allows users to browse menus, customize orders, and place them directly online. Built with a user-friendly interface, the site includes features like real-time order tracking, secure payment integration, and personalized recommendations to enhance the overall user experience. Developed using modern web technologies to ensure responsiveness and scalability.",

    content: (
      <div className=" w-full  flex items-center justify-center text-white h-full ">
        <Link href={"https://github.com/git-sidd/Food-Delivery-App"}>
          <Image
            src="/food.png"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "PCET Youthconference Site",
    description:
      "PCET Youth Conference Site: A dedicated website for the PCET Youth Conference, providing detailed information about the event, including the schedule, speakers, registration details, and venue information. The site is designed with an engaging layout to capture the dynamic spirit of the conference, featuring countdown timers, interactive elements, and responsive design to ensure accessibility across all devices.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Link href={"https://pcet.org.in/youthconference/"}>
          <Image
            src="/youth.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },

  {
    title: "Razorpay Clone",
    description:
      "Razorpay Clone: A frontend-only web application that mimics the design and user interface of the Razorpay payment gateway. This project focuses on recreating the sleek and intuitive layout, user interactions, and responsive design of the original platform, showcasing skills in HTML, CSS, and JavaScript.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Link href={"https://github.com/git-sidd/Razorpay-Clone"}>
          <Image
            src="/razorpay.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Ed-Tech Site",
    description:
      "Ed-Tech Site: A frontend web application designed for an educational platform, allowing users to search and filter through a wide range of courses. The site features an intuitive interface with dynamic search capabilities, category-based filtering, and responsive design elements to provide a seamless user experience. Developed using modern web technologies, the site ensures fast and efficient navigation for discovering courses.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Link href={"https://github.com/git-sidd/CourseApp"}>
          <Image
            src="/course.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "GIF Searching Site",
    description:
      "GIF Searching Site:Here I have use GIF API and Utility(userdefined) Hooks .Wherein I have Created two cards one which fetches random GIF and another card fetches the GIF to be search",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Link href={"https://github.com/git-sidd/GifAPI-APP"}>
          <Image
            src="/gif.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </Link>
      </div>
    ),
  },
];

function Projects() {
  return (
    <div className="p-100 rounded-xl ">
      <CardSpotlight>
        <WobbleCard>
          <p className=" text-xl text-center font-serif font-semibold ml-4 md:ml-0 mt-2 my-4 text-white z-50">
            Projects 🖥
          </p>

          <StickyScroll content={content} />
        </WobbleCard>
      </CardSpotlight>
    </div>
  );
}

export default Projects;
