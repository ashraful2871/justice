import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Playfair_Display, Inter } from "next/font/google";

// Font configuration
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function Header() {
  return (
    <header
      className={`${playfair.variable} ${inter.variable} w-full bg-white flex flex-col`}
    >
      {/* --- TOP BAR --- */}
      <div className="w-full border-b border-gray-100 bg-white py-2">
        <div className="container mx-auto  px-4 md:px-8 flex justify-between items-center text-xs text-gray-600 font-sans tracking-wide">
          {/* Left Side: Links */}
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-black transition-colors">
              FAQ
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Personnel
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Our Expertise
            </Link>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex items-center gap-8">
            <span>consultancy@email.com</span>
            <span>Mon - Sat : 8:00 - 16:00</span>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <div className="w-full py-6">
        {/* Changed justify-between to standard flex to allow manual spacing */}
        <div className="container mx-auto  px-4 md:px-8 flex items-center">
          {/* Logo Section - Remains on the Left */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-[#C19A6B] w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M50 95C50 95 90 75 90 30V10H10V30C10 75 50 95 50 95Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M20 35H80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M50 25V75"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 35L15 55H25L20 35Z"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path
                  d="M80 35L75 55H85L80 35Z"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path d="M50 15L45 25H55L50 15Z" fill="currentColor" />
              </svg>
            </div>

            <span className="text-3xl font-serif text-black tracking-wide uppercase">
              JUSTIVO
            </span>
          </Link>

          {/* Navigation Links */}
          {/* Added 'ml-auto' to push the nav to the Right side, next to the button */}
          <nav className="hidden lg:flex items-center gap-8 font-serif text-[17px] text-gray-800 ml-auto mr-8">
            <Link href="/" className="hover:text-[#C19A6B] transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#C19A6B] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/practice-areas"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Practice Areas
            </Link>
            <Link
              href="/team"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/case-studies"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div>
            <Button className="bg-[#051d30] hover:bg-[#0f2a45] text-white font-serif text-lg px-8 py-6 rounded-none shadow-none">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
