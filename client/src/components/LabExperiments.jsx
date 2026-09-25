import React from 'react';
import { FlaskConical, Terminal, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';
import { labExperiments } from '../data/portfolioData';

export default function LabExperiments() {
  return (
    <section className="py-20 bg-[#FDFBF7] relative border-b border-[#E2D3C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F2EA] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-[#C88346]" />
            Ruth's Digital Lab
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Current experiments &amp; work in progress.
          </h2>
          <p className="text-sm text-[#61442E]">
            Not every repository is a polished product. These are active learning experiments where I test backend architectures, state nuances, and design systems.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {labExperiments.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] hover:border-[#BA9B7B] transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#EFE6DA] text-[#61442E] font-medium">
                    {exp.type}
                  </span>
                  <span className="text-[10px] font-mono text-[#C88346] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C88346] animate-pulse"></span>
                    {exp.status}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-[#2E1E14]">
                  {exp.title}
                </h3>

                <p className="text-xs text-[#61442E] leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2D3C0]/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-[#7F5E42] bg-[#F7F2EA] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <Terminal className="w-3.5 h-3.5 text-[#BA9B7B]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
