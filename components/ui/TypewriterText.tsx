"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TypewriterTextProps {
 text: string;
 delay?: number;
 className?: string;
 cursorColor?: string;
}

export const TypewriterText = ({
 text,
 delay = 0,
 className = "",
 cursorColor = "#F204FF",
}: TypewriterTextProps) => {
 const [displayedText, setDisplayedText] = useState("");
 const [isDeleting, setIsDeleting] = useState(false);
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });

 useEffect(() => {
  if (!isInView) return;

  let timeout: NodeJS.Timeout;

  const handleTyping = () => {
   const currentLength = displayedText.length;

   if (!isDeleting && currentLength < text.length) {
    // Typing
    setDisplayedText(text.substring(0, currentLength + 1));
    timeout = setTimeout(handleTyping, 100);
   } else if (!isDeleting && currentLength === text.length) {
    // Finished typing, wait before deleting
    timeout = setTimeout(() => setIsDeleting(true), 2000);
   } else if (isDeleting && currentLength > 0) {
    // Deleting
    setDisplayedText(text.substring(0, currentLength - 1));
    timeout = setTimeout(handleTyping, 50);
   } else if (isDeleting && currentLength === 0) {
    // Finished deleting, wait before typing again
    setIsDeleting(false);
    timeout = setTimeout(handleTyping, 500);
   }
  };

  timeout = setTimeout(handleTyping, delay * 1000 + 100);

  return () => clearTimeout(timeout);
 }, [displayedText, isDeleting, text, delay, isInView]);

 return (
  <span ref={ref} className={className}>
   {displayedText}
   <motion.span
    animate={{ opacity: [0, 1, 0] }}
    transition={{ repeat: Infinity, duration: 0.8 }}
    className="inline-block w-[2px] h-[1em] ml-1 align-middle"
    style={{ backgroundColor: cursorColor }}
   />
  </span>
 );
};
