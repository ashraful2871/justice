import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import footerImage from "@/assets/Vector.png";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Custom Arrow Icon (Up-Right)
const ArrowUpRightIcon = ({ className = "" }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 10L10 2M10 2H4M10 2V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className={`${playfair.variable} ${inter.variable} relative w-full bg-[#031424] text-white overflow-hidden`}
    >
      {/* Background Watermark - Lady Justice */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.08]">
          <Image
            src={footerImage}
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full px-6 sm:px-10 lg:px-20 xl:px-24 pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">
          {/* Left Column - Heading & Social Links */}
          <div className="flex flex-col">
            <h2 className="font-serif text-[32px] leading-[1.15] sm:text-[40px] sm:leading-[1.15] lg:text-[48px] lg:leading-[1.15] xl:text-[56px] xl:leading-[1.15] font-normal tracking-tight">
              Together, we build smarter
              <br />
              legal outcomes
            </h2>

            <div className="mt-10 md:mt-12 lg:mt-14 flex flex-wrap gap-x-8 gap-y-3">
              {["Linkedin", "Facebook", "Twitter"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="flex items-center gap-1.5 font-sans text-[14px] leading-none text-white/70 hover:text-white transition-colors duration-200"
                >
                  {social}
                  <ArrowUpRightIcon className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12">
            {/* Left Side - Emails & Google Maps */}
            <div className="flex flex-col">
              <a
                href="mailto:contact@emailcom"
                className="font-serif text-[24px] leading-[1.3] sm:text-[28px] sm:leading-[1.3] lg:text-[30px] lg:leading-[1.3] xl:text-[32px] xl:leading-[1.3] text-white hover:text-white/90 transition-colors duration-200 font-normal"
              >
                contact@emailcom
              </a>
              <a
                href="mailto:consultancy@emailcom"
                className="mt-2 font-serif text-[24px] leading-[1.3] sm:text-[28px] sm:leading-[1.3] lg:text-[30px] lg:leading-[1.3] xl:text-[32px] xl:leading-[1.3] text-white hover:text-white/90 transition-colors duration-200 font-normal"
              >
                consultancy@emailcom
              </a>

              <Link
                href="#"
                className="mt-10 md:mt-12 lg:mt-14 flex items-center gap-1.5 font-sans text-[14px] leading-none text-white/70 hover:text-white transition-colors duration-200 w-fit"
              >
                Google Maps
                <ArrowUpRightIcon className="w-3 h-3" />
              </Link>
            </div>

            {/* Right Side - Address & Phone Numbers */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <address className="not-italic font-sans text-[14px] leading-[1.7] text-white/70 font-normal">
                612-7 Roanoke Rd,
                <br />
                Toronto, ON M3A 1E3,
                <br />
                Canada
              </address>

              <div className="mt-10 md:mt-12 lg:mt-16 flex flex-col gap-3 items-start md:items-end">
                <a
                  href="tel:+14168241228"
                  className="font-serif text-[28px] leading-none sm:text-[32px] lg:text-[36px] xl:text-[38px] text-white hover:text-white/90 transition-colors duration-200 font-normal"
                >
                  +1-416-8241228
                </a>
                <a
                  href="tel:+14168241228"
                  className="font-serif text-[28px] leading-none sm:text-[32px] lg:text-[36px] xl:text-[38px] text-white hover:text-white/90 transition-colors duration-200 font-normal"
                >
                  +1-416-8241228
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Navigation */}
        <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          {/* Copyright */}
          <p className="font-sans text-[14px] text-white/70 font-normal whitespace-nowrap">
            2025 thememarch All right reserved
          </p>

          {/* Divider Line */}
          <div className="hidden lg:block flex-1 h-[1px] bg-white/20" />

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 lg:gap-x-10 gap-y-3 font-serif text-[15px] lg:text-[16px] font-normal">
            <Link
              href="/"
              className="text-white border-b border-white pb-[2px] hover:text-white/90 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/practice"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Practice Areas
            </Link>
            <Link
              href="/team"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Our Team
            </Link>
            <Link
              href="/case-studies"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
