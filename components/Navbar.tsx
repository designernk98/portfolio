"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
 { name: "HOME", to: "home" },
 { name: "About", to: "about" },
 { name: "Services", to: "services" },
 { name: "Projects", to: "projects" },
 { name: "Contact", to: "contact" },
 { name: "IN TOUCH", to: "footer" },
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   setScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
  <nav
   className={cn(
    "fixed top-0 left-0 w-full z-50 px-[138px] transition-all duration-300",
    scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6",
   )}>
   <div className="container flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
     {/* Placeholder for Logo - effectively text/icon based on design */}
     <div className="w-8 h-8 rounded-full bg-linear-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white text-xs">
      UI
     </div>
     <span className="text-white">Designs</span>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8">
     {navItems.map((item) => (
      <ScrollLink
       key={item.name}
       to={item.to}
       smooth={true}
       duration={500}
       offset={-70}
       className="text-white/70 hover:text-[#F204FF] cursor-pointer text-[18px] font-[400]  transition-colors border border-white hover:border-[#F204FF] px-2 py-1 rounded-[9px] hover:bg-white/10"
       activeClass="bg-white/10 border-white/40"
       spy={true}>
       {item.name}
      </ScrollLink>
     ))}
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
     {isOpen ? <X /> : <Menu />}
    </button>
   </div>

   {/* Mobile Nav */}
   {isOpen && (
    <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-4 flex flex-col gap-4 items-center">
     {navItems.map((item) => (
      <ScrollLink
       key={item.name}
       to={item.to}
       smooth={true}
       duration={500}
       offset={-70}
       className="text-gray-300 hover:text-white cursor-pointer uppercase text-sm tracking-wide"
       onClick={() => setIsOpen(false)}>
       {item.name}
      </ScrollLink>
     ))}
    </div>
   )}
  </nav>
 );
}
