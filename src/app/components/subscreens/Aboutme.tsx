import React from 'react'
import Image from 'next/image';
import { CardSpotlight } from "../../components/ui/card-spotlight";
import myimg from "../../../../public/sidselfie.jpg"
import { WobbleCard } from "../ui/wobble-card";
import { Button } from "../ui/moving-border";
import Link from 'next/link';
function Aboutme() {
  return (
    <div>
      <CardSpotlight className="md:h-76 h-auto w-96 text-white rounded-lg mx-5 md:mx-auto">
     <WobbleCard className='w-full'>
     <p className=" text-xl text-center font-serif font-semibold text-white z-30 mb-4">About Me 😎</p>
      <div className='flex flex-col items-center justify-center space-y-4 my-4'>
        <div className='flex md:flex-row flex-col gap-4 items-center justify-center rounded-full'>
            <div className='h-[150px] w-[150px] md:h-[100px] md:w-[100px] z-30'>
            <Image src={myimg} alt='siddhesh' className='w-full h-full md:rounded-3xl rounded-full object-fill'></Image>
            </div>
            <div className="text-[1.35rem] font-bold font-serif relative z-20 mt-2">
            Siddhesh Patole
            </div>
        </div>
        <div className=' relative z-20 mt-2   flex items-center justify-center text-center'>
        I'm  a 3rd-year Computer Engineering student at PCCOER, passionate about web development and Cyber Security. I love reading books and playing outdoor games to stay inspired and active.
        </div>
        <Link href={"https://drive.google.com/file/d/1E3cZsgUuFpXdFfI020JWrhMBQjmOrWvo/view?usp=drive_link"}>
        <Button borderRadius="1.0rem"
                className="bg-white dark:bg-black/40 text-white dark:text-white border-neutral-400 dark:border-slate-800"
              >
                
                Resume
          </Button></Link>
      </div>
     </WobbleCard>
      </CardSpotlight>
    </div>
  )
}

export default Aboutme
