import React from "react";
import Image from "next/image";
import { Playfair_Display, Inter, Forum } from "next/font/google";

// Font Configuration
const forum = Forum({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Custom Thin Arrow Icon (Matches the circle button)
const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="#C19A6B"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const statsData = [
  {
    id: 1,
    number: "54+",
    label: "/Years",
    subLabel: "of legal excellence",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop",
    title: "Best law firm of the year",
    description:
      "Awarded for outstanding legal service and client satisfaction across all practice areas.",
  },
  {
    id: 2,
    number: "500+",
    label: "/Cases",
    subLabel: "successfully resolved",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    title: "Top litigation firm – national legal excellence awards",
    description:
      "Recognized for exceptional courtroom performance and high-profile case victories.",
  },
  {
    id: 3,
    number: "850k+",
    label: "/Areas",
    subLabel: "handled across jurisdictions",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    title: "Client choice award for legal services",
    description:
      "Honored for consistent client satisfaction, trust, and long-term relationships.",
  },
  {
    id: 4,
    number: "10k+",
    label: "/Hours",
    subLabel: "of courtroom representation",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    title: "Client choice award for legal services",
    description:
      "Honored for consistent client satisfaction, trust, and long-term relationships.",
  },
];

export default function AwardsStats() {
  return (
    <section className={`${forum.variable}  w-full bg-white py-20 lg:py-32`}>
      <div className="container mx-auto px-6 md:px-12 border">
        <div className="flex flex-col gap-0">
          {statsData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 group"
            >
              {/* --- LEFT SIDE: STATS --- */}
              {/* Width fixed to align numbers vertically */}
              <div className="lg:w-[25%] pt-8 lg:pt-12 pb-4">
                <div className="flex flex-row lg:flex-col items-baseline lg:items-start gap-3 lg:gap-1">
                  {/* Number & Tag */}
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl md:text-6xl text-[#1a1a1a]">
                      {item.number}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-[#1a1a1a] opacity-80">
                      {item.label}
                    </span>
                  </div>
                  {/* Sub Label */}
                  <span className="font-sans text-sm text-gray-500 block mt-1">
                    {item.subLabel}
                  </span>
                </div>
              </div>

              {/* --- RIGHT SIDE: CONTENT CARD --- */}
              {/* Border top is applied here to create the separation lines that start after the numbers */}
              <div
                className={`flex-1 flex flex-col md:flex-row items-center gap-6 md:gap-10 py-8 lg:py-12 ${index !== 0 ? "border-t border-gray-100" : "border-t border-gray-100 lg:border-none"}`}
              >
                {/* Image */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Content Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center text-center md:text-left">
                  {/* Title */}
                  <h3 className="font-serif text-2xl text-[#1a1a1a] leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="shrink-0 mt-4 md:mt-0">
                  <button className="w-12 h-12 rounded-full border border-[#C19A6B] flex items-center justify-center text-[#C19A6B] hover:bg-[#C19A6B] hover:text-white transition-all duration-300">
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
