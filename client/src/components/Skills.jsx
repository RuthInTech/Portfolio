import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Figma as FigmaIcon, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  Layers,
  Info
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend & MERN', icon: Database },
    { id: 'mobile', label: 'Mobile & Services', icon: Smartphone },
    { id: 'design', label: 'UI/UX & Design', icon: FigmaIcon },
    { id: 'tools', label: 'Tools & Workflow', icon: Wrench },
  ];

  // Compile list based on active tab
  const getDisplaySkills = () => {
    if (activeTab === 'all') {
      return [
        ...skillsData.frontend.map((s) => ({ ...s, category: 'Frontend' })),
        ...skillsData.backend.map((s) => ({ ...s, category: 'Backend' })),
        ...skillsData.mobile.map((s) => ({ ...s, category: 'Mobile' })),
        ...skillsData.design.map((s) => ({ ...s, category: 'Design' })),
        ...skillsData.tools.map((s) => ({ ...s, category: 'Tools' })),
      ];
    }
    return skillsData[activeTab].map((s) => ({ ...s, category: activeTab }));
  };

  const currentSkills = getDisplaySkills();

  return (
    <section id="skills" className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F2EA] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C88346]" />
            Technical &amp; Design Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Tools I use to turn ideas into interfaces.
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            Organized honestly by how I build. No arbitrary 99% progress bars — just the technologies I actively use, experiment with, and continue to master.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSelectedSkill(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2E1E14] text-[#FAF6F0] shadow-warm scale-105'
                    : 'bg-[#F7F2EA] text-[#61442E] border border-[#E2D3C0] hover:bg-[#EFE6DA] hover:text-[#2E1E14]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C88346]' : 'text-[#7F5E42]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
          {currentSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#FAF6F0] border-[#C88346] shadow-warm ring-2 ring-[#C88346]/20'
                    : 'bg-[#F7F2EA] border-[#E2D3C0] hover:bg-[#FAF6F0] hover:border-[#BA9B7B] hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-semibold text-sm text-[#2E1E14]">
                    {skill.name}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#EFE6DA] text-[#61442E] shrink-0 border border-[#E2D3C0]">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#7F5E42] line-clamp-2 leading-relaxed">
                  {skill.desc}
                </p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#E2D3C0]/60 text-[11px] text-[#BA9B7B]">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-[#C88346] font-medium hover:underline flex items-center gap-1">
                    Details <Info className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Selected Skill Drawer / Details Callout */}
        {selectedSkill && (
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#FAF6F0] to-[#F7F2EA] border-2 border-[#C88346] shadow-warm text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E2D3C0]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#C88346]"></span>
                <h4 className="text-base font-bold text-[#2E1E14]">{selectedSkill.name}</h4>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EFE6DA] text-[#61442E]">
                  Role: {selectedSkill.level}
                </span>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs text-[#7F5E42] hover:text-[#2E1E14] self-end sm:self-auto underline"
              >
                Close preview
              </button>
            </div>
            <p className="text-sm text-[#463020] mt-3">
              <strong className="text-[#2E1E14]">How Ruth uses {selectedSkill.name}:</strong>{' '}
              {selectedSkill.desc}
            </p>
          </div>
        )}

        {/* Learning Mindset Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7F2EA] border border-[#E2D3C0] flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold text-[#2E1E14]">
              <Flame className="w-4 h-4 text-[#C88346]" />
              <span>Honest Learning Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm text-[#61442E]">
              "I don't claim to be an expert in everything. I am an engineer who loves learning by getting my hands dirty, writing tests, checking UI edge-cases, and taking feedback."
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] transition-colors"
          >
            See Skills in Action →
          </a>
        </div>

      </div>
    </section>
  );
}
