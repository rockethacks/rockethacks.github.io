"use client";
import React, { useEffect, useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Faq from "@/components/faq/Faq";
import Sponsor from "@/components/sponsor/Sponsor";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
// import Gallery from "@/components/gallery/Gallery";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const sponsors = [
    {
      type: "image",
      src: "/assets/sponsors/prhi.png",
      alt: "Pittsburgh Regional Health Initiative",
      link: "https://prhi.org/",
    },
    {
      type: "image",
      src: "/assets/sponsors/spoke.png",
      alt: "SpokeHQ",
      link: "https://spokehq.com/",
    },
    {
      type: "image",
      src: "/assets/sponsors/Nysus-sol.png",
      alt: "Nysus Solutions",
      link: "https://www.nysus.com/",
    },
    {
      type: "image",
      src: "/assets/sponsors/actual-tech.png",
      alt: "Actual Reality Technologies",
      link: "https://www.actualreality.tech/",
    },
    {
      type: "image",
      src: "/assets/sponsors/Koolkat-Science.svg",
      alt: "Koolkat Science",
      link: "https://koolkatscience.net/",
    },
    {
      type: "icon",
      icon: "github",
      alt: "GitHub",
      link: "https://www.github.com/",
    },
    {
      type: "image",
      src: "/assets/sponsors/mercy.svg",
      alt: "Mercy Health",
      link: "https://www.mercy.com/",
    },
    { type: "icon", icon: "aws", alt: "AWS", link: "https://aws.amazon.com/" },
    {
      type: "image",
      src: "/assets/sponsors/codeecho.svg",
      alt: "Code Echo",
      link: "https://codeecho.com/",
    },
    {
      type: "image",
      src: "/assets/sponsors/Perplexity.png",
      alt: "Perplexity AI",
      link: "https://www.perplexity.ai/",
    },
    {
      type: "image",
      src: "/assets/sponsors/warp.png",
      alt: "Warp Terminal",
      link: "https://www.warp.dev/",
    },
    {
      type: "image",
      src: "/assets/sponsors/Hugging-face.png",
      alt: "Hugging Face",
      link: "https://huggingface.co/",
    },
    {
      type: "image",
      src: "/assets/sponsors/xyz.svg",
      alt: ".XYZ",
      link: "https://www.gen.xyz/",
    },
    {
      type: "image",
      src: "/assets/sponsors/photoroom.svg",
      alt: "Photoroom",
      link: "https://www.photoroom.com/",
    },
    {
      type: "image",
      src: "/assets/sponsors/standout-stickers.svg",
      alt: "Standout Stickers",
      link: "https://www.standoutstickers.com/",
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("hasSeenAlert")) {
      setShowModal(true);
      localStorage.setItem("hasSeenAlert", "true");
    }
  }, []);

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-[#030C1B] from-10% to-50% to-[#081D41] border-2 border-[#FFDA20] p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-bold text-[#FFDA20]">Register Now!</h2>
            <p className="text-white mt-2">
              Please use the Google Form provided on the homepage to register.
            </p>
            <button
              className="mt-4 bg-[#FFDA20] text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              onClick={() => setShowModal(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <About />
      <Sponsor sponsors={sponsors} />
      {/* <Gallery /> */}
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}
