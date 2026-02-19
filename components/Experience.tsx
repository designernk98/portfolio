"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PurpleButton } from "./ui/PurpleButton";
import { Pen } from "lucide-react";
import { TypewriterText } from "./ui/TypewriterText";

export default function Experience() {
 return (
  <section
   id="Experience"
   className="pb-[116px] pt-[50px] px-[138px] min-h-screen bg-[radial-gradient(circle_at_15%_50%,#880096_0%,#f204ff75_23%,#000000_55%)] overflow-hidden relative">
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
    <div className="flex flex-row-reverse justify-between    gap-12 items-center pt-16 md:pt-0">
     {/* Service Card - Left */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-[53px]">
      <div>
       <h2 className="text-[36px] font-[700] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_30%,#F204FF_100%)] bg-clip-text text-transparent">
        Experience
       </h2>
      </div>

      {/* Service Card */}
      <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl p-8 border border-white/10 w-[429px] h-[429px] hover:border-2 hover:border-[#f204ff]">
       <div className="flex items-start gap-4 mb-6">
        <Image src="/pointer.png" alt="pointer" width={32} height={32} />
       </div>

       <p className="text-gray-300 mb-6">
        <ul className="text-[18px] font-[400]">
         <li>• UX/UI Designer with 1 year professional experience</li>
         <li>• One year of professional UX/UI design experience</li>
         <li>• UX/UI Designer — 1 year hands-on experience</li>
         <li>• UX/UI Designer with 1 year industry experience</li>
         <li>• Experience in UX research and UI design</li>
        </ul>
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
        src="/experience.jpg"
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
