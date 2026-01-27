import React from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

// Font Setup (Ensure these match your global config)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Arrow Icon Component
const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1 inline-block"
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
const ShortFeatures = () => {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} w-full bg-white border-b border-gray-100`}
    >
      <div className="px-7">
        {/* GRID LAYOUT 
            - Mobile: 1 Column, Vertical Dividers (divide-y)
            - Desktop: 3 Columns, Horizontal Dividers (divide-x) 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {/* --- COLUMN 1: Main Statement --- */}
          <div className="p-8 md:p-12 lg:pr-16 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] leading-tight mb-6">
              Driving impact through global legal initiatives
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua velit
              esse cillum dolore eu fugiat
            </p>
          </div>

          {/* --- COLUMN 2: Smart Tips --- */}
          <div className="p-8 md:p-12 flex flex-col justify-center lg:items-start h-full">
            <div className="flex flex-col h-full justify-center">
              <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-8 max-w-xs leading-snug">
                Smart, actionable tips for modern businesses
              </h3>

              <Link
                href="#"
                className="inline-flex items-center text-sm font-sans text-gray-800 hover:text-[#C19A6B] transition-colors border-b border-transparent hover:border-[#C19A6B] w-fit pb-0.5"
              >
                Read More <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* --- COLUMN 3: Statistics --- */}
          <div className="p-8 md:p-12 flex flex-col justify-center h-full">
            <div className="flex flex-col h-full justify-center">
              <span className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-4 block">
                960k+
              </span>
              <p className="font-serif text-lg text-[#1a1a1a] mb-8 max-w-xs leading-snug">
                Helping you move forward with confidence
              </p>

              <Link
                href="#"
                className="inline-flex items-center text-sm font-sans text-gray-800 hover:text-[#C19A6B] transition-colors border-b border-transparent hover:border-[#C19A6B] w-fit pb-0.5"
              >
                Read More <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortFeatures;
