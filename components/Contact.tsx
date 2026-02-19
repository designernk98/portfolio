"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PurpleButton } from "./ui/PurpleButton";
import { Mail, User, Globe, MapPin } from "lucide-react";

export default function Contact() {
 return (
  <section
   id="contact"
   className="pb-[116px] pt-[50px] px-4 md:px-8 lg:px-[40px] xl:px-[138px] bg-black relative overflow-hidden">
   {/* Background Glow - Top Center "Half Circle" Effect */}
   <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#F204FF]/60 rounded-full blur-[248px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

   <div className="relative z-10">
    {/* Designs Tag - Matching Services.tsx */}
    <div className="top-0 left-0 z-20 pb-[39px]">
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

    <div className="grid lg:grid-cols-2 gap-12 items-center">
     {/* Left Side: Circular Image with Overlay */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center lg:justify-start">
      <div className="relative w-[371px] h-[371px] shrink-0 rounded-full overflow-hidden border border-white/10 shadow-2xl">
       {/* Background Image Placeholder */}
       <div className="absolute inset-0 bg-blue-900/40">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/50 to-purple-900/80 mix-blend-overlay" />
        <img
         src="/contact.png"
         alt="Contact Background"
         className="w-full h-full object-cover opacity-60"
         onError={(e) => {
          e.currentTarget.style.display = "none";
         }}
        />
       </div>
      </div>
     </motion.div>

     {/* Right Side: Form */}
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-10">
      {/* Form */}
      <form className="flex flex-col gap-6">
       <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
         <label className="text-base font-bold text-white">Your name</label>
         <input
          type="text"
          placeholder="Name"
          className="bg-[#4C0550] text-white/80 placeholder:text-white/30 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all border-none"
         />
        </div>
        <div className="flex flex-col gap-2">
         <label className="text-base font-bold text-white">Your email</label>
         <input
          type="email"
          placeholder="Email"
          className="bg-[#4C0550] text-white/80 placeholder:text-white/30 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all border-none"
         />
        </div>
       </div>

       <div className="flex flex-col gap-2">
        <label className="text-base font-bold text-white">Your Message</label>
        <textarea
         rows={6}
         placeholder="Message"
         className="bg-[#4C0550] text-white/80 placeholder:text-white/30 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 transition-all border-none resize-none"
        />
       </div>

       <div className="mt-4">
        <PurpleButton className="px-10! py-3! text-lg! font-medium!">
         Send me
        </PurpleButton>
       </div>
      </form>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
