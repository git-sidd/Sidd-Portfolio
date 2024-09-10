// Import your icons or images
import GitHubIcon from "../../../../public/github.png";
import LinkedinIcon from "../../../../public/linkedin.png";
import InstagramIcon from "../../../../public/instagram.png";

import Link from "next/link";
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";
import { WobbleCard } from "../ui/wobble-card";
import { CardSpotlight } from "../ui/card-spotlight";

import React from "react";

function Socialmedia() {
  return (
    <div>
      <CardSpotlight>
        <WobbleCard >
        <p className="text-center font-serif font-bold mt-2 text-2xl text-white z-30">Connect Me 🌐</p>
        <div className="flex md:flex-row flex-col  my-4 ">
          <PinContainer title="GitHub" href="https://github.com/git-sidd">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[100px] h-[100px]">
              <Link href="https://github.com/git-sidd" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={GitHubIcon}
                    alt="GitHub"
                    className="w-full h-full object-cover rounded-lg"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </div>
          </PinContainer>

          <PinContainer
            title="LinkedIn"
            href="https://www.linkedin.com/in/siddhesh-patole-b1b365259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[100px] h-[100px]">
              <Link
                href="https://www.linkedin.com/in/siddhesh-patole-b1b365259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    className="w-full h-full object-cover rounded-lg"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </div>
          </PinContainer>
          <PinContainer
            title="Instagram"
            href="https://instagram.com/patole_siddhesh"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[100px] h-[100px]">
              <Link href="https://instagram.com/patole_siddhesh" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    className="w-full h-full object-cover rounded-lg"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </div>
          </PinContainer>
          </div>
        </WobbleCard>
      </CardSpotlight>
    </div>
  );
}

export default Socialmedia;
