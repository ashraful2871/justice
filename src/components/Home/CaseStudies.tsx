import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import caseImage1 from "@/assets/caseImage1.jpg";
import caseImage2 from "@/assets/caseimage2.png";
import caseImage3 from "@/assets/caseimage3.jpg";
import caseImage4 from "@/assets/caseimage4.jpg";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Custom Arrow Icon for the hover button
const ArrowUpRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Data for the case studies
const caseStudies = [
  {
    id: 1,
    title: "Secured $2.5m settlement in construction injury case",
    image: caseImage1.src,
  },
  {
    id: 2,
    title: "Won full custody for father in complex divorce case",
    image: caseImage2.src,
  },
  {
    id: 3,
    title: "Cleared wrongfully accused client in criminal defense case",
    image: caseImage3.src,
  },
  {
    id: 4,
    title: "Closed a major m&a deal with full legal oversight",
    image: caseImage4.src,
  },
];

export default function CaseStudies() {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} w-full  py-20 lg:py-32`}
    >
      <div className=" px-6 md:px-12">
        {/* FLEX CONTAINER: Text Left, Images Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* --- LEFT SIDE: Sticky Section Title --- */}
          <div className="lg:w-1/4">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] sticky top-24">
              Case studies
            </h2>
          </div>

          {/* --- RIGHT SIDE: The Grid --- */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {caseStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.id}`}
                  className="group block cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-8">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Dark Overlay (Hover) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {/* White Circle Button (Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRightIcon />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="font-sans text-xl md:text-[22px] text-[#1a1a1a] leading-snug font-light max-w-sm group-hover:text-[#C19A6B] transition-colors">
                    {study.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
