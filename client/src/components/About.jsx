import React from 'react';
import { Sparkles, Layers, Palette, Terminal, Compass, Users, Lightbulb, Coffee, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Layers,
      title: 'Frontend Engineering',
      desc: 'Translating concepts into clean, reusable component trees with React, Vue, and Flutter. Passionate about state management, snappy performance, and accessible responsive layouts.',
      tag: 'Code & Architecture',
    },
    {
      icon: Palette,
      title: 'UI/UX & Design Craft',
      desc: 'Designing interfaces in Figma with intentional typography, warm color harmony, and empathetic user journeys before writing a single line of code.',
      tag: 'Figma & Ergonomics',
    },
    {
      icon: Compass,
      title: 'Product Thinking',
      desc: 'Focusing on why something is being built — solving actual problems, whether reducing line wait times (Queueless) or connecting people to grassroots causes (Pick One Cause).',
      tag: 'Real-World Utility',
    },
  ];

  const learnerTraits = [
    { label: 'Hands-on Builder', desc: 'I learn by actually building projects, breaking them, and fixing them.' },
    { label: 'Design to Code', desc: 'Turning rough ideas or Figma frames into living, responsive interfaces.' },
    { label: 'Hackathon Driven', desc: 'Thriving in fast-paced sprints where practical problem solving matters.' },
    { label: 'Community Minded', desc: 'Collaborating, sharing insights, and growing with fellow student engineers.' },
  ];

  return (
    <section id="about" className="py-24 bg-[#F7F2EA] border-y border-[#E2D3C0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C88346]" />
            About Ruth
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Bridging the gap between <br className="hidden sm:inline" />
            <span className="text-[#7F5E42] italic">visual design</span> and <span className="text-[#2E1E14]">software execution</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            A hands-on engineering student who cares just as much about how an app feels as how it runs.
          </p>
        </div>

        {/* Story Section: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left text-[#463020] leading-relaxed">
            <h3 className="text-2xl font-serif font-bold text-[#2E1E14]">
              "I don't just write the interface. I think about the interface."
            </h3>

            <p className="text-base text-[#61442E]">
              I am currently a 4th-year Software Engineering student at <strong className="text-[#2E1E14]">Addis Ababa University (AAU)</strong>. Early in my engineering studies, I realized I was drawn to the space where software meets the human eye — the frontend.
            </p>

            <p className="text-base text-[#61442E]">
              Too often in engineering, design and code are treated like completely separate worlds: designers produce static mockups that developers find awkward to code, or developers build robust backends wrapped in confusing, clunky interfaces. My goal is to be the bridge: someone who understands component lifecycles and REST APIs, but also obsesses over button states, typography hierarchy, and accessibility contrast.
            </p>

            <p className="text-base text-[#61442E]">
              I am a <strong className="text-[#2E1E14]">hands-on learner</strong>. Rather than memorizing framework documentation in isolation, I learn technologies by building real things: from a bakery ordering system in Vue (<strong className="text-[#7F5E42]">Crust &amp; Crumbs</strong>), to a hackathon queue management platform in the MERN stack (<strong className="text-[#7F5E42]">Queueless</strong>), to cross-platform mobile utilities in Flutter.
            </p>

            {/* Quote callout */}
            <div className="p-4 rounded-2xl bg-[#FAF6F0] border-l-4 border-[#C88346] border-y border-r border-[#E2D3C0] mt-4">
              <p className="italic text-sm text-[#463020]">
                "A good application isn't just one that doesn't crash — it's one that communicates clearly, respects the user's attention, and feels satisfying to use."
              </p>
            </div>
          </div>

          {/* Right Column: Key Details & Learner Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] shadow-warm space-y-5 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2D3C0]">
                <span className="font-serif font-bold text-lg text-[#2E1E14]">At a Glance</span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#EFE6DA] text-[#61442E]">
                  2026 Graduating Class
                </span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE6DA] flex items-center justify-center shrink-0 text-[#7F5E42]">
                    <BookOpen className="w-4 h-4 text-[#C88346]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2E1E14]">BSc in Software Engineering</div>
                    <div className="text-xs text-[#7F5E42]">Addis Ababa University (AAU) — Year 4</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE6DA] flex items-center justify-center shrink-0 text-[#7F5E42]">
                    <Coffee className="w-4 h-4 text-[#C88346]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2E1E14]">Home Base &amp; Inspiration</div>
                    <div className="text-xs text-[#7F5E42]">Addis Ababa, Ethiopia — The birthplace of coffee</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE6DA] flex items-center justify-center shrink-0 text-[#7F5E42]">
                    <Users className="w-4 h-4 text-[#C88346]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2E1E14]">Looking For</div>
                    <div className="text-xs text-[#7F5E42]">Frontend &amp; UI/UX Internships, Freelance, Hackathon Teams</div>
                  </div>
                </div>
              </div>

              {/* Trait Tags */}
              <div className="pt-2 border-t border-[#E2D3C0]">
                <div className="text-xs font-semibold text-[#61442E] mb-2 uppercase tracking-wider">How I Work</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {learnerTraits.map((t) => (
                    <div key={t.label} className="p-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0]">
                      <div className="font-semibold text-[#2E1E14]">{t.label}</div>
                      <div className="text-[11px] text-[#7F5E42] mt-0.5 leading-tight">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-6 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] hover:border-[#BA9B7B] hover:shadow-warm transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F4EBD9] to-[#E7D7C1] border border-[#D2BBA0] flex items-center justify-center text-[#7F5E42] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#C88346]" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-[#F7F2EA] text-[#7F5E42] border border-[#E2D3C0]">
                    {pillar.tag}
                  </span>
                </div>
                <h4 className="text-lg font-serif font-bold text-[#2E1E14] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-[#61442E] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
