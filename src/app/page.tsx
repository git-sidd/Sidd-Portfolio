import { AuroraBackground } from "../app/components/ui/aurora-background";
import Contactme from "./components/Screens/Contactme";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import About from "./components/Screens/About";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden ">
      <AuroraBackground>
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col space-y-5 overflow-x-hidden h-full overflow-y-scroll hide-scrollbar">
            <About />
            <Contactme />
            <div className="bg-black  w-full py-3 bottom-0 rounded-md">
              <p className="text-center font-normal text-white">
                Developed by Siddhesh Pornima Ramesh Patole
              </p>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </AuroraBackground>
    </div>
  );
}
