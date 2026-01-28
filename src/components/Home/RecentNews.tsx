import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import recentImage1 from "@/assets/recentImage1.jpg";
import recentImage2 from "@/assets/recentImage2.png";
import recentImage3 from "@/assets/recentImage3.jpg";
// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Custom Arrow Icon
const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 10H16M16 10L10 4M16 10L10 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Data
const newsItems = [
  {
    id: 1,
    dateMonth: "June",
    dateYear: "2025",
    image: recentImage1,
    title:
      "When should you hire a lawyer? A practical guide for individuals & businesses",
  },
  {
    id: 2,
    dateMonth: "June",
    dateYear: "2025",
    image: recentImage2,
    title:
      "Divorce and child custody: what you need to know in the United States of America",
  },
  {
    id: 3,
    dateMonth: "June",
    dateYear: "2025",
    image: recentImage3,
    title:
      "How we achieved a landmark victory in a office workplace harassment case",
  },
];

export default function RecentNews() {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} w-full  py-20 lg:py-32`}
    >
      <div className="pl-8 md:pl-16 lg:pl-16">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row items-baseline mb-16 md:mb-24 relative">
          {/* "News" Label - Absolute Left or Sticky */}
          <span className="hidden md:block absolute left-0 top-2 font-sans text-xs font-medium text-[#1a1a1a]">
            News
          </span>

          {/* Main Heading - Offset/Centered */}
          <div className="w-full flex justify-center md:justify-start md:pl-32 lg:pl-64">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
              Our recent news
            </h2>
          </div>
        </div>

        {/* --- NEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block h-full flex flex-col cursor-pointer"
            >
              {/* Top Meta: Dot + NEWS + Date */}
              <div className="flex justify-between items-start mb-6 border-t border-transparent">
                {/* Left: Dot & Label */}
                <div className="flex items-center gap-3 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C58B68]"></span>
                  <span className="font-sans text-[11px] font-bold tracking-widest text-[#1a1a1a] uppercase">
                    NEWS
                  </span>
                </div>

                {/* Right: Date (Stacked) */}
                <div className="text-right font-serif text-[#1a1a1a] leading-tight text-sm mr-4">
                  <span className="block">{item.dateMonth}</span>
                  <span className="block">{item.dateYear}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom: Title & Button */}
              {/* mt-auto ensures the button aligns at bottom if titles vary in height */}
              <div className="flex justify-between items-end gap-6 mt-auto">
                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] leading-snug max-w-sm transition-all duration-300 decoration-[#C58B68] underline-offset-4 group-hover:text-[#C58B68] group-hover:underline">
                  {item.title}
                </h3>

                {/* Arrow Button */}
                <div className="shrink-0 mb-1">
                  <div className="w-12 h-12 rounded-full border border-[#C58B68] flex items-center justify-center text-[#1a1a1a] transition-all duration-300 group-hover:bg-[#C58B68] group-hover:text-white">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
