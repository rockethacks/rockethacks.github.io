"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import localFont from "next/font/local";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

const schedule = [
  { day: "Day 1", time: "10:00 AM", event: "Opening Ceremony" },
  { day: "Day 1", time: "11:00 AM - 1:00 PM", event: "Workshops & Events" },
  { day: "Day 1", time: "1:00 PM", event: "Check-in with Mentors" },
  { day: "Day 2", time: "9:00 AM", event: "Project Submissions Due" },
  { day: "Day 2", time: "11:00 AM", event: "Judging & Demos" },
  { day: "Day 2", time: "3:00 PM", event: "Closing Ceremony & Awards" },
];

export default function Schedule() {
  return (
    <section id="schedule">
      <div className="h-screen bg-cover bg-center relative bg-gradient-to-b from-[#081d41] from-90% to-[#081d41] to-10%">
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/Spongebob-Holmes.jpeg"
              alt="Event illustration"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className={`${terminal.className} text-white w-full md:w-1/2 bg-slate-950/30 backdrop-blur-sm border-amber-300 border-2 rounded-md p-5`}>
            <h2 className="text-4xl md:text-6xl text-[#FFDA20] text-center mb-6">
              Event Schedule
            </h2>
            <Accordion type="single" collapsible>
              {schedule.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-bold text-white">
                    {`${item.day} - ${item.event}`}
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    <div className="space-y-2">
                      <p className="text-sm">Time: {item.time}</p>
                      <p className="text-sm">Event: {item.event}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
