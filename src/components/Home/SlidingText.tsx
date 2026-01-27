import React from "react";
import Marquee from "react-fast-marquee";
import { Playfair_Display } from "next/font/google";
import star from "@/assets/star.png";
import Image from "next/image";
// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

// Custom Starburst Icon (The gold star in your image)
const StarIcon = () => (
  <Image
    src={star}
    alt="Star Icon"
    className="mx-8 lg:mx-12 w-6 h-6 lg:w-8 lg:h-8"
  />
);

const SlidingText = () => {
  const textItems = [
    "Since 1987",
    "Thousands of cases won",
    "Nationwide legal support",
    "Since 1987", // Repeated to ensure smooth loop visuals
    "Thousands of cases won",
    "Nationwide legal support",
  ];

  return (
    <section
      className={`${playfair.variable} w-full bg-[#F9F2F0] py-10 lg:py-3 border-y border-gray-100 overflow-hidden mt-[120px]`}
    >
      <Marquee gradient={false} speed={50} className="overflow-hidden">
        <div className="flex items-center">
          {textItems.map((text, index) => (
            <React.Fragment key={index}>
              <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] whitespace-nowrap tracking-wide">
                {text}
              </span>
              <StarIcon />
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SlidingText;
