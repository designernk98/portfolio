"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PurpleButton } from "./ui/PurpleButton";
import { TypewriterText } from "./ui/TypewriterText";

export default function About() {
 return (
  <section
   id="about"
   className="pb-[42px] pt-[39px] px-4 md:px-8 lg:px-[40px] xl:px-[138px] h-full bg-[radial-gradient(circle_at_15%_50%,#880096_0%,#f204ff75_35%,#000000_75%)] overflow-hidden relative">
   <div className=" relative z-10">
    {/* Logo - Top Left */}
    <div className="absolute top-0 left-0 md:left-0 z-20">
     <div className="relative w-[120px] h-[40px]">
      <Image
       src="/designs.png"
       alt="Designs Logo"
       fill
       className="object-contain"
       priority
      />
     </div>
    </div>

    {/* Main Grid Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-center pt-16 md:pt-0">
     {/* Image Side - Left */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex md:justify-start justify-center relative pt-10">
      <div className="relative w-full max-w-[286px] min-h-[467px] aspect-3/4">
       <Image
        src="/girl.svg"
        alt="About Me"
        fill
        className="object-contain"
        priority
       />
      </div>
     </motion.div>

     {/* Text Side - Right */}
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 text-white">
      <div>
       <h2 className="text-4xl md:text-5xl font-bold mb-2">
        <TypewriterText text="About Me" cursorColor="transparent" />
       </h2>
       <h3 className="text-3xl md:text-4xl font-bold text-[#F204FF]">
        <TypewriterText text="UI/UX Designer" cursorColor="transparent" />
       </h3>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-xl">
       Creative and detail-oriented UI/UX Designer with one year of hands-on
       experience designing user-centered digital products. Skilled in Figma for
       wireframing, prototyping, and interface design. Backed by a Master's
       degree in English Literature, bringing strong communication, research,
       and storytelling abilities into design thinking. Holds a Diploma in IT
       Computer, providing solid technical understanding for digital
       environments
      </p>

      <div className="mt-4">
       <PurpleButton className="cursor-pointer">See more</PurpleButton>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
