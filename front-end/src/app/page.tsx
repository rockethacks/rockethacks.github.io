'use client';
import { useState, useEffect } from 'react';
import { Rocket as NavRocket, Flame } from 'lucide-react';
import RocketIcon from '@/assets/rocket.svg';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="text-white/90 hover:text-white transition-colors text-lg font-medium px-6 py-2"
  >
    {children}
  </a>
);

const Section = ({ id, className = '', children }: { id: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`min-h-screen w-full flex flex-col items-center justify-center px-4 ${className}`}>
    {children}
  </section>
);

const AnimatedRocket = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScroll(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-8 bottom-8 transition-all duration-300 z-50"
      style={{
        transform: `translateY(${-scroll * 2}px)`,
        opacity: scroll > 95 ? 0 : 1
      }}
    >
      {/* Imported Rocket SVG */}
      <div className="drop-shadow-[0_0_10px_rgba(244,226,108,0.5)]">
        <RocketIcon className="w-20 h-20" />
      </div>
      {/* Animated Flames */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <Flame 
          className="w-8 h-8 text-[#f4e26c] animate-pulse absolute"
          style={{
            opacity: 0.8,
            transform: 'scale(0.8)',
            filter: 'drop-shadow(0 0 5px rgba(244, 226, 108, 0.5))'
          }}
        />
        <Flame 
          className="w-6 h-6 text-orange-500 animate-pulse absolute -bottom-2"
          style={{
            opacity: 0.6,
            transform: 'scale(0.6)',
            animationDelay: '150ms'
          }}
        />
        {/* Rocket Trail */}
        <div 
          className="w-1 bg-gradient-to-b from-[#f4e26c] via-orange-500 to-transparent rounded-full"
          style={{
            height: `${Math.min(scroll * 0.7, 50)}px`,
            opacity: Math.min(scroll * 0.02, 0.7),
            marginTop: '32px'
          }}
        >
          {/* Animated particles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#f4e26c]"
                style={{
                  animation: `particle ${1 + i * 0.2}s infinite`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Move particle styles to a component
const ParticleStyles = () => {
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes particle {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 0.8;
        }
        100% {
          transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 20}px, ${20 + Math.random() * 20}px) scale(0);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  return null;
};

export default function Home() {
  const [email, setEmail] = useState('');
  
  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 relative overflow-x-hidden">
      <ParticleStyles />
      {/* Add yellow tint to background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4e26c]/5 via-transparent to-transparent"></div>
      
      <AnimatedRocket />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <NavRocket className="w-6 h-6 text-[#f4e26c]" />
              <span className="text-white text-xl font-bold">RocketHacks</span>
            </div>
            <div className="flex items-center gap-4">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="pt-20">
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-2 leading-tight">
            Join the biggest student
            <span className="block">hackathon in space.</span>
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto relative mb-12">
          <input
            type="email"
            placeholder="Enter email to stay updated"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f4e26c] focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f4e26c] text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-[#f4e26c]/90 transition-colors">
            →
          </button>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f4e26c]/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-white">24 Hours</h3>
              <p className="text-white/80">Join us for an intense 24-hour coding experience that will push your limits</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f4e26c]/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-white">$10k in Prizes</h3>
              <p className="text-white/80">Compete for amazing prizes and opportunities to launch your ideas</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f4e26c]/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-white">Learn & Connect</h3>
              <p className="text-white/80">Network with industry experts and learn from experienced mentors</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Who can participate?",
                a: "Any student enrolled in a university or college can participate in RocketHacks."
              },
              {
                q: "What should I bring?",
                a: "Bring your laptop, charger, and any hardware you plan to hack with. We'll provide food, drinks, and a space-themed workspace!"
              },
              {
                q: "Do I need a team?",
                a: "You can participate solo or in teams of up to 4 people. Don't have a team? We'll help you find one during our team formation event!"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#f4e26c]/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-white">{item.q}</h3>
                <p className="text-white/80">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-350px] left-[-350px] w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-[-350px] right-[-350px] w-96 h-96 rounded-full bg-[#f4e26c]/5 blur-3xl"></div>
      </div>
    </div>
  );
}