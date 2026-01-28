import React from "react";
import { Playfair_Display, Inter } from "next/font/google";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Custom Arrow Icon for the link
const ArrowUpRightIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1 mb-0.5"
  >
    <path
      d="M1 11L11 1M11 1H3M11 1V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Decorative Swirl Line SVG
const DecorativeLine = () => (
  <svg
    viewBox="0 0 800 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-0 bottom-0 w-[60%] h-full pointer-events-none opacity-40 hidden md:block"
  >
    {/* A smooth bezier curve mimicking the swirl */}
    <path
      d="M100 150 C 200 200, 300 50, 450 100 S 700 50, 780 20"
      stroke="#C58B68"
      strokeWidth="1"
      strokeDasharray="4 4" // Optional: makes it dashed/textured like a sketch if desired, remove for solid
      strokeOpacity="0.5"
    />
    {/* Arrowhead at the end */}
    <path
      d="M780 20 L 770 25 M 780 20 L 775 30"
      stroke="#C58B68"
      strokeWidth="1"
      strokeOpacity="0.5"
    />
  </svg>
);

export default function Subscribe() {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} relative w-full bg-[#F5ECE7] py-24 lg:py-36 overflow-hidden`}
    >
      {/* Background Decoration */}
      <DecorativeLine />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center items-center">
        {/* Input Wrapper */}
        <div className="w-full max-w-2xl relative">
          <form className="relative w-full">
            {/* The Input Field */}
            <input
              type="email"
              placeholder="Enter your email.."
              className="w-full bg-transparent border-b border-[#C58B68]/30 py-4 pr-32 text-2xl md:text-3xl font-serif text-[#1a1a1a] placeholder:text-[#1a1a1a]/80 focus:outline-none focus:border-[#C58B68] transition-colors"
            />

            {/* The "Subscribe" Link/Button */}
            {/* Positioned absolutely to the right of the input */}
            <button
              type="submit"
              className="absolute right-0 bottom-5 flex items-center gap-1 font-serif text-lg text-[#C58B68] border-b border-[#C58B68] pb-0.5 hover:text-[#a37f55] hover:border-[#a37f55] transition-colors"
            >
              Subscribe
              <ArrowUpRightIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
