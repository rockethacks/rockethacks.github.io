// src/components/faq/Faq.tsx
import React from 'react';

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
    question: "Who can participate?",
    answer: "Any student enrolled in a university or college can participate in RocketHacks."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any hardware you plan to hack with. We'll provide food, drinks, and a space-themed workspace!"
  },
  {
    question: "Do I need a team?",
    answer: "You can participate solo or in teams of up to 4 people. Don't have a team? We'll help you find one during our team formation event!"
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFDA00]">FAQs</h2>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#FFDA00]">Contributors</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-8 
                       border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 transition-all duration-300
                       shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)] text-justify">
            RocketHacks can&apos;t happen without the support of our wonderful sponsors. As we celebrate our inaugural year, 
            we&apos;re ready to make our event bigger and create a lasting mark. We&apos;re all about fostering a community, and we&apos;d 
            love to bring you into the RocketHacks family!
          </p>
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