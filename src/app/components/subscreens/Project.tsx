"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa"; 

const Project = () => {
  const projects = [
    {
        title: "Sainik Mitra",
      description:
        "WebApp build for supporting martyrs families",
      image: "https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867217/sm_djcnsr.png",
      github: "https://github.com/git-sidd/SainikMitra.git"
    },
    {
        title: "Blog App",
      description:
        "Blog App Build using MERN Stack",
      image: "https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867156/blog_jkswn7.png",
      github: "https://github.com/git-sidd/BlogApp.git"
    },
    {
      title: "Nxg Robotics",
      description:
        "Freelancing Project",
      image: "https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867201/nxg_lhn4mk.png",
      github: "https://nxgrobotics.in"
    },
    {
      title: "Food Ordering Site",
      description:
        "A food delivery site with menu browsing, custom orders, and real-time tracking.",
      image: "https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867180/food_rkyagr.png",
      github: "https://github.com/git-sidd/Food-Delivery-App",
    },
    
    {
      title: "Razorpay Clone",
      description:
        "Frontend-only clone of Razorpay's landing page with clean UI and full responsiveness.",
      image: "https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867204/razorpay_ehgtsw.png",
      github: "https://github.com/git-sidd/Razorpay-Clone",
    },
    {
      title: "Ed-Tech Site",
      description:
        "An educational platform frontend with course search, filtering, and responsive layout.",
      image: "https://res.cloudinary.com/dr8jemvpw/image/upload/v1751867165/course_dkrphy.png",
      github: "https://github.com/git-sidd/CourseApp",
    }
  ];

  return (
    <div className="flex flex-col gap-16 px-4 md:px-12 py-12 min-h-screen">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center z-30">
            <Link href={project.github} target="_blank">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Description */}
          <div className=" w-full z-30 md:w-[30%] bg-black/30 border-gray-600 border-[1px] text-white p-4 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-extrabold mb-4 text-blue-400">
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed mb-4">{project.description}</p>

           
            <Link href={project.github} target="_blank">
              <button className="flex items-center gap-2 bg-black/80 px-4 py-2 rounded-md text-white hover:bg-black/70 text-sm transition">
                <FaGithub className="text-lg" />
                View on GitHub
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
