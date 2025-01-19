"use client";
import React from "react";
import { Squares } from "@/components/ui/squares-background";

function faq() {
  return (
    <div className="space-y-8">
      {/* Fullscreen background section */}
      <section id="faq">
        <div className="h-screen bg-cover bg-center relative">
          <Squares
            direction="down"
            speed={0.0}
            squareSize={40}
            borderColor="#182B53"
            hoverFillColor="#030C1B"
          />
          {/* FAQ text positioned at the top */}
          <div className="absolute top-8 py-10 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-white text-5xl z-20 hidden lg:block">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <h1 className="text-white text-5xl z-20 block lg:hidden">FAQ</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default faq;
