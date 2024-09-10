import {
    FaPython,
    FaPhp,
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
   
  } from 'react-icons/fa';
  import { SiC, SiCplusplus, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiMysql } from 'react-icons/si';
  
  // Replace the technology icons here with the appropriate icons
  const SKILL_ICONS = [
    <SiC key={1} size={70} className="text-slate-800 mx-6"  />,          // C
    <SiCplusplus key={2} size={70} className="text-slate-800 mx-6" />,  // C++
    <FaPython key={3} size={70} className="text-slate-800 mx-6" />,     // Python
    <FaPhp key={4} size={70} className="text-slate-800 mx-6" />,        // PHP
    <FaReact key={5} size={70} className="text-slate-800 mx-6" />,      // React JS
    <SiNextdotjs key={6} size={70} className="text-slate-800 mx-6" />,  // Next JS
    <SiExpress key={7} size={70} className="text-slate-800 mx-6" />,    // Express JS
    <FaNodeJs key={8} size={70} className="text-slate-800 mx-6" />,     // Node JS
    <FaBootstrap key={9} size={70} className="text-slate-800 mx-6" />,  // Bootstrap
    <FaHtml5 key={10} size={70} className="text-slate-800 mx-4" />,     // HTML
    <FaCss3Alt key={11} size={70} className="text-slate-800 mx-6" />,   // CSS
    <SiTailwindcss key={12} size={70} className="text-slate-800 mx-6" />, // Tailwind CSS
    <FaReact key={13} size={70} className="text-slate-800 mx-6" />,     // React Native
    <SiMysql key={14} size={70} className="text-slate-800 mx-6" />,     // MySQL
    <SiMongodb key={15} size={70} className="text-slate-800 mx-6" />,   // MongoDB
  ];
  
  export const Skills = () => {

    
    const sliderAnimation = {
      display: 'flex',
      animation: 'infiniteSlider 30s linear infinite',
    };
  
    const containerKeyframes = `
      @keyframes infiniteSlider {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `;
  
    return (
      <div id="skills" className="mb-7">
        <style>
          {containerKeyframes}
        </style>
        <div className="mt-2 relative m-auto md:w-[800px] overflow-hidden bg-black rounded-lg z-30 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_10%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div style={sliderAnimation} className="animate-infinite-slider flex w-[calc(250px*10)]">
            {SKILL_ICONS.map((icon, index) => (
              <div
                className="slide flex w-[500px] items-center justify-center"
                key={index}
              >
                {icon}
              </div>
            ))}
            {SKILL_ICONS.map((icon, index) => (
              <div
                className="slide flex w-[500px] items-center justify-center"
                key={index}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  