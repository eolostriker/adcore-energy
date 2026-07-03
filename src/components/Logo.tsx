
import React from 'react';
import Image from 'next/image';
import logo from "../../public/LOGO HORIZ ADCORE.png";
import "../app/globals.css";

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src={logo} style={{width:"120%",height:"120%"}} alt="ADCORE LOGO" />
    </div>
  );
};
