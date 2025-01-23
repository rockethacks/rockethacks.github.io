// src/app/page.tsx
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Faq from "@/components/faq/Faq";
import Sponsor from "@/components/sponsor/Sponsor";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Sponsor />
      <Faq />
      <Footer />
    </div>
  );
}
