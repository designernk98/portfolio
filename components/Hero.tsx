"use client";

import { Button } from "./ui/Button";
import { Facebook, Linkedin } from "lucide-react"; // Added Icons
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PurpleButton } from "./ui/PurpleButton";
import { TypewriterText } from "./ui/TypewriterText";

export default function Hero() {
 return (
  <section
   id="home"
   className="min-h-screen px-4 md:px-8 lg:px-[40px] xl:px-[138px] flex items-center justify-center pt-28 md:pt-20 overflow-hidden bg-black">
   <div className="container px-0 grid lg:grid-cols-2 gap-12 items-center relative z-10">
    {/* Text Content */}
    <motion.div
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
     className="flex flex-col gap-6 relative z-30">
     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      Hello <span className="text-[#F204FF]">it's</span> me
     </h2>

     <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight whitespace-nowrap">
      <span className="bg-clip-text text-transparent bg-linear-to-r from-[#F204FF] to-white">
       NOOR UL HUDA SHAH
      </span>
     </h1>

     <div className="text-xl md:text-3xl lg:text-4xl font-bold text-white flex items-center gap-2">
      <span>and I'm a</span>
      <span className="text-[#F204FF]">
       <TypewriterText text="UI/UX Designer" cursorColor="transparent" />
      </span>
     </div>

     <p className="max-w-lg text-gray-400 leading-relaxed text-base md:text-lg mt-4">
      Designing intuitive digital experiences that balance user needs and
      business goals. Skilled in research, wireframing, and polished UI
      execution. Focused on clarity, usability, and meaningful interactions.
     </p>

     {/* Social Icons & Buttons */}
     <div className="flex flex-col gap-6 mt-6">
      <div className="flex gap-4">
       {[
        {
         Icon: (props: any) => (
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="currentColor"
           {...props}>
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.359-5.292c0-5.467 4.457-9.914 9.916-9.914 2.64 0 5.122 1.03 6.988 2.894a9.842 9.842 0 012.893 6.917c-.004 5.466-4.46 9.913-9.918 9.913" />
          </svg>
         ),
         href: "https://wa.me/923291419436",
        },
        { Icon: Facebook, href: "#" },
        { Icon: Linkedin, href: "#" },
       ].map(({ Icon, href }, i) => (
        <a
         key={i}
         href={href}
         className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-[#F204FF] hover:border-[#F204FF] transition-all duration-300 shrink-0">
         <Icon size={20} />
        </a>
       ))}
      </div>

      <div>
       <PurpleButton href="/cv.pdf" target="_blank">
        Download CV
       </PurpleButton>
      </div>
     </div>
    </motion.div>

    {/* Hero Image */}
    <motion.div
     initial={{ opacity: 0, scale: 0.9 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.8 }}
     className="relative flex justify-center lg:justify-end items-center">
     {/* We use a placeholder logic here as requested, simulating the girl image */}
     {/* Determine the exact visual style - the user mentioned "that girl image" */}
     {/* I'll use a container with an illustrative placeholder */}
     <div className="relative w-full max-w-[580px] aspect-square md:w-[500px] md:h-[600px] z-10">
      {/* This div represents the image area. Since we don't have the exact asset, we use a placeholder standard or the one uploaded if it matches. 
            The user said "i will add my own u can use any dummy image there". 
            I will use a generic placeholder URL or a solid block with an icon. 
        */}
      <div className="w-full h-full relative py-[40px] pr-[200px] lg:pr-0">
       <img
        src="/girl.svg"
        alt="Profile"
        className="object-obtain w-full h-full drop-shadow-2xl"
       />
      </div>
     </div>
     {/* Specific Blur Background behind the girl - Right Side */}
     <div className="absolute top-1/2 right-[10%] w-[587px] h-[571px] bg-[#f204ffa7] rounded-full blur-[70px] -translate-y-1/2 z-0 pointer-events-none" />
    </motion.div>
   </div>
  </section>
 );
}
