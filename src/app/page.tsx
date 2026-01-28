import AwardsStats from "@/components/Home/AwardsStats";
import CaseStudies from "@/components/Home/CaseStudies";
import CompanyHistory from "@/components/Home/CompanyHistory";
import ContactSection from "@/components/Home/ContactSection";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import JoinCTA from "@/components/Home/JoinCTA";
import RecentNews from "@/components/Home/RecentNews";
import ShortFeatures from "@/components/Home/ShortFeatures";
import SlidingText from "@/components/Home/SlidingText";
import Subscribe from "@/components/Home/Subscribe";
import TeamVideo from "@/components/Home/TeamVideo";
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
      <CaseStudies />
      <TeamVideo />
      <AwardsStats />
      <ContactSection />
      <RecentNews />
      <Subscribe />
      <Footer />
    </>
  );
}
