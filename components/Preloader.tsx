"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
 const [counter, setCounter] = useState(0);
 const containerRef = useRef<HTMLDivElement>(null);
 const counterRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const tl = gsap.timeline();

  // prevent scrolling
  document.body.style.overflow = "hidden";

  // Counter Animation
  const counterObj = { value: 0 };

  tl.to(counterObj, {
   value: 100,
   duration: 1.5, // Faster
   ease: "power3.inOut",
   onUpdate: () => {
    setCounter(Math.floor(counterObj.value));
   },
  });

  // Fade out counter
  tl.to(
   counterRef.current,
   {
    opacity: 0,
    y: -50,
    duration: 0.5,
    ease: "power3.in",
   },
   "-=0.2",
  );

  // Shutter Animation
  // We will animate the .shutter elements
  tl.to(
   ".shutter",
   {
    height: 0,
    duration: 1.2,
    stagger: 0.05, // Smooth stagger
    ease: "power4.inOut",
   },
   "-=0.3",
  );

  // Cleanup
  tl.to(containerRef.current, {
   display: "none",
   onComplete: () => {
    document.body.style.overflow = "";
   },
  });

  return () => {
   tl.kill();
   document.body.style.overflow = "";
  };
 }, []);

 return (
  <div
   ref={containerRef}
   className="fixed inset-0 z-9999 flex flex-col pointer-events-none">
   {/* 5 Vertical Shutters covering the screen */}
   <div className="absolute inset-0 flex w-full h-full">
    {[...Array(5)].map((_, i) => (
     <div
      key={i}
      className="shutter w-1/5 h-full bg-[#111] border-r border-white/5 last:border-r-0 relative transform origin-top"></div>
    ))}
   </div>

   {/* Counter Centered */}
   <div
    ref={counterRef}
    className="absolute inset-0 flex items-end justify-start p-10 sm:p-20 z-10">
    <div className="flex items-end overflow-hidden">
     <span className="text-[15vw] sm:text-[12rem] font-bold text-white leading-none tracking-tighter mix-blend-difference font-mono">
      {counter}
     </span>
     <span className="text-4xl sm:text-6xl text-white/50 mb-4 sm:mb-8 ml-2 font-mono">
      %
     </span>
    </div>
   </div>
  </div>
 );
};

export default Preloader;
