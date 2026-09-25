import React, { useState, useEffect } from 'react';
import { Sparkles, Play, RefreshCw, Flame, Check } from 'lucide-react';

/**
 * ☕ CoffeePourVisual
 * Interactive Ethiopian Jebena-to-Cini pouring brown liquid coffee animation.
 * Features realistic fluid stream physics, crema ripples, splash droplets, and steam.
 */
export default function CoffeePourVisual({ selectedRoast, onSelectRoast, roasts = [] }) {
  const [isPouring, setIsPouring] = useState(true);
  const [fillLevel, setFillLevel] = useState(72); // percentage in cup
  const [burstCount, setBurstCount] = useState(0);

  // Trigger extra pour burst when roast changes
  useEffect(() => {
    setIsPouring(true);
    setFillLevel((prev) => Math.min(90, prev + 8));
    const timer = setTimeout(() => {
      setFillLevel(72);
    }, 3200);
    return () => clearTimeout(timer);
  }, [selectedRoast]);

  const handleManualPour = () => {
    setIsPouring(true);
    setFillLevel(88);
    setBurstCount((c) => c + 1);
    setTimeout(() => {
      setFillLevel(72);
    }, 2800);
  };

  // Derive dynamic liquid color tones from the roast
  const roastColor = selectedRoast?.color || '#C88346';
  const roastName = selectedRoast?.name || 'Yirgacheffe';

  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#2A1D16] via-[#1E130D] to-[#160D08] border border-[#523826] text-[#FAF6F0] p-5 sm:p-7 shadow-2xl relative overflow-hidden text-left">
      
      {/* Ambient Warm Underglow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: roastColor }}
      />
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#C88346]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header & Live Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#3D291C]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#3D291C] border border-[#6B472F] flex items-center justify-center text-sm shadow-inner">
            ☕
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#FBF6EE] tracking-tight">
                Traditional Buna Pour
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#3D291C] text-[#E09A55] border border-[#5A3B26]">
                የኢትዮጵያ ጀበና
              </span>
            </div>
            <p className="text-xs text-[#BA9B7B]">
              Artisanal Ethiopian clay pot pouring directly into the traditional ceramic <em className="text-[#FAF6F0]">Cini</em> cup.
            </p>
          </div>
        </div>

        {/* Manual Pour / Refill Button */}
        <button
          type="button"
          onClick={handleManualPour}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3D291C] hover:bg-[#523826] border border-[#6B472F] text-xs font-semibold text-[#F7F2EA] hover:text-white transition-all shadow-sm active:scale-95"
          title="Pour fresh stream"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#E09A55] ${isPouring ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
          <span>Top Up Cup</span>
        </button>
      </div>

      {/* ☕ The Handcrafted Pouring Canvas (SVG) */}
      <div className="relative z-10 my-2 flex justify-center items-center">
        <svg
          viewBox="0 0 460 260"
          className="w-full max-w-[480px] h-auto select-none overflow-visible"
        >
          <defs>
            {/* Dark clay gradient for traditional Jebena */}
            <linearGradient id="jebenaBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A3428" />
              <stop offset="35%" stopColor="#2A1B14" />
              <stop offset="70%" stopColor="#1C110C" />
              <stop offset="100%" stopColor="#0F0906" />
            </linearGradient>

            <linearGradient id="jebenaHighlight" x1="20%" y1="20%" x2="80%" y2="80%">
              <stop offset="0%" stopColor="#7F563B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4A3428" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#140D09" stopOpacity="0" />
            </linearGradient>

            {/* Clay pot neck & rim */}
            <linearGradient id="jebenaNeckGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A1B14" />
              <stop offset="40%" stopColor="#4D3527" />
              <stop offset="100%" stopColor="#1A110C" />
            </linearGradient>

            {/* Wicker Stand (Wekebia/Matat) */}
            <linearGradient id="strawStandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B37D44" />
              <stop offset="50%" stopColor="#875727" />
              <stop offset="100%" stopColor="#4A2E12" />
            </linearGradient>

            {/* Flowing Coffee Stream Gradients */}
            <linearGradient id="coffeeStreamOuter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#301509" />
              <stop offset="50%" stopColor="#5E2C15" />
              <stop offset="100%" stopColor="#35170B" />
            </linearGradient>

            <linearGradient id="coffeeStreamCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E29447" />
              <stop offset="40%" stopColor="#A85724" />
              <stop offset="80%" stopColor="#D98136" />
              <stop offset="100%" stopColor="#6E3314" />
            </linearGradient>

            {/* Cup Liquid Gradient */}
            <linearGradient id="cupLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9E5629" />
              <stop offset="25%" stopColor="#663318" />
              <stop offset="70%" stopColor="#3B1C0D" />
              <stop offset="100%" stopColor="#200E06" />
            </linearGradient>

            {/* Golden Crema froth layer */}
            <linearGradient id="cremaFrothGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C48446" />
              <stop offset="25%" stopColor="#E6AC6E" />
              <stop offset="55%" stopColor="#D69755" />
              <stop offset="85%" stopColor="#F0C38E" />
              <stop offset="100%" stopColor="#B87638" />
            </linearGradient>

            {/* Porcelain Cini Ceramic */}
            <linearGradient id="ciniPorcelain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F7EFE3" />
              <stop offset="100%" stopColor="#E6D7C3" />
            </linearGradient>

            {/* Interior mask for liquid in the cup */}
            <clipPath id="ciniInteriorClip">
              {/* Cup bowl interior shape */}
              <path d="M 246,165 L 253,222 C 255,236 295,236 297,222 L 304,165 Z" />
            </clipPath>

            {/* Glow Filter for rich hot liquid */}
            <filter id="liquidGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ============================================================== */}
          {/* 1. WEKEBIA (Traditional Woven Straw Stand for the Round Pot)   */}
          {/* ============================================================== */}
          <g transform="translate(100, 192)">
            <ellipse cx="0" cy="10" rx="46" ry="12" fill="#0A0604" opacity="0.6" />
            <ellipse cx="0" cy="4" rx="42" ry="10" fill="url(#strawStandGrad)" />
            <ellipse cx="0" cy="2" rx="35" ry="7" fill="#69401B" />
            {/* Wicker cross hatchings */}
            <path d="M -30,2 L -20,8 M -15,0 L -5,9 M 0,0 L 10,9 M 15,1 L 25,8 M -20,1 L -30,8 M -5,0 L -15,9 M 10,0 L 0,9 M 25,1 L 15,8" 
                  stroke="#D4A068" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
          </g>

          {/* ============================================================== */}
          {/* 2. THE JEBENA (Ethiopian Clay Coffee Pot) - Tilted for Pouring  */}
          {/* ============================================================== */}
          <g className={isPouring ? 'animate-jebena-pour' : ''} style={{ transformOrigin: '100px 150px' }}>
            
            {/* Handle on the back */}
            <path
              d="M 62,118 C 30,116 28,170 65,178"
              fill="none"
              stroke="url(#jebenaBodyGrad)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M 62,120 C 35,120 33,168 64,175"
              fill="none"
              stroke="#5E3E2D"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Round Pot Belly (Spherical body) */}
            <circle cx="102" cy="154" r="44" fill="url(#jebenaBodyGrad)" />
            <ellipse cx="94" cy="142" rx="32" ry="24" fill="url(#jebenaHighlight)" />

            {/* Traditional Etched Geometric Tribal Bands on Clay */}
            <path
              d="M 72,154 C 82,170 120,170 134,154"
              fill="none"
              stroke="#C88346"
              strokeWidth="1.6"
              strokeDasharray="3 3"
              opacity="0.6"
            />
            <path
              d="M 76,146 C 84,160 118,160 128,146"
              fill="none"
              stroke="#BA9B7B"
              strokeWidth="1.2"
              opacity="0.4"
            />

            {/* Traditional Ethiopian Clay Ring/Collar */}
            <ellipse cx="104" cy="116" rx="16" ry="6" fill="#1C110C" />
            <ellipse cx="104" cy="115" rx="14" ry="4" fill="#3D291C" />

            {/* Tall Elegant Slender Neck */}
            <path
              d="M 94,116 L 98,54 C 98,46 116,46 116,54 L 114,116 Z"
              fill="url(#jebenaNeckGrad)"
            />
            {/* Top Lip / Spout Crown */}
            <ellipse cx="107" cy="48" rx="11" ry="5" fill="#4D3527" />
            <ellipse cx="107" cy="47" rx="8" ry="3" fill="#140D09" />
            {/* Straw stopper cork (Korki) sitting at the neck opening */}
            <path d="M 103,46 C 103,36 111,36 111,46 Z" fill="#B37D44" />

            {/* Curved Pouring Spout (Angled downward toward the Cini) */}
            <path
              d="M 126,140 C 142,136 156,120 162,106 C 164,101 170,101 170,106 C 166,126 148,150 124,154 Z"
              fill="url(#jebenaBodyGrad)"
            />
            {/* Spout Tip Opening */}
            <ellipse cx="165" cy="104" rx="4" ry="2.5" fill="#140D09" />
            {/* Liquid glimmer at the mouth of the spout */}
            <circle cx="166" cy="105" r="2.5" fill="#E09A55" opacity="0.9" />
          </g>

          {/* ============================================================== */}
          {/* 3. POURING BROWN LIQUID STREAM (Rich flowing coffee)           */}
          {/* ============================================================== */}
          {isPouring && (
            <g>
              {/* Outer rich dark roast liquid stream */}
              <path
                d="M 166,105 C 196,125 242,142 274,188"
                fill="none"
                stroke="url(#coffeeStreamOuter)"
                strokeWidth="7.5"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Inner glowing amber core (with flow animation) */}
              <path
                d="M 166,105 C 196,125 242,142 274,188"
                fill="none"
                stroke="url(#coffeeStreamCore)"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-stream-flow"
                filter="url(#liquidGlow)"
              />

              {/* Ultra-gloss surface highlight (thin liquid shine) */}
              <path
                d="M 167,105 C 197,126 240,143 273,186"
                fill="none"
                stroke="#FFF2DC"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.65"
              />

              {/* Trailing micro-droplet along the stream */}
              <circle cx="218" cy="138" r="1.8" fill="#F0C38E" opacity="0.75" />
              <circle cx="248" cy="162" r="1.5" fill="#E09A55" opacity="0.8" />

              {/* Splash Droplets jumping up at stream impact */}
              <g transform="translate(274, 188)">
                <circle cx="0" cy="0" r="2.8" fill="#E6A868" className="animate-splash-1" />
                <circle cx="0" cy="0" r="2.2" fill="#BA7A3D" className="animate-splash-2" />
                <circle cx="-1" cy="0" r="1.8" fill="#FFF2DC" className="animate-splash-1" style={{ animationDelay: '0.6s' }} />

                {/* Expanding Surface Ripples where liquid enters */}
                <ellipse cx="0" cy="0" rx="3" ry="1.2" fill="none" stroke="#E6AC6E" strokeWidth="1.2" className="animate-ripple" />
                <ellipse cx="0" cy="0" rx="3" ry="1.2" fill="none" stroke="#8A4822" strokeWidth="1" className="animate-ripple" style={{ animationDelay: '0.8s' }} />
              </g>
            </g>
          )}

          {/* ============================================================== */}
          {/* 4. THE CINI CUP (Traditional Ethiopian Ceramic Cup & Saucer)   */}
          {/* ============================================================== */}
          <g transform="translate(0, 0)">
            
            {/* Saucer / Plate underneath Cini */}
            <ellipse cx="275" cy="238" rx="42" ry="9" fill="#0A0604" opacity="0.5" />
            <ellipse cx="275" cy="234" rx="40" ry="8" fill="url(#ciniPorcelain)" />
            <ellipse cx="275" cy="233" rx="32" ry="5.5" fill="#EBE0CF" />
            {/* Saucer terracotta decorative ring */}
            <ellipse cx="275" cy="233" rx="36" ry="6.5" fill="none" stroke="#C88346" strokeWidth="1" opacity="0.6" />

            {/* Cup Body Base Shadow */}
            <ellipse cx="275" cy="226" rx="22" ry="6" fill="#140D09" opacity="0.3" />

            {/* Cup Outer Porcelain Shell */}
            <path
              d="M 242,162 L 251,222 C 253,238 297,238 299,222 L 308,162 Z"
              fill="url(#ciniPorcelain)"
              stroke="#DBC8B0"
              strokeWidth="1.5"
            />

            {/* Traditional Ethiopian Motif Bands on Cup Outer Wall */}
            <path
              d="M 246,182 C 260,192 290,192 304,182"
              fill="none"
              stroke="#C88346"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 248,190 C 260,198 290,198 302,190"
              fill="none"
              stroke="#7F563B"
              strokeWidth="1.2"
              strokeDasharray="2 2"
            />
            {/* Little Ethiopian cross/star motif in center of cup */}
            <g transform="translate(275, 196)" opacity="0.7">
              <path d="M 0,-4 L 0,4 M -4,0 L 4,0" stroke="#C88346" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="0" cy="0" r="1.2" fill="#E09A55" />
            </g>

            {/* ============================================================ */}
            {/* LIQUID COFFEE INSIDE THE CUP (Masked to cup interior)        */}
            {/* ============================================================ */}
            <g clipPath="url(#ciniInteriorClip)">
              {/* Deep dark base coffee volume */}
              <rect
                x="240"
                y={225 - (fillLevel * 0.72)}
                width="70"
                height="90"
                fill="url(#cupLiquidGrad)"
                className="transition-all duration-700 ease-out"
              />

              {/* Surface Wave ripple oscillating horizontally */}
              <g
                transform={`translate(0, ${225 - (fillLevel * 0.72)})`}
                className="animate-liquid-wave transition-all duration-700"
              >
                <path
                  d="M 235,0 Q 255,-3.5 275,0 Q 295,3.5 315,0 L 315,20 L 235,20 Z"
                  fill="url(#cupLiquidGrad)"
                  opacity="0.9"
                />
              </g>

              {/* Golden Hazelnut Crema Foam on top */}
              <g
                transform={`translate(0, ${225 - (fillLevel * 0.72)})`}
                className="transition-all duration-700"
              >
                <ellipse cx="275" cy="0" rx="27" ry="5.5" fill="url(#cremaFrothGrad)" />
                {/* Crema swirling highlights */}
                <ellipse cx="270" cy="-0.5" rx="18" ry="3.5" fill="#F5CF9E" opacity="0.6" />
                <circle cx="282" cy="1" r="1.5" fill="#FFF2DC" opacity="0.8" />
                <circle cx="264" cy="0" r="1.2" fill="#D68D45" opacity="0.9" />
                <circle cx="273" cy="-1.5" r="1" fill="#FFF" opacity="0.7" />
              </g>
            </g>

            {/* Cup Rim Edge & Inner Shadow */}
            <ellipse cx="275" cy="162" rx="33" ry="8" fill="none" stroke="#E2D0B8" strokeWidth="2.5" />
            <ellipse cx="275" cy="162" rx="31.5" ry="6.5" fill="none" stroke="#9E7858" strokeWidth="1" opacity="0.5" />

            {/* ============================================================ */}
            {/* 5. AROMATIC STEAM RISING FROM HOT CUP                        */}
            {/* ============================================================ */}
            <g opacity="0.75" pointerEvents="none">
              {/* Steam wisp 1 */}
              <path
                d="M 268,155 C 262,138 274,124 266,108 C 260,94 270,82 264,68"
                fill="none"
                stroke="#FAF6F0"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-steam-1"
                opacity="0.5"
              />
              {/* Steam wisp 2 (center) */}
              <path
                d="M 276,153 C 282,135 272,120 280,102 C 286,88 276,74 282,58"
                fill="none"
                stroke="#FAF6F0"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-steam-2"
                opacity="0.6"
              />
              {/* Steam wisp 3 */}
              <path
                d="M 284,156 C 290,140 282,128 290,114 C 296,102 288,90 292,76"
                fill="none"
                stroke="#FAF6F0"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="animate-steam-3"
                opacity="0.4"
              />
            </g>

          </g>
        </svg>
      </div>

      {/* Interactive Tasting Notes & Roast Selector Pill Bar */}
      <div className="relative z-10 pt-3 border-t border-[#3D291C]/70 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          
          {/* Active Roast Capsule */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: roastColor }} />
            <span className="text-[#D2BBA0] font-mono">Pouring Origin:</span>
            <strong className="text-[#FAF6F0] font-serif text-sm tracking-wide">
              {selectedRoast?.name} ({selectedRoast?.region || 'Ethiopia'})
            </strong>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#BA9B7B] font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#E09A55]" />
            <span>{selectedRoast?.vibe || 'Creative coding and design flow'}</span>
          </div>
        </div>

        {/* Quick Roast Selector Chips */}
        {roasts && roasts.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {roasts.map((r) => {
              const isCurrent = r.name === selectedRoast?.name;
              return (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => onSelectRoast && onSelectRoast(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                    isCurrent
                      ? 'bg-[#C88346] text-[#FAF6F0] shadow-md shadow-[#C88346]/20 ring-1 ring-[#FAF6F0]/40'
                      : 'bg-[#2E1E14] text-[#D2BBA0] hover:bg-[#3D291C] hover:text-[#FAF6F0] border border-[#523826]'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: r.color || '#C88346' }}
                  />
                  <span>{r.name}</span>
                  {isCurrent && <Check className="w-3 h-3 text-[#FAF6F0]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
