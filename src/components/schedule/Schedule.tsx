"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

const collegeSchedule = [
  { day: "Day 1", time: "09:00 AM", event: "Opening Ceremony", venue: "Nitschke Auditorium" },
  { day: "Day 1", time: "10:00 AM", event: "Hacker Check-in and Team Formation", venue: "Nitschke Auditorium" },
  { day: "Day 1", time: "11:00 AM", event: "Hacking Starts!", venue: "Nitschke Lobby and Brady Center" },
  { day: "Day 2", time: "10:00 AM", event: "Project Submissions Due", venue: "Nitschke Lobby and Brady Center" },
  { day: "Day 2", time: "12:00 PM", event: "Judging & Demos", venue: "Nitschke Lobby and Brady Center" },
  { day: "Day 2", time: "1:30 PM", event: "Closing Ceremony & Awards", venue: "Nitschke Lobby and Brady Center" },
];

const highSchoolSchedule = [
  { day: "Day 1", time: "09:00 AM", event: "Opening Ceremony", venue: "Nitschke Auditorium" },
  { day: "Day 1", time: "10:00 AM", event: "Campus Tour", venue: "University Of Toledo" },
  { day: "Day 1", time: "11:30 AM", event: "Mini Hackathon Begins", venue: "SSOE Room" },
  { day: "Day 1", time: "03:00 PM", event: "Project Showcase", venue: "SSOE Room" },
  { day: "Day 1", time: "5:30 PM", event: "Award Ceremony", venue: "SSOE Room" },
];

export default function Schedule() {
  const [selectedTab, setSelectedTab] = useState("college");

  return (
    <section id="schedule">
      <div className="h-screen bg-cover bg-center relative bg-gradient-to-b from-[#081d41] from-90% to-[#081d41] to-10%">
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/Spongebob-Holmes.jpeg"
              alt="Event illustration"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Tabs Section */}
          <div className={`${terminal.className} text-white w-full md:w-1/2 bg-slate-950/30 backdrop-blur-sm border-amber-300 border-2 rounded-md p-5`}>
            <h2 className="text-4xl md:text-6xl text-[#FFDA20] text-center mb-6">
              Event Schedule
            </h2>

            {/* Radix UI Tabs */}
            <Tabs.Root defaultValue="college" onValueChange={setSelectedTab}>
              {/* Tabs List */}
              <Tabs.List className="flex justify-center space-x-4 mb-4 border-b border-gray-500">
                <Tabs.Trigger
                  value="college"
                  className={`px-6 py-3 text-2xl md:text-3xl font-bold border-b-2 ${
                    selectedTab === "college" ? "border-yellow-400" : "border-transparent"
                  } transition`}
                >
                  College
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="highschool"
                  className={`px-6 py-3 text-2xl md:text-3xl font-bold border-b-2 ${
                    selectedTab === "highschool" ? "border-yellow-400" : "border-transparent"
                  } transition`}
                >
                  High School
                </Tabs.Trigger>
              </Tabs.List>

              {/* Smooth Sliding Transition for Schedule Sections */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {selectedTab === "college" ? (
                    <motion.div
                      key="college"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: "0%", opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      
                      <Accordion type="single" collapsible>
                        {collegeSchedule.map((item, index) => (
                          <AccordionItem key={index} value={`college-${index}`}>
                            <AccordionTrigger className="font-bold text-white">
                              {`${item.day} - ${item.event}`}
                            </AccordionTrigger>
                            <AccordionContent className="text-white">
                              <p className="text-md">Time: {item.time}</p>
                              <p className="text-md">Venue: {item.venue}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="highschool"
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: "0%", opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      
                      <Accordion type="single" collapsible>
                        {highSchoolSchedule.map((item, index) => (
                          <AccordionItem key={index} value={`highschool-${index}`}>
                            <AccordionTrigger className="font-bold text-white">
                              {`${item.day} - ${item.event}`}
                            </AccordionTrigger>
                            <AccordionContent className="text-white">
                              <p className="text-md">Time: {item.time}</p>
                              <p className="text-md">Venue: {item.venue}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
