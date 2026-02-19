"use client";

import { motion } from "framer-motion";
import { PurpleButton } from "./ui/PurpleButton";
import { Mail, User, Globe, MapPin } from "lucide-react";

export default function Contact() {
 return (
  <section
   id="contact"
   className="pb-[116px] pt-[50px] px-[138px] bg-black relative overflow-hidden">
   {/* Background Glow - Top Center "Half Circle" Effect */}
   <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#F204FF]/30 rounded-full blur-[248px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

   <div className="relative z-10">
    {/* Designs Tag - Matching Services.tsx */}
    <div className="top-0 left-0 z-20 pb-[39px]">
     <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#F204FF] to-[#AD66B1] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/50">
       <span className="italic">N</span>
      </div>
      <span className="text-white font-bold text-xl">Designs</span>
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

       {/* Overlay Content */}
       <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black/20">
        <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
         CONTACT US
        </h3>

        <div className="flex gap-4">
         {[
          { icon: Mail },
          { icon: User },
          { icon: Globe },
          { icon: MapPin },
         ].map((item, i) => (
          <div
           key={i}
           className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
           <item.icon size={18} />
          </div>
         ))}
        </div>
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
