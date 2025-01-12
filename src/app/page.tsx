// src/app/page.tsx
"use client";
import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/About";
import FAQ from "@/components/faq/Faq";
import Footer from "@/components/ui/footer";
import AnimatedRocket from "@/components/rocket/AnimatedRocket";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const COLORS = ["#122D88", "#4d011d", "#024d13"];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(300% 100% at 50% 0%, #030013 30%, ${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  return (
    /* Aurora Effect */
    <motion.section
      style={{
        backgroundImage,
        zIndex: "10",
      }}
      className="relative grid min-h-screen overflow-hidden bg-gray-950  text-gray-200 z-10"
    >
      <div className="absolute inset-0 z-2">
        <Canvas>
          <Stars
            radius={10}
            depth={46}
            count={5000}
            factor={3}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
      <AnimatedRocket />
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-350px] left-[-350px] w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-[-350px] right-[-350px] w-96 h-96 rounded-full bg-[#f4e26c]/5 blur-3xl"></div>
      </div>
      <Footer />
    </motion.section>
  );
}
