"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PurpleButton } from "./ui/PurpleButton";
import { Pen } from "lucide-react";
import { TypewriterText } from "./ui/TypewriterText";

export default function Services() {
 return (
  <section
   id="services"
   className="pb-[116px] pt-[50px] px-[138px] min-h-screen bg-[radial-gradient(circle_at_85%_50%,#880096_0%,#f204ff75_25%,#000000_58%)] overflow-hidden relative">
   <div className="relative z-10">
    {/* Logo - Top Left */}
    <div className=" top-0 left-0 z-20 pb-[39px]">
     <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F204FF] to-[#AD66B1] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/50">
       <span className="italic">N</span>
      </div>
      <span className="text-white font-bold text-xl">Designs</span>
     </div>
    </div>

    {/* Main Grid Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-center pt-16 md:pt-0">
     {/* Service Card - Left */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6">
      <div>
       <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Our{" "}
        <span className="text-[#F204FF]">
         <TypewriterText text="Services" cursorColor="transparent" />
        </span>
       </h2>
      </div>

      {/* Service Card */}
      <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-8 border border-white/10 w-[429px] h-[429px] hover:border-[#f204ff] hover:border-2">
       <div className="flex items-start gap-4 mb-6">
        <Image src="/pointer.png" alt="pointer" width={32} height={32} />
       </div>

       <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
        I provide UX/UI design services focused on creating intuitive digital
        experiences. My work includes user research, wireframing, and user flow
        design. I design visually engaging, responsive interfaces for web and
        mobile. I also create design systems and collaborate closely with
        developers for smooth handoff.
       </p>

       <PurpleButton>Read More</PurpleButton>
      </div>
     </motion.div>

     {/* Circular Image - Right */}
     <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center lg:justify-end relative">
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] shrink-0 rounded-full overflow-hidden border-2 border-white/10">
       <Image
        src="/service.jpg"
        alt="Our Services"
        fill
        className="object-cover"
        priority
       />
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
