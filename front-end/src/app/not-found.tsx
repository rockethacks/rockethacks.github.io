"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

{
  /* NOTE: Remember to rename this page as Not-found.tsx */
}
export default function Custom404() {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });
  return (
    <motion.section
      style={{
        backgroundImage:
          "radial-gradient(125% 100% at 50% 0%, #020617 30%, #122D88)",
      }}
      className="relative grid min-h-screen  overflow-hidden bg-gray-950  text-gray-200"
    >
      <div className="absolute inset-0 z-1">
        <Canvas>
          <Stars
            radius={50}
            depth={46}
            count={900}
            factor={5}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      <section
        id="404"
        className="min-h-screen max-h-fit w-full flex flex-col items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#9905A0]/20"
      >
        <h1 className="text-[340px] font-bold">404</h1>
        <h3 className="text-[64px] font-semibold text-yellow-300">Oops!</h3>
        <h4 className="text-[32px] font-light text-white">
          This page was not found.
        </h4>
      </section>
    </motion.section>
  );
}
