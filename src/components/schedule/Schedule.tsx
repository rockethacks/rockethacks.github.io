"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";

const terminal = localFont({ src: "../../app/fonts/terminal-grotesque.ttf" });

const collegeSchedule = [
  {
    day: "Day 1",
    time: "08:30 AM",
    event: "Hackers Check-in",
    venue: "Outside Nitschke Auditorium",
  },
  {
    day: "Day 1",
    time: "09:00 AM",
    event: "Opening Ceremony",
    venue: "Nitschke Auditorium",
  },
  {
    day: "Day 1",
    time: "10:00 AM",
    event: "Team Formation",
    venue: "Nitschke Auditorium",
  },
  {
    day: "Day 1",
    time: "11:00 AM",
    event: "Hacking Starts!",
    venue: "Nitschke Hallway",
  },
  { day: "Day 1", time: "12:30 PM", event: "Lunch", venue: "Node" },
  { day: "Day 1", time: "07:00 PM", event: "Dinner", venue: "Node" },
  { day: "Day 2", time: "08:00 AM", event: "Breakfast", venue: "Node" },
  {
    day: "Day 2",
    time: "11:00 AM",
    event: "Project Submissions Due",
    venue: "Nitschke Hallway",
  },
  {
    day: "Day 2",
    time: "12:00 PM",
    event: "Judging",
    venue: "Nitschke Lobby and Brady Center",
  },
  { day: "Day 2", time: "12:30 PM", event: "Lunch", venue: "Node" },
  {
    day: "Day 2",
    time: "1:30 PM",
    event: "Closing Ceremony & Awards",
    venue: "Nitschke Auditorium",
  },
];

const highSchoolSchedule = [
  {
    day: "Day 1",
    time: "08:00 AM",
    event: "Hackers Check-in",
    venue: "Outside Nitschke Auditorium",
  },
  {
    day: "Day 1",
    time: "09:00 AM",
    event: "Opening Ceremony",
    venue: "Nitschke Auditorium",
  },
  {
    day: "Day 1",
    time: "10:00 AM",
    event: "Campus Tour",
    venue: "University Of Toledo",
  },
  {
    day: "Day 1",
    time: "11:00 AM",
    event: "KoolKat Science Workshop",
    venue: "North Engineering 2100",
  },
  {
    day: "Day 1",
    time: "12:00 PM",
    event: "Project on Scratch",
    venue: "North Engineering 2100",
  },
  {
    day: "Day 1",
    time: "02:00 PM",
    event: "Judging",
    venue: "North Engineering 2100",
  },
];

export default function Schedule() {
  const [selectedTab, setSelectedTab] = useState("college");
  const [selectedCollegeDay, setSelectedCollegeDay] = useState("Day 1");
  const [showImageModal, setShowImageModal] = useState(false);

  const filteredCollegeSchedule = collegeSchedule.filter(
    (item) => item.day === selectedCollegeDay
  );

  return (
    <section id="schedule">
      <div className="h-screen bg-cover bg-center relative bg-gradient-to-b from-[#030c1b] to-80% to-[#030c1b]/50 from-28% mb-20 mt-20">
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/COE_MAP_2.png"
              alt="Event illustration"
              width={700}
              height={700}
              className="object-cover rounded-lg shadow-lg cursor-pointer  border-blue-600 border-2 p-5`"
              onClick={() => setShowImageModal(true)}
            />
          </div>
          <div
            className={`${terminal.className} text-white w-full md:w-1/2 bg-slate-950/30 backdrop-blur-sm border-blue-600 border-2 rounded-md p-5`}
          >
            <h2 className="text-4xl md:text-6xl text-[#FFDA20] text-center mb-6">
              Event Schedule
            </h2>
            <Tabs.Root defaultValue="college" onValueChange={setSelectedTab}>
              <Tabs.List className="flex justify-center space-x-4 mb-4 border-b border-gray-500">
                <Tabs.Trigger
                  value="college"
                  className={`px-6 py-3 text-2xl md:text-3xl font-bold border-b-2 ${
                    selectedTab === "college"
                      ? "border-yellow-400"
                      : "border-transparent"
                  } transition`}
                >
                  RocketHacks
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="highschool"
                  className={`px-6 py-3 text-2xl md:text-3xl font-bold border-b-2 ${
                    selectedTab === "highschool"
                      ? "border-yellow-400"
                      : "border-transparent"
                  } transition`}
                >
                  Code & Create
                </Tabs.Trigger>
              </Tabs.List>
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {selectedTab === "college" ? (
                    <motion.div
                      key="college"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: "0%", opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeIn" }}
                    >
                      <div className="flex justify-center space-x-4 mb-4">
                        <button
                          onClick={() => setSelectedCollegeDay("Day 1")}
                          className={`px-4 py-2 rounded ${
                            selectedCollegeDay === "Day 1"
                              ? "bg-yellow-400 text-black text-xl"
                              : "bg-transparent border border-white text-white"
                          } transition`}
                        >
                          Day 1
                        </button>
                        <button
                          onClick={() => setSelectedCollegeDay("Day 2")}
                          className={`px-4 py-2 rounded ${
                            selectedCollegeDay === "Day 2"
                              ? "bg-yellow-400 text-black text-xl"
                              : "bg-transparent border border-white text-white"
                          } transition`}
                        >
                          Day 2
                        </button>
                      </div>
                      <Accordion type="single" collapsible>
                        {filteredCollegeSchedule.map((item, index) => (
                          <AccordionItem
                            key={index}
                            value={`college-${selectedCollegeDay}-${index}`}
                          >
                            <AccordionTrigger className="font-bold text-white">
                              {`${item.time} - ${item.event}`}
                            </AccordionTrigger>
                            <AccordionContent className="text-white">
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
                      transition={{ duration: 0.2, ease: "easeIn" }}
                    >
                      <Accordion type="single" collapsible>
                        {highSchoolSchedule.map((item, index) => (
                          <AccordionItem
                            key={index}
                            value={`highschool-${index}`}
                          >
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
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/COE_MAP_2.png"
                alt="Enlarged Event illustration"
                width={1000}
                height={1000}
                className="object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
