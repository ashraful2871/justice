import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import heroImage from "@/assets/hero.png";
// Font Setup (Ensure these match your global config if possible)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const Hero = () => {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} relative w-full overflow-hidden`}
    >
      <div className="flex w-full">
        {/* --- LEFT SOCIAL SIDEBAR (Desktop Only) --- */}
        {/* Fixed width strip on the left, sticking to the design's vertical layout */}
        <div className="hidden lg:flex w-[80px] flex-col justify-end items-center pb-20 gap-24 border-r border-gray-300/50">
          {/* Social Links - Rotated -90deg */}
          {/* Note: In CSS writing-mode vertical-rl can also work, but rotation matches the specific visual alignment better here */}
          <div className="flex flex-col gap-16 items-center w-full">
            {["FACEBOOK", "LINKEDIN", "GITHUB", "BEHANCE"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-[10px] font-sans tracking-[0.2em] text-gray-500 hover:text-black uppercase transform -rotate-90 whitespace-nowrap"
              >
                {social}
              </Link>
            ))}
            {/* DRIBBBLE is highlighted in Gold/Orange */}
            <Link
              href="#"
              className="text-[10px] font-sans tracking-[0.2em] text-[#C19A6B] font-bold uppercase transform -rotate-90 whitespace-nowrap"
            >
              DRIBBBLE
            </Link>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 flex flex-col relative">
          {/* TOP SECTION: Typography + Circle Badge */}
          <div className="w-full px-6 md:px-16 pt-20 md:pt-32 pb-12 relative">
            {/* Grid for Alignment */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              {/* Headline */}
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-[#1a1a1a]">
                Justice. Advocacy.
                <br />
                <span className="text-[#C19A6B]">Results.</span>
              </h1>

              {/* Circular Badge Element */}
              {/* Positioned relatively on mobile, absolute-ish on desktop to match the layout */}
              <div className="mt-8 md:mt-0 md:mb-4 md:mr-20 relative animate-spin-slow">
                <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                  {/* SVG Text Path for the circular text */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full overflow-visible"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text className="text-[9.5px] font-sans uppercase tracking-[0.22em] fill-gray-800">
                      <textPath href="#circlePath" startOffset="0%">
                        We will solve your problem today •
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Dot/Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Image */}
          {/* The image spans full width of this container */}
          <div className="w-full h-[400px] md:h-[600px] relative mt-8">
            <Image
              src={heroImage}
              alt="Handshake Legal Consultation"
              className="w-full h-full object-cover object-center"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
