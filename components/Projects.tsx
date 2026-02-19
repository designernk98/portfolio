"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
 {
  id: 1,
  title: "E-Commerce App",
  category: "Mobile App",
  image: "/images/project1.jpg", // Placeholder
 },
 {
  id: 2,
  title: "Finance Dashboard",
  category: "Web App",
  image: "/images/project2.jpg", // Placeholder
 },
 {
  id: 3,
  title: "Travel Website",
  category: "Web Design",
  image: "/images/project3.jpg", // Placeholder
 },
 {
  id: 4,
  title: "Food Delivery",
  category: "Mobile App",
  image: "/images/project4.jpg", // Placeholder
 },
 {
  id: 5,
  title: "Portfolio Website",
  category: "Web Design",
  image: "/images/project5.jpg", // Placeholder
 },
];

export default function Projects() {
 const containerRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"],
 });

 // Diagonal movement effect
 const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
 const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
 const rotate = -15; // The tilt angle

 return (
  <section
   id="projects"
   className="pt-24 md:pt-[104px] bg-black overflow-hidden relative min-h-screen flex flex-col justify-center"
   ref={containerRef}>
   {/* Background Glow - Bottom Center "Half Circle" Effect */}
   <div className="absolute bottom-0 left-1/2 w-[800px] h-[500px] bg-[#F204FF]/60 rounded-full blur-[248px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />

   {/* Header */}

   <h2 className="text-3xl md:text-[36px] absolute top-20 md:top-[100px] left-1/2 translate-x-[-50%] text-center font-bold text-white z-20">
    Our <span className="text-[#D900A9]">projects</span>
   </h2>

   <Image
    src="/projects.png"
    alt="Projec 1"
    fill
    className="object-contain relative z-10"
   />
  </section>
 );
}
