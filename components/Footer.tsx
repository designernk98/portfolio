"use client";

import Image from "next/image";

export default function Footer() {
 return (
  <footer
   id="footer"
   className="relative bg-black text-white pt-20 pb-10 overflow-hidden w-full">
   {/* Background Gradient - Matching design purple glow from top/center */}
   <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#4C0550]/40 rounded-full blur-[150px] -translate-x-1/2 -translate-y-[60%] pointer-events-none" />

   <div className="px-[138px]">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row justify-between items-start mb-20 relative z-10">
     {/* 1. Logo Section */}
     <div className="flex items-center gap-2 mb-10 lg:mb-0">
      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#F204FF] to-[#AD66B1] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/50">
       <span className="italic">N</span>
      </div>
      <span className="font-bold text-xl bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent">
       Designs
      </span>
     </div>

     {/* 2. Center Content - Get In Touch */}
     <div className="flex flex-col items-center text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 top-4">
      <h2 className="text-[40px] font-bold mb-12 tracking-wide uppercase bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent">
       GET IN TOUCH
      </h2>

      <div className="flex gap-16 text-left">
       {/* Contact Info */}
       <div className="flex flex-col gap-4">
        <a
         href="mailto:hudashahnks@gmail.com"
         className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent text-lg hover:text-white transition-colors">
         hudashahnks@gmail.com
        </a>
        <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent text-lg">
         +92 3219130436
        </p>
        <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent text-lg">
         Faisalabad , Pakistan
        </p>
       </div>

       {/* Social Links */}
       <div className="flex flex-col gap-4">
        <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent font-medium text-lg">
         Facebook , WhatsApp ,
        </p>
        <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent font-medium text-lg">
         Instagram
        </p>
        <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent text-lg mt-2">
         Indeed.com
        </p>
       </div>
      </div>
     </div>

     {/* 3. Right Image */}
     <div className="hidden lg:block relative w-[300px] h-[300px] -mt-10 -mr-20">
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
       <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10" />
       <Image
        src="/contact.png" // Using same image as contact for now, user requested "same this footer" image which looks like hand touching screen.
        // Since I don't have that specific image, I'll use a placeholder or check if one exists or use the contact one as fallback.
        // The design shows a hand touching a screen.
        alt="Get In Touch"
        fill
        className="object-cover"
       />
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
}
