"use client";

import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export default function Contact() {
 return (
  <section id="contact" className="py-20 bg-black relative">
   <div className="container grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Side: Illustration / Info */}
    <motion.div
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}
     className="hidden lg:flex justify-center">
     <div className="relative w-[400px] h-[400px] rounded-full bg-gradient-to-br from-white to-gray-200 overflow-hidden border-4 border-primary/20 shadow-[0_0_40px_rgba(208,32,208,0.2)]">
      <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
       <div className="text-black text-center p-8">
        <span className="text-6xl">📧</span>
        <h3 className="text-xl font-bold mt-4">Get in Touch</h3>
       </div>
      </div>
     </div>
    </motion.div>

    {/* Right Side: Form */}
    <motion.div
     initial={{ opacity: 0, x: 50 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}
     className="flex flex-col gap-8">
     <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
        UI
       </div>
       <h3 className="text-xl font-bold text-primary">Designs</h3>
      </div>
      <h2 className="text-4xl font-bold text-white">
       Contact <span className="text-primary">Me</span>
      </h2>
     </div>

     <form className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-4">
       <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-300">Your name</label>
        <input
         type="text"
         placeholder="Name"
         className="bg-primary/10 border border-transparent focus:border-primary/50 text-white rounded-lg p-3 outline-none transition-colors"
        />
       </div>
       <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-300">Your email</label>
        <input
         type="email"
         placeholder="Email"
         className="bg-primary/10 border border-transparent focus:border-primary/50 text-white rounded-lg p-3 outline-none transition-colors"
        />
       </div>
      </div>

      <div className="flex flex-col gap-2">
       <label className="text-sm font-medium text-gray-300">Your Message</label>
       <textarea
        rows={6}
        placeholder="Message"
        className="bg-primary/10 border border-transparent focus:border-primary/50 text-white rounded-lg p-3 outline-none transition-colors resize-none"
       />
      </div>

      <Button className="w-fit px-8 py-3 rounded-full mt-2">Send me</Button>
     </form>
    </motion.div>
   </div>
  </section>
 );
}
