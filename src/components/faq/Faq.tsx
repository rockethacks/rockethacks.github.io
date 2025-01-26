"use client";
import React from "react";
// import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import localFont from "next/font/local";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

function faq() {
  return (
    <div className="space-y-8">
      {/* Fullscreen background section */}
      <section id="faq">
        <div className="h-screen bg-cover bg-center relative bg-gradient-to-b from-[#081d41]/60 from-10% via-[#081d41] to-[#030c1b] to-85%">
          {/* <Image
            src="/assets/arcade.png"
            alt="Person in space"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-5"
          /> */}
          {/* FAQ text positioned at the top */}
          <div className="absolute top-8 py-10 left-1/2 transform -translate-x-1/2 text-center">
            <h2 className={`${terminal.className} text-4xl md:text-6xl  text-[#FFDA20] z-20 hidden lg:block`}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <h2 className={`${terminal.className} text-4xl md:text-6xl font-bold text-[#FFDA20] z-20 block lg:hidden`}>
              FAQ
            </h2>
            <div className="text-2xl">
              <div className="rounded-md bg-slate-950/30 backdrop-blur-sm border-amber-300 border-2 mt-10 px-5 py-3 w-80 md:w-full lg:px-24 lg:py-10 text-white text-balance break-normal text-left">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is a Hackathon?</AccordionTrigger>
                    <AccordionContent>
                      A hackathon is an event where individuals or teams
                      collaborate intensively on software development or
                      hardware projects, typically within a fixed time frame
                      (e.g., 24-48 hours). It{"'"}s an opportunity to learn,
                      create, and innovate while competing with other teams.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Who can participate?</AccordionTrigger>
                    <AccordionContent>
                      <b>RocketHacks </b> <br />
                      Any student enrolled in an university or high school can
                      participate in RocketHacks.
                      <br />
                      <br />
                      <b>Code&Create</b>
                      <br />
                      Any under Classman/Senior enrolled at any high school.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What should I bring?</AccordionTrigger>
                    <AccordionContent>
                      Bring your laptop, charger, and any hardware you plan to
                      hack with. We{"'"}ll provide food, drinks, and a
                      space-themed workspace!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Do I need a team?</AccordionTrigger>
                    <AccordionContent>
                      You can participate solo or in teams of up to 4 people.
                      Don{"'"}t have a team? We{"'"}ll help you find one during
                      our team formation event!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      What if I don{"'"}t have coding experience?
                    </AccordionTrigger>
                    <AccordionContent>
                      No worries! Hackathons are a great place to learn. There
                      will be workshops, mentors, and resources available to
                      help you. You can also focus on other aspects like design,
                      project management, or testing.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default faq;
