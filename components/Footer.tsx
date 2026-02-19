"use client";

import Image from "next/image";

export default function Footer() {
 return (
  <footer
   id="footer"
   className="relative bg-black text-white pt-20 pb-[90px] overflow-hidden w-full">
   {/* Background Gradient - Matching design purple glow from top/center */}
   <div className="absolute top-[40%] left-1/2 w-[800px] h-full bg-[#F204FF]/29 rounded-full blur-[150px] -translate-x-1/2 -translate-y-[60%] pointer-events-none" />

   <div className="px-4 md:px-8 lg:px-[40px] xl:px-[138px]">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row justify-between  items-start mb-20 relative z-10">
     {/* 1. Logo Section */}
     <div className="flex items-center gap-2 mb-10 lg:mb-0">
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

     {/* 2. Center Content - Get In Touch */}
     <div className="flex flex-col items-center text-center lg:absolute lg:left-1/3 lg:-translate-x-1/2 top-4 w-full">
      <h2 className="text-3xl md:text-[40px] font-bold mb-8 md:mb-12 tracking-wide uppercase bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent">
       GET IN TOUCH
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-left items-center md:items-start justify-center">
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
      {/* bottom */}
      <div className="w-full max-w-[629px] flex flex-col md:flex-row gap-4 justify-between items-center pt-[50px] mx-auto">
       <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent text-lg">
        2026 The Portfolio
       </p>
       <p className="bg-linear-to-r from-white to-[#F204FF] bg-clip-text text-transparent text-lg">
        Designed by @hudashah
       </p>
      </div>
     </div>

     {/* 3. Right Image */}
     <div className="hidden lg:block relative w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] mt-0 xl:-mr-10">
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
       <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10" />
       <Image
        src="/footer.jpg" // Using same image as contact for now, user requested "same this footer" image which looks like hand touching screen.
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
