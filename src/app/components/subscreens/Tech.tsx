import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
 
  const LOGOS = [
    <FigmaLogoIcon key={1} width={70} height={70} className="text-slate-800" />,
    <FramerLogoIcon key={2} width={70} height={70} className="text-slate-800" />,
    <SketchLogoIcon key={3} width={70} height={70} className=" text-slate-800" />,
    <TwitterLogoIcon key={4} width={70} height={70} className="text-slate-800" />,
    <GitHubLogoIcon key={5} width={70} height={70} className="text-slate-800" />,
    <VercelLogoIcon key={6} width={70} height={70} className="text-slate-800" />,
    <NotionLogoIcon key={7} width={70} height={70} className="text-slate-800" />,
    <DiscordLogoIcon key={8} width={70} height={70} className="text-slate-800" />,
    <InstagramLogoIcon key={9} width={70} height={70} className="text-slate-800" />,
    <LinkedInLogoIcon key={10} width={70} height={70} className="text-slate-800" />,
  ];
  
  export const InfiniteSlider = () => {
    const sliderAnimation = {
        display: 'flex',
        animation: 'infiniteSlider 10s linear infinite',
      };
    
      const containerKeyframes = `
        @keyframes infiniteSlider {
          0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      `;
    return (
      <div id="partners" className="mb-4">
      
      <style>
        {containerKeyframes}
      </style>
      <div className="  mt-5 relative m-auto md:w-[800px] overflow-hidden bg-black rounded-lg z-30 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_10%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div style={sliderAnimation} className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[500px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[500px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  