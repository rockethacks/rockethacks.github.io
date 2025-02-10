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

function FAQ() {
  return (
    <div className="space-y-8">
      {/* Fullscreen background section */}
      <section id="faq">
        <div className="h-screen bg-cover bg-center relative bg-gradient-to-b from-[#081d41]/60 from-10% via-[#081d41] to-[#030c1b] to-85%">
          {/* FAQ text positioned at the top */}
          <div className="absolute top-8 py-10 left-1/2 transform -translate-x-1/2 text-center">
            <h2
              className={`${terminal.className} text-4xl md:text-6xl  text-[#FFDA20] z-20 hidden lg:block`}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <h2
              className={`${terminal.className} text-4xl md:text-6xl font-bold text-[#FFDA20] z-20 block lg:hidden`}
            >
              FAQ
            </h2>
            <div
              className={`${terminal.className} rounded-md bg-slate-950/30 backdrop-blur-sm border-amber-300 border-2 mt-10 px-5 py-3 w-[400px] sm:w-[500px] md:w-[700px] lg:w-[1000px] mx-auto text-white text-balance break-normal text-left`}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a Hackathon?</AccordionTrigger>
                  <AccordionContent>
                    A hackathon is an event where individuals or teams
                    collaborate intensively on software development or hardware
                    projects, typically within a fixed time frame (e.g., 24-48
                    hours). It{"'"}s an opportunity to learn, create, and
                    innovate while competing with other teams.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Who can participate?</AccordionTrigger>
                  <AccordionContent>
                    <b>RocketHacks </b> <br />
                    Any student enrolled in a university or high school can
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
                    You can participate solo or in teams of up to 4 people. Don
                    {"'"}t have a team? We{"'"}ll help you find one during our
                    team formation event!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What if I don{"'"}t have coding experience?
                  </AccordionTrigger>
                  <AccordionContent>
                    No worries! Hackathons are a great place to learn. There
                    will be workshops, mentors, and resources available to help
                    you. You can also focus on other aspects like design,
                    project management, or testing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                  How long does Rocket Hacks last?
                  </AccordionTrigger>
                  <AccordionContent>
                    Rocket Hacks will last for 24 hours. The event will start on Saturday, March 15, 2025 and end on Sunday, March 16, 2025. However there is additional time before and after hacking for introductions and presentations..
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                  Is Rocket Hacks 2025 in-person or virtual?
                  </AccordionTrigger>
                  <AccordionContent>
                  Rocket Hacks 2025 is an in-person only event, We hope to give you the best hackathon experience at the University of Toledo North Engineering Campus, 1700 N Westwood Ave, Toledo, OH 43607. Unfortunately, we won't be providing a virtual option this year. We are also unable to offer travel reimbursements at this time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                  How much does Rocket Hacks cost?
                  </AccordionTrigger>
                  <AccordionContent>
                  Rocket Hacks is free for all students enrolled at any accredited university or high school. Swag, prizes, and great memories are all included with this completely free cost!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>
                  Should I expect a waiver?
                  </AccordionTrigger>
                  <AccordionContent>
                  You betcha. Before any hacking begins we require you to sign a waiver which will be emailed to all registered participants prior to the hackathon. If you are under 18 you will need a parent or legal guardian to sign the waiver.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>
                  Is there a Code of Conduct?
                  </AccordionTrigger>
                  <AccordionContent>
                  Absolutely! We operate on the Major League Hacking Code of Conduct to create an all-inclusive environment for our hackers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>
                  What if I have more questions?
                  </AccordionTrigger>
                  <AccordionContent>
                  Send us an email to rockethacks@utoledo.edu. We are always happy to help.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
