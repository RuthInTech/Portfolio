import React from 'react';
import { BookOpen, Sparkles, Flame, ArrowUpRight, Cpu, Layers, Compass, Coffee } from 'lucide-react';

export default function CurrentlyLearning() {
  const learningTopics = [
    {
      title: 'Advanced React & MERN Architecture',
      category: 'Full-Stack Engineering',
      desc: 'Diving deep into custom hooks, memoization patterns, server state caching, and scalable Node/Express middleware structures.',
      status: 'In Deep Dive',
      vibe: 'Active Daily',
    },
    {
      title: 'Design Systems & Token Automation',
      category: 'UI/UX & Figma',
      desc: 'Structuring Figma auto-layout components and translating design tokens directly into Tailwind CSS presets and CSS custom properties.',
      status: 'Iterating',
      vibe: 'Design Craft',
    },
    {
      title: 'Backend Scalability & MongoDB Aggregations',
      category: 'Database Engineering',
      desc: 'Mastering multi-stage aggregation pipelines in MongoDB, indexing strategies, and database connection pooling in serverless environments.',
      status: 'Hands-on Labs',
      vibe: 'Data Modeling',
    },
    {
      title: 'Micro-Interactions & Accessible Motion',
      category: 'Frontend Polish',
      desc: 'Exploring CSS transitions and reduced-motion considerations to create interfaces that feel tactile, responsive, and delight without distraction.',
      status: 'Exploratory',
      vibe: 'User Experience',
    },
  ];

  return (
    <section className="py-20 bg-[#F7F2EA] border-b border-[#E2D3C0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Flame className="w-3.5 h-3.5 text-[#C88346]" />
            Continuous Growth
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Currently learning &amp; expanding.
          </h2>
          <p className="text-sm sm:text-base text-[#61442E]">
            A developer who stops learning stops growing. Here is what I am actively digging into this semester at AAU and in my independent project time.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-5xl mx-auto">
          {learningTopics.map((topic, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] hover:border-[#BA9B7B] transition-all duration-200 space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EFE6DA] text-[#61442E] font-medium">
                  {topic.category}
                </span>
                <span className="text-xs font-mono font-semibold text-[#C88346] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#C88346] animate-ping"></span>
                  {topic.status}
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg text-[#2E1E14]">
                {topic.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#61442E] leading-relaxed">
                {topic.desc}
              </p>

              <div className="pt-2 border-t border-[#E2D3C0] flex items-center justify-between text-xs text-[#7F5E42]">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#C88346]" />
                  <span>{topic.vibe}</span>
                </div>
                <span className="text-[11px] font-mono text-[#BA9B7B]">Building projects to test</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
