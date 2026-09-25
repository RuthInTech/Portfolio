import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Figma, Sparkles, Coffee, Heart, Terminal, Compass, Laptop } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-warm">
      {/* Warm Ambient Coffee Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#EBDDCB]/60 via-[#F4EBD9]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#E7D7C1]/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Ruth's Intro & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD9] border border-[#D2BBA0] text-xs text-[#463020] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C88346] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C88346]"></span>
              </span>
              <span className="font-semibold tracking-wide">4th-Year Software Engineering</span>
              <span className="text-[#BA9B7B]">•</span>
              <span className="text-[#61442E]">Addis Ababa University</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2E1E14] tracking-tight leading-[1.12]">
                Crafting interfaces where{' '}
                <span className="relative inline-block text-[#7F5E42] italic">
                  thoughtful design
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5" stroke="#C88346" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                meets functional code.
              </h1>
            </div>

            {/* Professional Role Title */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-lg md:text-xl font-medium text-[#463020]">
                Ruth — <span className="text-[#2E1E14] font-semibold">Frontend &amp; Design Developer</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#EFE6DA] text-[#61442E] text-xs font-mono font-medium">
                MERN • Vue • Flutter • Figma
              </span>
            </div>

            {/* Authentic Bio Voice */}
            <p className="text-base sm:text-lg text-[#61442E] leading-relaxed max-w-2xl">
              I like building things that start as an idea, a Figma frame, or a problem someone keeps running into — and turning them into something people can actually use.
            </p>

            {/* Core Intersection Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#463020]">
              <span className="font-semibold text-[#2E1E14]">Sweet spot:</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#E2D3C0] font-medium">
                <Laptop className="w-3.5 h-3.5 text-[#C88346]" />
                Frontend Engineering
              </div>
              <span className="text-[#C88346] font-bold">×</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#E2D3C0] font-medium">
                <Figma className="w-3.5 h-3.5 text-[#C88346]" />
                UI/UX Craft
              </div>
              <span className="text-[#C88346] font-bold">×</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FAF6F0] border border-[#E2D3C0] font-medium">
                <Compass className="w-3.5 h-3.5 text-[#C88346]" />
                Product Thinking
              </div>
            </div>

            {/* Actions & Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] hover:shadow-warm-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4 text-[#C88346]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#F7F2EA] text-[#2E1E14] border border-[#D2BBA0] hover:bg-[#EFE6DA] transition-all duration-200"
              >
                <Coffee className="w-4 h-4 text-[#C88346]" />
                <span>Let's Talk</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/RuthInTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0] text-[#463020] hover:text-[#2E1E14] hover:border-[#BA9B7B] transition-colors"
                  aria-label="GitHub Profile"
                  title="Ruth's GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/ruth-software-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0] text-[#463020] hover:text-[#2E1E14] hover:border-[#BA9B7B] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="Ruth's LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Coffee-Themed Code & Design Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative background blur ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C88346]/20 to-[#7F5E42]/20 rounded-3xl blur-xl -rotate-2 transform scale-95" />

            <div className="relative rounded-2xl bg-[#F7F2EA] border border-[#E2D3C0] p-5 sm:p-6 shadow-warm-lg space-y-4">
              
              {/* Card Header: Window buttons + Coffee Steam */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2D3C0]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E09A55]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#D2BBA0]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#9C7A5B]"></span>
                  <span className="ml-2 font-mono text-xs text-[#7F5E42]">ruth-workspace.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF6F0] text-[11px] font-medium text-[#61442E] border border-[#E2D3C0]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5D7E54] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5D7E54]"></span>
                  </span>
                  <span>Brewing Code</span>
                </div>
              </div>

              {/* Code Snippet in Warm Coffee Aesthetic */}
              <div className="rounded-xl bg-[#2E1E14] text-[#FAF6F0] p-4 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner-warm">
                <div className="text-[#BA9B7B]">// Ruth's Developer DNA</div>
                <div className="mt-1">
                  <span className="text-[#C88346]">const</span>{' '}
                  <span className="text-[#FAF6F0]">developer</span> = {'{'}
                </div>
                <div className="pl-4 text-[#E7D7C1]">
                  name: <span className="text-[#C88346]">'Ruth'</span>,
                </div>
                <div className="pl-4 text-[#E7D7C1]">
                  school: <span className="text-[#C88346]">'Addis Ababa University'</span>,
                </div>
                <div className="pl-4 text-[#E7D7C1]">
                  focus: <span className="text-[#C88346]">'Frontend × UI/UX × MERN'</span>,
                </div>
                <div className="pl-4 text-[#E7D7C1]">
                  ethiopianCoffee: <span className="text-[#E09A55]">true</span>,
                </div>
                <div className="pl-4 text-[#E7D7C1]">
                  motto: <span className="text-[#C88346]">'Build real things, learn by doing'</span>,
                </div>
                <div className="pl-4 text-[#E7D7C1]">
                  bridgeDesignAndCode: () =&gt; {'{'}
                </div>
                <div className="pl-8 text-[#9C7A5B]">
                  return <span className="text-[#C88346]">Figma.translateTo(React, Vue, Flutter);</span>
                </div>
                <div className="pl-4 text-[#E7D7C1]">{'}'}</div>
                <div>{'}'};</div>
              </div>

              {/* Mini Highlights Footer inside card */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0] text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2E1E14]">
                    <Figma className="w-3.5 h-3.5 text-[#C88346]" />
                    <span>Design Mind</span>
                  </div>
                  <p className="text-[11px] text-[#7F5E42] mt-1 leading-snug">
                    Figma auto-layout, wireframes, &amp; clean design tokens.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0] text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2E1E14]">
                    <Code2 className="w-3.5 h-3.5 text-[#C88346]" />
                    <span>Code Execution</span>
                  </div>
                  <p className="text-[11px] text-[#7F5E42] mt-1 leading-snug">
                    React, Vue, MERN stack &amp; Flutter mobile apps.
                  </p>
                </div>
              </div>

              {/* Ethiopian Buna Quote Callout */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#F4EBD9] to-[#EFE6DA] border border-[#D2BBA0] text-left">
                <div className="w-8 h-8 rounded-lg bg-[#C88346]/20 flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4 text-[#8C5326]" />
                </div>
                <div className="text-xs text-[#463020]">
                  <span className="font-semibold text-[#2E1E14]">Crafted in Addis Ababa: </span>
                  Inspired by the patience, warmth, and craft of Ethiopian coffee ceremonies.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
