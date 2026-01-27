"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility from shadcn, or remove if not
import ArrowRight from "@/assets/testimonial-arrow.png";
import quote from "@/assets/testimonial-quote.png";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// --- DATA ---
const testimonials = [
  {
    id: 1,
    name: "Mostahid Patwary",
    location: "From UK",
    quote:
      "The legal team provided exceptional guidance during a difficult time. Their strategic approach and deep understanding of the law made all the difference in my case.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Grace Morgan",
    location: "From Canada",
    quote:
      "I was impressed by their professionalism and dedication. They kept me informed every step of the way and secured a better outcome than I had dared to hope for.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Benjamin Scott",
    location: "From Australia",
    quote:
      "Highly recommended! The attorneys are incredibly knowledgeable and genuinely care about their clients. I felt supported and confident throughout the entire process.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "James Walker",
    location: "From USA",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Emma Wallace",
    location: "From Germany",
    quote:
      "Efficient, effective, and empathetic. They resolved my business dispute quickly, allowing me to focus on what matters most. I couldn't ask for better representation.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

// --- ICONS ---
const StarIcon = () => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-1"
  >
    <path
      d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
      fill="white"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <Image src={ArrowRight} alt="Arrow Right" width={24} height={12} />
);

const BackgroundQuoteIcon = () => (
  <Image
    src={quote}
    alt="Background Quote"
    width={200}
    height={200}
    className="absolute bottom-12 right-4 md:right-12 lg:right-24 opacity-5 pointer-events-none select-none"
  />
);

const Testimonials = () => {
  const [activeId, setActiveId] = useState(4); // Default to James Walker (ID 4)

  // Find active testimonial data
  const activeData =
    testimonials.find((t) => t.id === activeId) || testimonials[0];
  return (
    <section
      className={`${playfair.variable} ${inter.variable} relative w-full bg-[#031424] py-20 lg:py-28 overflow-hidden`}
    >
      {/* Background Decorative Icon */}
      <BackgroundQuoteIcon />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* --- 1. STARS --- */}
        <div className="flex mb-10">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* --- 2. QUOTE CONTENT --- */}
        {/* Fixed height container to prevent layout jumping when text length changes */}
        <div className="w-full max-w-4xl min-h-[180px] md:min-h-[140px] flex items-center justify-center mb-10">
          <p className="font-sans text-gray-300 text-center text-sm md:text-base lg:text-[17px] leading-relaxed tracking-wide opacity-90 transition-opacity duration-500 ease-in-out">
            {activeData.quote}
          </p>
        </div>

        {/* --- 3. ACTIVE USER PROFILE --- */}
        <div className="flex flex-col items-center mb-16 transition-all duration-500">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 mb-4">
            <Image
              src={activeData.avatar}
              alt={activeData.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name & Location */}
          <h3 className="font-serif text-xl text-white mb-1">
            {activeData.name}
          </h3>
          <span className="font-sans text-xs text-gray-400 uppercase tracking-wider">
            {activeData.location}
          </span>
        </div>

        {/* --- 4. NAVIGATION (NAMES) --- */}
        {/* On mobile: horizontal scroll. Desktop: Center flex */}
        <div className="w-full max-w-5xl border-b border-gray-800/50 pb-4 mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex items-end justify-center min-w-max px-4 gap-8 md:gap-16">
            {testimonials.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`
                    group flex flex-col items-center gap-4 transition-all duration-300 outline-none
                    ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}
                  `}
                >
                  <span
                    className={`font-serif text-sm md:text-base ${isActive ? "text-white" : "text-gray-400"}`}
                  >
                    {item.name}
                  </span>

                  {/* Active Indicator Line */}
                  <div
                    className={`
                    h-[1px] bg-white transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                  ></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- 5. FOOTER LINK --- */}
        <Link
          href="#"
          className="group inline-flex items-center text-gray-300 text-sm font-sans hover:text-white transition-colors border-b border-gray-600 pb-0.5 hover:border-white"
        >
          Check out our google review <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
