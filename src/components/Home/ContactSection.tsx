import React from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

// Font Setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// --- ICONS ---
const MapPinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="1.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72159 15.1913 5.11501 12.775C3.42594 10.1661 2.37482 7.2104 2.04001 4.133C2.01463 3.85521 2.04787 3.57538 2.13709 3.31131C2.2263 3.04724 2.36948 2.80482 2.55745 2.59962C2.74542 2.39441 2.97402 2.23098 3.22869 2.11986C3.48336 2.00875 3.75836 1.95239 4.03601 1.954H7.03601C7.51263 1.94935 7.9723 2.1165 8.33036 2.42459C8.68841 2.73268 8.92083 3.16075 8.98501 3.63C9.10309 4.51654 9.31971 5.38575 9.63001 6.222C9.75239 6.55627 9.77884 6.91851 9.70635 7.26786C9.63385 7.61722 9.46536 7.93988 9.22001 8.199L7.95001 9.469C9.37397 11.9729 11.4461 14.045 13.95 15.469L15.22 14.199C15.4791 13.9537 15.8018 13.7852 16.1511 13.7127C16.5005 13.6402 16.8627 13.6666 17.197 13.789C18.0333 14.0993 18.9025 14.3159 19.789 14.434C20.2625 14.4993 20.6934 14.7358 21.0022 15.0995C21.3109 15.4633 21.4764 15.9295 21.47 16.41V16.92Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
  >
    <path
      d="M1 9L9 1M9 1H2.6M9 1V7.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactSection() {
  return (
    <section
      className={`${playfair.variable} ${inter.variable} w-full flex flex-col lg:flex-row`}
    >
      {/* --- LEFT COLUMN: INFO --- */}
      <div className="w-full lg:w-[40%] bg-white py-20 px-8 md:px-12 lg:pl-16 lg:pr-12 flex flex-col gap-12 border-r border-[#C58B68]/30 ">
        {/* Item 1: Location */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-[#BE7D60] flex items-center justify-center shrink-0">
            <MapPinIcon />
          </div>
          <div>
            <span className="block font-sans text-sm text-[#1a1a1a] mb-2 font-medium">
              Location:
            </span>
            <address className="font-serif text-xl md:text-2xl text-[#C58B68] not-italic leading-snug border-b border-[#C58B68] inline-block pb-1 mb-3">
              612-7 Roanoke Rd, <br />
              Toronto, ON M3A 1E3, <br />
              Canada
            </address>
            <Link
              href="#"
              className="flex items-center text-sm font-sans text-[#1a1a1a] hover:opacity-70 mt-1"
            >
              Google Maps <ArrowUpRightIcon />
            </Link>
          </div>
        </div>

        {/* Item 2: Email */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-[#C58B68] flex items-center justify-center shrink-0">
            <MailIcon />
          </div>
          <div>
            <span className="block font-sans text-sm text-[#1a1a1a] mb-2 font-medium">
              Email:
            </span>
            <a
              href="mailto:contact@email.com"
              className="font-serif text-2xl md:text-3xl text-[#1a1a1a] hover:text-[#C58B68] transition-colors"
            >
              contact@email.com
            </a>
          </div>
        </div>

        {/* Item 3: Phone */}
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 bg-[#C58B68] flex items-center justify-center shrink-0">
            <PhoneIcon />
          </div>
          <div>
            <span className="block font-sans text-sm text-[#1a1a1a] mb-2 font-medium">
              Phone:
            </span>
            <div className="flex flex-col gap-1">
              <a
                href="tel:+14168241228"
                className="font-serif text-2xl md:text-3xl text-[#1a1a1a] hover:text-[#C58B68] transition-colors"
              >
                +1-416-8241228
              </a>
              <a
                href="tel:+14168241228"
                className="font-serif text-2xl md:text-3xl text-[#1a1a1a] hover:text-[#C58B68] transition-colors"
              >
                +1-416-8241228
              </a>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-8">
          <button className="px-8 py-4 border border-gray-200 text-[#C58B68] font-serif hover:bg-[#C58B68] hover:text-white transition-all duration-300 flex items-center gap-2">
            Read More <ArrowUpRightIcon />
          </button>
        </div>
      </div>

      {/* --- RIGHT COLUMN: FORM --- */}
      <div className="w-full lg:w-[60%] bg-[#F5ECE7] py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center border-l-2 border-[#BE7D60]">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-12 max-w-lg leading-tight">
          Fill out the form we will get in touch shortly
        </h2>

        <form className="w-full flex flex-col gap-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="First name..."
              className="bg-transparent border-b border-gray-300 pb-4 text-[#1a1a1a] placeholder:text-gray-500 font-sans focus:outline-none focus:border-[#C58B68] transition-colors"
            />
            <input
              type="text"
              placeholder="Last name..."
              className="bg-transparent border-b border-gray-300 pb-4 text-[#1a1a1a] placeholder:text-gray-500 font-sans focus:outline-none focus:border-[#C58B68] transition-colors"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input
              type="email"
              placeholder="Email..."
              className="bg-transparent border-b border-gray-300 pb-4 text-[#1a1a1a] placeholder:text-gray-500 font-sans focus:outline-none focus:border-[#C58B68] transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone..."
              className="bg-transparent border-b border-gray-300 pb-4 text-[#1a1a1a] placeholder:text-gray-500 font-sans focus:outline-none focus:border-[#C58B68] transition-colors"
            />
          </div>

          {/* Row 3 */}
          <input
            type="text"
            placeholder="Subject..."
            className="w-full bg-transparent border-b border-gray-300 pb-4 text-[#1a1a1a] placeholder:text-gray-500 font-sans focus:outline-none focus:border-[#C58B68] transition-colors"
          />

          {/* Row 4 (Message) */}
          <textarea
            placeholder="Message..."
            rows={4}
            className="w-full bg-transparent border-b border-gray-300 pb-4 text-[#1a1a1a] placeholder:text-gray-500 font-sans focus:outline-none focus:border-[#C58B68] transition-colors resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-[#050505] text-white font-serif px-10 py-5 hover:bg-[#C58B68] transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
