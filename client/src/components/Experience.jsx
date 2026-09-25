import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FDFBF7] relative border-b border-[#E2D3C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F2EA] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5 text-[#C88346]" />
            Experience &amp; Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Learning through real development tasks.
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            Practical internships and university engineering experience where theory met production workflows, design sprints, and real users.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative text-left">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-[#E2D3C0]"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative md:pl-20 group"
            >
              {/* Coffee bean node icon on line */}
              <div className="hidden md:flex absolute left-5 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FAF6F0] border-2 border-[#C88346] items-center justify-center text-[#2E1E14] shadow-sm group-hover:scale-110 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C88346]"></span>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF6F0] border border-[#E2D3C0] hover:border-[#BA9B7B] hover:shadow-warm transition-all duration-200 space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E2D3C0]">
                  <div>
                    <span className="text-xs font-mono font-medium text-[#C88346] tracking-wide uppercase">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#2E1E14] mt-0.5">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-[#7F5E42]">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-[#BA9B7B]">
                    <div className="flex items-center gap-1.5 font-mono text-[#61442E]">
                      <Calendar className="w-3.5 h-3.5 text-[#C88346]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#7F5E42]">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#61442E] leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#463020]">
                      <CheckCircle2 className="w-4 h-4 text-[#5D7E54] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-[#E2D3C0] flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F7F2EA] text-[#61442E] border border-[#E2D3C0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
