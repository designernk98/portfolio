import React from "react";

interface PurpleButtonProps {
 children: React.ReactNode;
 href?: string;
 className?: string;
}

export function PurpleButton({
 children,
 href,
 className = "",
}: PurpleButtonProps) {
 const buttonClasses = `inline-block rounded-full px-6 py-[8.5px] text-xl font-normal text-white/70 bg-[#AD66B1]/74 shadow-[5px_5px_5.5px_0px_#F204FF] hover:scale-105 transition-all duration-300 ${className}`;

 if (href) {
  return (
   <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className={buttonClasses}>
    {children}
   </a>
  );
 }

 return <button className={buttonClasses}>{children}</button>;
}
