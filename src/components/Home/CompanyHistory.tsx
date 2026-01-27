import React from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

// Font Configuration
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const CompanyHistory = () => {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} w-full flex flex-col lg:flex-row font-sans`}
    >
      {/* --- LEFT COLUMN: Images --- */}
      <div className="w-full lg:w-[45%] flex flex-col">
        {/* Top Image: Scales & Desk */}
        <div className="relative w-full h-[350px] lg:h-[50%]">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
            alt="Lawyer desk with scales"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        {/* Bottom Image: Walking Lawyer */}
        <div className="relative w-full h-[350px] lg:h-[50%]">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            alt="Lawyer walking outside"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* --- RIGHT COLUMN: Content & Timeline --- */}
      <div className="w-full lg:w-[55%] bg-[#E5E6E8] flex">
        {/* Content Area */}
        <div className="flex-1 px-8 py-16 md:p-16 lg:p-20">
          {/* Main Headline */}
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-16 max-w-lg">
            Serving clients in every area of law since 1971 with experience and
            dedication.
          </h2>

          {/* Timeline Items */}
          <div className="flex flex-col gap-12">
            {/* Item 1: 1971 */}
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
                1971
              </span>
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-xl text-[#1a1a1a]">
                  Founded in London
                </h3>
                {/* Gold Horizontal Line */}
                <div className="h-[1px] bg-[#C19A6B] w-12"></div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s.
              </p>
            </div>

            {/* Item 2: 1986 */}
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl md:text-5xl text-gray-400">
                1986
              </span>
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-xl text-gray-500">
                  Firm Expansion
                </h3>
                <div className="h-[1px] bg-[#C19A6B] w-12 opacity-50"></div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
            </div>

            {/* Item 3: 1991 */}
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
                1991
              </span>
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-xl text-[#1a1a1a]">
                  Landmark Case Victory
                </h3>
                <div className="h-[1px] bg-[#C19A6B] w-12"></div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        {/* --- NAVIGATION SIDEBAR (Right Edge) --- */}
        <div className="hidden md:flex w-24 border-l border-gray-300/50 flex-col justify-center items-center gap-12">
          {/* Up Arrow (Thin Outline) */}
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 40V1M12 1L1 12M12 1L23 12"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Down Arrow (Gold/Styled) */}
          <button className="text-[#C19A6B] hover:text-[#a37f55] transition-colors">
            <svg
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0V39M12 39L1 28M12 39L23 28"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
