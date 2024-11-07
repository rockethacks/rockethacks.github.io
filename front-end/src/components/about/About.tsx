import React from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#f4e26c]/20 hover:border-[#f4e26c]/40 transition-all duration-300 shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]">
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-white/80">{description}</p>
  </div>
);

const features = [
  {
    title: "24 Hours",
    description: "Join us for an intense 24-hour coding experience that will push your limits"
  },
  {
    title: "Win Prizes & More..",
    description: "Compete for amazing prizes and opportunities to launch your ideas"
  },
  {
    title: "Learn & Connect",
    description: "Network with industry experts and learn from experienced mentors"
  }
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#FFDA00]">About Us</h2>
        {/* Description Container */}
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-white/90 bg-white/5 backdrop-blur-sm rounded-xl p-8 
                       border border-[#FFDA00]/20 hover:border-[#FFDA00]/40 transition-all duration-300
                       shadow-[0_0_15px_rgba(244,226,108,0.1)] hover:shadow-[0_0_20px_rgba(244,226,108,0.15)]">
            RocketHacks is a 24-hour hackathon hosted by the University of Toledo, 
            dedicated to fostering innovation and problem-solving among students from 
            the Midwest and beyond. This event will gather talented students, from 
            budding programmers to visionary designers, to build real solutions to 
            real-world challenges. With an emphasis on collaboration, creativity, 
            and technical skills, RocketHacks will empower students to turn their 
            ideas into impactful projects.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;