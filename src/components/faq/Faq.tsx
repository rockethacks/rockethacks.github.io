// src/components/faq/Faq.tsx
import React from "react";
import SponsorForm from "./SponsorForm";
import { SponsorShowcase } from "../sponsors/SponsorShowcase";
type FAQItemProps = {
  question: string;
  answer: string;
  heading?: string;
  altHeading?: string;
  altAnswer?: string;
};

const FAQItem = ({
  question,
  answer,
  heading,
  altHeading,
  altAnswer,
}: FAQItemProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f4e26c]/30 transition-colors">
    <h3 className="text-xl font-bold mb-2 text-white">{question}</h3>
    <h3 className="text-lg font-medium text-white">{heading}</h3>
    <p className="text-white/80">{answer}</p>
    <br />
    <h3 className="text-lg font-medium text-white">{altHeading}</h3>
    <p className="text-white/80">{altAnswer}</p>
  </div>
);

const ActionButton = ({
  href,
  children,
  id,
  className,
}: {
  href: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    id={id}
    className={`inline-block bg-transparent text-white px-4 py-3 rounded-md font-medium 
             border-2 border-[#FFDA00]
             transform hover:scale-105
             transition-all duration-300
             shadow-lg hover:shadow-[0_0_20px_rgba(244,226,108,0.3)]
             backdrop-blur-sm
             hover:bg-[#FFDA00]/10
             ${className || ""}`}
  >
    {children}
  </a>
);

const faqData = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where individuals or teams collaborate intensively on software development or hardware projects, typically within a fixed time frame (e.g., 24-48 hours). It's an opportunity to learn, create, and innovate while competing with other teams.",
  },
  {
    question: "Who can participate?",
    heading: "RocketHacks",
    answer:
      "Any student enrolled in an university or high school can participate in RocketHacks.",
    altHeading: "Code&Create",
    altAnswer: "Any under Classman/Senior enrolled at any high school.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and any hardware you plan to hack with. We'll provide food, drinks, and a space-themed workspace!",
  },
  {
    question: "Do I need a team?",
    answer:
      "You can participate solo or in teams of up to 4 people. Don't have a team? We'll help you find one during our team formation event!",
  },
  {
    question: "What if I don't have coding experience?",
    answer:
      "No worries! Hackathons are a great place to learn. There will be workshops, mentors, and resources available to help you. You can also focus on other aspects like design, project management, or testing.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFDA00]">
          FAQ
        </h2>
        <div className="space-y-4 mb-16">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              heading={item.heading}
              answer={item.answer}
              altHeading={item.altHeading}
              altAnswer={item.altAnswer}
            />
          ))}
        </div>

        {/* Sponsor Showcase Section */}
        <SponsorShowcase />

        {/* Contributors Section */}
        <section id="sponsor" className="text-center">
          <h2 className="pt-20 text-3xl md:text-5xl font-bold mb-12 text-[#FFDA00]">
            Contributors
          </h2>
          <div className="space-y-8">
            {/* Main description */}
            <p
              className="text-white/90 text-lg leading-relaxed bg-white/5 backdrop-blur-sm rounded-xl p-8 
                         border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 transition-all duration-300
                         shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]
                         max-w-3xl mx-auto"
            >
              RocketHacks can&apos;t happen without the support of our wonderful
              sponsors. As we celebrate our inaugural year, we&apos;re ready to
              make our event bigger and create a mark. We&apos;re all about
              fostering a community, and we&apos;d love to bring you into the
              RocketHacks family!
            </p>

            {/* Sponsor Form Section */}
            <div
              className="bg-white/5 backdrop-blur-sm rounded-xl 
                          border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 transition-all duration-300
                          shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]"
            >
              <SponsorForm />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 w-full max-w-3xl mx-auto">
          <ActionButton
            href="/documents/SPONSORSHIP PACKET(Updated MLH)- RocketHacks.pdf"
            className="w-full sm:w-auto"
          >
            Prospectus
          </ActionButton>

          <ActionButton
            href="https://forms.gle/7SGoQbESP6GAbTA9A"
            className="w-full sm:w-auto"
          >
            Judge/Mentor Form
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
