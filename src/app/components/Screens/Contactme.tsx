"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";



function Contactme() {
  const [name,setname]=useState('')
  const [message,setmessage]=useState('')
  const [phone,setphone]=useState('')
  
  const handleSubmit = () => {
    const phoneNumber = '918766981375'; // Replace with your WhatsApp number
    const textMessage = `Name: ${name}%0AMessage: ${message}%0APhone: ${phone}`;

    window.open(`https://wa.me/${phoneNumber}?text=${textMessage}`, '_blank');
  };
  
  return (
    <div id="contact" className=" md:h-[28rem]  md:mt-32  max-w-md w-full mx-auto px-6 md:px-4 rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black/40 z-20 border border-white/20">
      <h2 className="font-bold text-2xl text-center font-serif text-neutral-800 dark:text-neutral-200">
        Contact Me ☎
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Kindly fill this form in descent manner
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer  className="mb-4">
          <Label htmlFor="name"> Name</Label>
          <Input id="name"  placeholder="name" type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Moble No.</Label>
          <Input id="phone" placeholder="phone" type="tel" value={phone} onChange={(e)=>setphone(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="message"  type="textarea" value={message} onChange={(e)=>setmessage(e.target.value)} />
        </LabelInputContainer>
        <button
          onSubmit={handleSubmit}
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default Contactme;
