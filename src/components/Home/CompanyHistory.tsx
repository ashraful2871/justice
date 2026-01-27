import React from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import companyImage1 from "@/assets/companyHistory1.png";
import companyImage2 from "@/assets/companyHistory2.png";
import upArrow from "@/assets/arrow-up.png";
import downArrow from "@/assets/arrow-dwon.png";
// Font Configuration
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const CompanyHistory = () => {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} px-20 flex flex-col lg:flex-row font-sans gap-36`}
    >
      {/* --- LEFT COLUMN: Images --- */}
      <div className="w-full lg:w-[45%] flex flex-col gap-10">
        {/* Top Image: Scales & Desk */}

        <div className="relative w-full h-[1120px] lg:h-[50%]">
          <Image
            src={companyImage1}
            alt="Lawyer desk with scales"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        {/* Bottom Image: Walking Lawyer */}
        <div className="relative w-full h-[1120px] lg:h-[50%]">
          <Image
            src={companyImage2}
            alt="Lawyer walking outside"
            className="w-full h-full object-cover object-top"
            fill
          />
        </div>
      </div>

      {/* --- RIGHT COLUMN: Content & Timeline --- */}
      <div className="w-full lg:w-[55%] ">
        {/* Content Area */}
        <div className="  ">
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
      </div>

      <div className="hidden md:flex w-24  flex-col justify-center items-center gap-12 relative">
        {/* middle-only border (custom height + centered) */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[285px] w-px bg-[#BE7D60]" />

        {/* Up Arrow (Thin Outline) */}
        <div>
          <Image
            src={upArrow}
            alt="Up Arrow"
            width={24}
            height={40}
            className="w-[65px] h-[65px]"
          />
        </div>

        {/* Down Arrow (Gold/Styled) */}
        <div>
          <Image
            src={downArrow}
            alt="Down Arrow"
            width={24}
            height={40}
            className="w-[65px] h-[65px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
