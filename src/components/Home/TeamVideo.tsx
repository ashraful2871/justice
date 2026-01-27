import React from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import people1 from "@/assets/pepole1.jpg";
import people2 from "@/assets/pepole2.png";
import people3 from "@/assets/pepole3.png";
import people4 from "@/assets/pepole4.png";
import peopleHero from "@/assets/peopleHero.jpg";
// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// --- ICONS ---
const SocialIcons = () => (
  <div className="absolute right-4 bottom-4 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {["FB", "TW", "LI"].map((social, idx) => (
      <a
        key={idx}
        href="#"
        className="w-8 h-8 bg-white flex items-center justify-center text-[10px] font-bold text-black hover:bg-[#C19A6B] hover:text-white transition-colors"
      >
        {social}
      </a>
    ))}
  </div>
);

// --- DATA ---
const teamMembers = [
  {
    id: 1,
    name: "Alexander Reed",
    tags: ["New York", "Senior Partner", "Head of Corporate Law"],
    image: people1,
  },
  {
    id: 2,
    name: "Clara Thompson",
    tags: ["Chicago", "Managing Partner", "Lead Business Consultant"],
    image: people2,
  },
  {
    id: 3,
    name: "James Whitmore",
    tags: ["Los Angeles", "Courtroom Strategist", "Criminal Defense Attorney"],
    image: people3,
  },
  {
    id: 4,
    name: "Sophia Malik",
    tags: ["Houston", "Family Law Attorney", "Child Custody Specialist"],
    image: people4,
  },
];

export default function TeamVideo() {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} w-full bg-[#031424] text-white pt-20 lg:pt-32 pb-0  relative`}
    >
      {/* --- TEAM GRID --- */}
      <div className="container mx-auto px-6 md:px-12 mb-24 lg:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              {/* Image Area */}
              <div className="relative w-full aspect-square overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Social Icons Overlay (Visible on Hover) */}
                <SocialIcons />
              </div>

              {/* Name */}
              <h3 className="font-serif text-2xl mb-4 group-hover:text-[#C19A6B] transition-colors">
                {member.name}
              </h3>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-sans text-[10px] uppercase tracking-wide text-gray-400 border border-gray-700 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- VIDEO / BANNER SECTION --- */}
      {/* Full width container relative to section */}
      <div className="ml-auto w-full max-w-[1700px] h-[400px] md:h-[600px] relative top-36 mb-[120px]">
        {/* Background Image */}
        <Image
          src={peopleHero} // Signing contract image
          alt="Signing contract"
          fill
          className="object-cover object-center"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
          <div className="container mx-auto px-0 md:px-0">
            <h2 className="font-serif text-4xl md:text-3xl lg:text-4xl font-normal  leading-tight">
              Contributing Important <br />
              Global Initiatives
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
