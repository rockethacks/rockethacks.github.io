// src/components/faq/Faq.tsx
import React from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f4e26c]/30 transition-colors">
    <h3 className="text-xl font-bold mb-2 text-white">{question}</h3>
    <p className="text-white/80">{answer}</p>
  </div>
);

const faqData = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where individuals or teams collaborate intensively on software development or hardware projects, typically within a fixed time frame (e.g., 24-48 hours). It’s an opportunity to learn, create, and innovate while competing with other teams.",
  },
  {
    question: "Who can participate?",
    answer:
      "Any student enrolled in a university or college can participate in RocketHacks.",
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
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
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
              answer={item.answer}
            />
          ))}
        </div>

        {/* Contributors Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#FFDA00]">
            Contributors
          </h2>
          <div className="space-y-8 mb-12">
            {/* Main description */}
            <p
              className="text-white/90 text-lg leading-relaxed bg-white/5 backdrop-blur-sm rounded-xl p-8 
                         border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 transition-all duration-300
                         shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]
                         text-justify"
            >
              RocketHacks can't happen without the support of our wonderful
              sponsors. As we celebrate our inaugural year, we're ready to make
              our event bigger and create a mark. We're all about fostering a
              community, and we'd love to bring you into the RocketHacks family!
            </p>

            {/* Why Sponsor Section */}
            <div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 
                          border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 transition-all duration-300
                          shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]
                          text-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#FFDA00]">
                Why Sponsor RocketHacks ?
              </h3>
              <h4 className="text-xl font-semibold mb-4 text-white">
                As a sponsor, you'll be able to:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-white/90 mb-6">
                <li>
                  Introduce your product or platform to over 200+ student
                  developers
                </li>
                <li>
                  Recruit from an elite pool of software developers and upcoming
                  computer science engineers
                </li>
                <li>
                  Increase your brand's visibility through RocketHacks' social
                  media channels and events
                </li>
                <li>
                  Facilitate interaction between participants and your employees
                  & brand
                </li>
                <li>Mentor and assist hackers with their projects</li>
              </ul>
              <p className="text-lg font-semibold text-[#FFDA00] italic">
                Interested in sponsoring? Hit the sponsor us tag below and get
                in touch with us!
              </p>
            </div>
          </div>

          {/* Prospectus Button */}
          <a
            href="/documents/Sponsorship Packet RocketHacks.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-white px-4 py-3 rounded-md font-medium 
                     border-2 border-[#FFDA00]
                     transform hover:scale-105
                     transition-all duration-300
                     shadow-lg hover:shadow-[0_0_20px_rgba(244,226,108,0.3)]
                     backdrop-blur-sm
                     hover:bg-[#FFDA00]/10"
          >
            Prospectus
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
