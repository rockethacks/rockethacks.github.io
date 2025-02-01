// src/app/page.tsx
import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Faq from "@/components/faq/Faq";
import Sponsor from "@/components/sponsor/Sponsor";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import Gallery from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Sponsor />
      <Gallery />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}
