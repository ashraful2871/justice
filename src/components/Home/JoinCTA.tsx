import React from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn button
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";
import joinCTA1 from "@/assets/joinCTA1.png";
import joinCTA2 from "@/assets/joinCTA2.png";
import joinCTA3 from "@/assets/joinCTA3.jpg";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const JoinCTA = () => {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} mt-[120px] relative w-full py-24 lg:py-48 overflow-hidden`}
    >
      {/* --- CENTRAL CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Heading: Lowercase Serif */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6 lowercase tracking-tight">
          become our intern
        </h2>

        {/* Subtext: Sans-serif Gray */}
        <p className="font-sans text-sm text-gray-500 max-w-md mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <br className="hidden md:block" />
          Eiusmod tempor incididunt ut labore et dolore. magna
        </p>

        {/* Button: Terra-cotta Color with Arrow */}
        <Button className="bg-[#C58B68] hover:bg-[#b07a58] text-white font-serif text-lg px-8 py-6 rounded-none shadow-sm transition-all">
          Free Consultation
          <span className="ml-2 text-xl font-light">→</span>
        </Button>
      </div>

      {/* --- FLOATING IMAGES (Desktop) --- */}
      {/* Hidden on mobile to preserve readability, Visible on LG screens */}

      {/* Image 1: Top Right (Walking Man) */}
      <div className="hidden lg:block absolute top-0 right-[15%] w-[220px] h-[280px] shadow-lg">
        <Image
          src={joinCTA1}
          alt="Man walking"
          fill
          className="w-[244px] h-[190px] object-cover object-top"
        />
      </div>

      {/* Image 2: Bottom Left (Meeting/Desk) */}
      <div className="hidden lg:block absolute bottom-[0px] left-[10%] w-[260px] h-[180px] shadow-lg">
        <Image
          src={joinCTA2}
          alt="Office meeting"
          fill
          className="w-[191px] h-[192px] object-cover object-top"
        />
      </div>

      {/* Image 3: Bottom Right (Man Standing) */}
      <div className="hidden lg:block absolute bottom-[-80px] right-[5%] w-[200px] h-[300px] shadow-lg">
        <Image
          src={joinCTA3}
          alt="Professional standing"
          fill
          className="w-[238px] h-[216px] object-cover object-top"
        />
      </div>
    </section>
  );
};

export default JoinCTA;
