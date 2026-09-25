import React, { useState } from 'react';
import { Figma, Code2, Sparkles, Layers, Sliders, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DesignDev() {
  const [activeMode, setActiveMode] = useState('both'); // 'design', 'code', 'both'

  const designTokens = [
    { name: 'espresso-primary', hex: '#2E1E14', role: 'Headings, primary buttons, deep contrast' },
    { name: 'mocha-surface', hex: '#463020', role: 'Card outlines, secondary interactive states' },
    { name: 'caramel-accent', hex: '#C88346', role: 'Focus rings, active states, key CTAs' },
    { name: 'crema-canvas', hex: '#FDFBF7', role: 'Soft warm paper canvas, glare-free background' },
    { name: 'steamed-milk', hex: '#F7F2EA', role: 'Elevated card containers, chip backgrounds' },
  ];

  return (
    <section id="design-dev" className="py-24 bg-[#F7F2EA] border-b border-[#E2D3C0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C88346]" />
            The Intersection
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight">
            "I don't just write the interface. <br />
            <span className="text-[#7F5E42] italic">I think about the interface."</span>
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            A developer who understands typography, spacing systems, and ergonomic user journeys saves teams dozens of rework hours between Figma handoffs and production code.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] shadow-sm">
            <button
              onClick={() => setActiveMode('both')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeMode === 'both'
                  ? 'bg-[#2E1E14] text-[#FAF6F0] shadow-warm'
                  : 'text-[#61442E] hover:text-[#2E1E14]'
              }`}
            >
              Side-by-Side (Figma × Code)
            </button>
            <button
              onClick={() => setActiveMode('design')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeMode === 'design'
                  ? 'bg-[#2E1E14] text-[#FAF6F0] shadow-warm'
                  : 'text-[#61442E] hover:text-[#2E1E14]'
              }`}
            >
              <Figma className="w-3.5 h-3.5 text-[#C88346]" />
              <span>Design Thinking</span>
            </button>
            <button
              onClick={() => setActiveMode('code')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeMode === 'code'
                  ? 'bg-[#2E1E14] text-[#FAF6F0] shadow-warm'
                  : 'text-[#61442E] hover:text-[#2E1E14]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-[#C88346]" />
              <span>Implementation</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Phase 1: The Design (Figma) */}
          {(activeMode === 'both' || activeMode === 'design') && (
            <div className={`${activeMode === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col rounded-3xl bg-[#FAF6F0] border border-[#E2D3C0] shadow-warm p-6 sm:p-7 space-y-5`}>
              <div className="flex items-center justify-between pb-3 border-b border-[#E2D3C0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#C88346]/20 flex items-center justify-center text-[#C88346]">
                    <Figma className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2E1E14]">Phase 1: In Figma</h3>
                    <p className="text-[11px] text-[#7F5E42]">Information Architecture &amp; Design Tokens</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EFE6DA] text-[#61442E]">
                  Auto-Layout &amp; Tokens
                </span>
              </div>

              {/* Visual Figma Mockup Frame */}
              <div className="p-4 rounded-2xl bg-[#F7F2EA] border border-[#E2D3C0] space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#7F5E42]">
                  <span className="font-mono">Frame: BakeryItemCard / State: Hover</span>
                  <span className="font-mono text-[#C88346]">w: 320px | pad: 16px</span>
                </div>

                {/* Simulated Figma UI Component */}
                <div className="p-4 rounded-xl bg-white border border-[#D2BBA0] shadow-sm relative group cursor-pointer">
                  {/* Figma Bounding Box Highlight */}
                  <div className="absolute inset-0 border-2 border-dashed border-[#C88346]/40 rounded-xl pointer-events-none"></div>
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#C88346] tracking-wider">Artisanal Bake</span>
                      <div className="font-serif font-bold text-sm text-[#2E1E14]">Ethiopian Spiced Cardamom Bun</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#2E1E14]">$4.50</span>
                  </div>
                  <p className="text-xs text-[#7F5E42] mt-1.5">
                    Infused with organic Korarima cardamom &amp; raw cane sugar.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-[#5D7E54] font-medium">In Stock (Freshly Baked)</span>
                    <button className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#2E1E14] text-[#FAF6F0]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Design Tokens List */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#2E1E14] uppercase tracking-wider">
                  Color &amp; Contrast Tokens
                </div>
                <div className="space-y-1.5">
                  {designTokens.map((t) => (
                    <div key={t.name} className="flex items-center justify-between p-2 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border border-black/10 shrink-0" style={{ backgroundColor: t.hex }}></span>
                        <span className="font-mono font-medium text-[#2E1E14]">{t.name}</span>
                      </div>
                      <span className="text-[11px] text-[#7F5E42]">{t.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Phase 2: The Implementation (Code) */}
          {(activeMode === 'both' || activeMode === 'code') && (
            <div className={`${activeMode === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col rounded-3xl bg-[#2E1E14] text-[#FAF6F0] border border-[#463020] shadow-warm p-6 sm:p-7 space-y-5`}>
              <div className="flex items-center justify-between pb-3 border-b border-[#463020]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#C88346]/30 flex items-center justify-center text-[#E09A55]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FAF6F0]">Phase 2: In Code</h3>
                    <p className="text-[11px] text-[#BA9B7B]">Reactive State &amp; Clean Markup</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#463020] text-[#E7D7C1]">
                  Vue / React + Tailwind
                </span>
              </div>

              {/* Code Snippet */}
              <div className="p-4 rounded-2xl bg-[#1A100A] border border-[#463020] font-mono text-xs leading-relaxed overflow-x-auto text-[#E7D7C1]">
                <div className="text-[#BA9B7B]">// Translating Figma token to Vue 3 / React component</div>
                <div>
                  <span className="text-[#C88346]">export function</span>{' '}
                  <span className="text-[#FAF6F0]">BakeryCard</span>({'{'} item, onAddToCart {'}'}) {'{'}
                </div>
                <div className="pl-4 text-[#BA9B7B]">const cartStore = useCartStore();</div>
                <div className="pl-4 mt-1">
                  <span className="text-[#C88346]">return</span> (
                </div>
                <div className="pl-6 text-[#E09A55]">
                  &lt;<span className="text-[#FAF6F0]">article</span> className="p-4 rounded-2xl bg-white border border-[#D2BBA0] hover:shadow-warm transition"&gt;
                </div>
                <div className="pl-8 text-[#FAF6F0]">
                  &lt;h3 className="font-serif font-bold text-[#2E1E14]"&gt;{'{'} item.name {'}'}&lt;/h3&gt;
                </div>
                <div className="pl-8 text-[#FAF6F0]">
                  &lt;button onClick={'() => cartStore.add(item)'} className="px-3 py-1 bg-[#2E1E14] text-white rounded-lg hover:bg-[#463020]"&gt;
                </div>
                <div className="pl-10 text-[#E7D7C1]">Add to Cart</div>
                <div className="pl-8 text-[#FAF6F0]">&lt;/button&gt;</div>
                <div className="pl-6 text-[#E09A55]">&lt;/<span className="text-[#FAF6F0]">article</span>&gt;</div>
                <div className="pl-4">);</div>
                <div>{'}'}</div>
              </div>

              {/* Principles checked */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-[#FAF6F0] uppercase tracking-wider">
                  Guaranteed in Implementation:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#463020]/60 border border-[#7F5E42]/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5D7E54]" />
                    <span>Exact Figma Spacing &amp; Radii</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#463020]/60 border border-[#7F5E42]/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5D7E54]" />
                    <span>WCAG AA Color Contrast</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#463020]/60 border border-[#7F5E42]/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5D7E54]" />
                    <span>Full Keyboard Accessibility</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#463020]/60 border border-[#7F5E42]/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5D7E54]" />
                    <span>Mobile Touch Targets (&ge;44px)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
