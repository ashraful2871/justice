import CompanyHistory from "@/components/Home/CompanyHistory";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import JoinCTA from "@/components/Home/JoinCTA";
import ShortFeatures from "@/components/Home/ShortFeatures";
import SlidingText from "@/components/Home/SlidingText";
import Testimonials from "@/components/Home/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ShortFeatures />
      <CompanyHistory />
      <JoinCTA />
      <SlidingText />
      <Testimonials />
    </>
  );
}
