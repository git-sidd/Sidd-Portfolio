import { AuroraBackground } from "../app/components/ui/aurora-background";
import Contactme from "./components/Screens/Contactme";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import About from "./components/Screens/About";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <AuroraBackground>
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col space-y-5 mb-[3rem] overflow-x-hidden h-full overflow-y-scroll hide-scrollbar">
            <About />
            <Contactme />
            
          </div>
        </BackgroundBeamsWithCollision>
      </AuroraBackground>
    </div>
  );
}
