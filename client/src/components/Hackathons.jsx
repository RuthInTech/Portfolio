import React from 'react';
import { Zap, Clock, Users, Lightbulb, Compass, ArrowUpRight, Trophy } from 'lucide-react';

export default function Hackathons() {
  const hackathonPrinciples = [
    {
      icon: Lightbulb,
      title: 'Practical, Problem-First Ideas',
      desc: 'Hackathons aren’t just about showing off fancy algorithms — they are about identifying a real point of friction (like hospital queues or NGO donations) and solving it pragmatically.',
    },
    {
      icon: Clock,
      title: 'Rapid Prototyping Under Constraints',
      desc: 'When you only have 24 to 48 hours, every design and architecture decision matters. It trains the ability to cut non-essential scope and polish core user flows.',
    },
    {
      icon: Users,
      title: 'Cross-Disciplinary Teamwork',
      desc: 'Collaborating tightly with fellow engineers, product thinkers, and domain experts — pitching ideas, dividing components, and staying calm during final submission crunches.',
    },
    {
      icon: Zap,
      title: 'Immediate Feedback & Learning',
      desc: 'Testing an application in front of judges and peers teaches you more about real user behavior in 10 minutes than weeks of building in complete isolation.',
    },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] relative border-b border-[#E2D3C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Ruth's Hackathon Mindset */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F2EA] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 text-[#C88346]" />
              Hackathons &amp; Rapid Building
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight leading-tight">
              Where ideas become working software <br />
              <span className="text-[#7F5E42] italic">overnight.</span>
            </h2>

            <p className="text-base text-[#61442E] leading-relaxed">
              Hackathons are one of my favorite environments to build in. The clock forces clarity: you don’t have time to over-engineer, so you have to focus on what the user actually touches and why it matters.
            </p>

            <p className="text-sm text-[#7F5E42] leading-relaxed">
              Projects like <strong className="text-[#2E1E14]">Queueless</strong> were conceived in these intense sprint sessions — starting with a whiteboarding sketch on physical queue bottlenecks in Addis Ababa, into Figma wireframes, and finally into a functioning MERN stack prototype ready for live demonstration.
            </p>

            <div className="p-4 rounded-2xl bg-[#F7F2EA] border border-[#E2D3C0] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C88346]">
                Ready for Hackathon Teams &amp; Sprints
              </div>
              <p className="text-xs text-[#61442E]">
                Need a frontend developer who can wireframe in Figma, build the UI in React/Vue/Flutter, and help pitch the product? I'm always open to collaborating!
              </p>
            </div>
          </div>

          {/* Right Column: 4 Hackathon Strengths */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {hackathonPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] hover:border-[#BA9B7B] transition-all duration-200 space-y-2.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] border border-[#D2BBA0] flex items-center justify-center text-[#7F5E42]">
                    <Icon className="w-5 h-5 text-[#C88346]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#2E1E14]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#61442E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
