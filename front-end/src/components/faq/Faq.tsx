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
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFDA00]">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;