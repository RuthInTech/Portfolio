import React, { useEffect, useState, useRef } from 'react';

/**
 * ☕ CoffeeCursor
 * Fluid coffee-themed cursor follower.
 * Features an organic floating Ethiopian coffee bean with trailing aroma droplets,
 * hovering expansion effects on buttons, and click splash ripples.
 */
export default function CoffeeCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [splashes, setSplashes] = useState([]);

  // Mouse target positions
  const mouseRef = useRef({ x: -100, y: -100 });
  // Follower smoothed position (for lerp)
  const posRef = useRef({ x: -100, y: -100 });
  // Trailing particles history
  const trailRef = useRef([
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
  ]);

  const followerRef = useRef(null);
  const trailElementsRef = useRef([]);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/trackpad), skip touch screens
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setMounted(true);

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = Boolean(
        target &&
          (target.closest('a') ||
            target.closest('button') ||
            target.closest('input') ||
            target.closest('textarea') ||
            target.closest('select') ||
            target.closest('[role="button"]') ||
            target.closest('.interactive-hover'))
      );
      setIsHovering(isInteractive);
    };

    const onMouseDown = (e) => {
      setIsClicking(true);
      // Create splash droplet effect at click position
      const newSplash = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setSplashes((prev) => [...prev.slice(-3), newSplash]);
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop using lerp (linear interpolation)
    let animationFrameId;
    const animate = () => {
      // Primary follower lerp
      const factor = 0.22;
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * factor;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * factor;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      // Update trail positions with staggered trailing spring
      const trail = trailRef.current;
      trail[0].x += (posRef.current.x - trail[0].x) * 0.35;
      trail[0].y += (posRef.current.y - trail[0].y) * 0.35;

      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.3;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.3;
      }

      trailElementsRef.current.forEach((el, index) => {
        if (el && trail[index]) {
          el.style.transform = `translate3d(${trail[index].x}px, ${trail[index].y}px, 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [visible]);

  // Clean up splash effects after animation completes
  useEffect(() => {
    if (splashes.length === 0) return;
    const timer = setTimeout(() => {
      setSplashes((prev) => prev.slice(1));
    }, 700);
    return () => clearTimeout(timer);
  }, [splashes]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Trailing Aroma Droplets (delicate coffee drops floating behind) */}
      {trailRef.current.map((_, index) => {
        const sizes = [7, 5, 4, 3];
        const opacities = [0.45, 0.35, 0.22, 0.12];
        const size = sizes[index] || 4;

        return (
          <div
            key={index}
            ref={(el) => (trailElementsRef.current[index] = el)}
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none will-change-transform"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: index % 2 === 0 ? '#C88346' : '#7F5E42',
              opacity: opacities[index],
              boxShadow: '0 0 6px rgba(200, 131, 70, 0.5)',
            }}
          />
        );
      })}

      {/* 2. Primary Follower: Handcrafted Roasted Coffee Bean & Aroma Halo */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <div
          className={`relative transition-transform duration-200 ease-out flex items-center justify-center ${
            isClicking
              ? 'scale-75'
              : isHovering
              ? 'scale-125'
              : 'scale-100'
          }`}
        >
          {/* Subtle warm amber aroma halo */}
          <div
            className={`absolute rounded-full transition-all duration-300 ${
              isHovering
                ? 'w-10 h-10 bg-[#C88346]/25 blur-md'
                : 'w-7 h-7 bg-[#C88346]/15 blur-sm'
            }`}
          />

          {/* Steam wisps rising above the coffee bean */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5 opacity-60">
            <span className="w-0.5 h-2 rounded-full bg-[#E2D3C0] animate-steam-1 block" />
            <span className="w-0.5 h-2.5 rounded-full bg-[#E2D3C0] animate-steam-2 block" />
          </div>

          {/* Handcrafted Coffee Bean SVG */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className="drop-shadow-[0_2px_4px_rgba(46,30,20,0.35)] -rotate-12 transition-transform duration-300"
          >
            <defs>
              <linearGradient id="beanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5A351E" />
                <stop offset="50%" stopColor="#3A1F10" />
                <stop offset="100%" stopColor="#241208" />
              </linearGradient>

              <linearGradient id="beanCrease" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C88346" />
                <stop offset="50%" stopColor="#8A4822" />
                <stop offset="100%" stopColor="#1C0E06" />
              </linearGradient>
            </defs>

            {/* Roasted Bean Outer Body (Organic oval bean shape) */}
            <path
              d="M 12,2 C 17,2 21,6 21,12 C 21,18 17,22 12,22 C 7,22 3,18 3,12 C 3,6 7,2 12,2 Z"
              fill="url(#beanGradient)"
              stroke="#6E4024"
              strokeWidth="0.8"
            />

            {/* Warm highlight curve on top-left of bean */}
            <path
              d="M 8,5 C 6,7 5,10 5,13"
              fill="none"
              stroke="#D49156"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Signature S-shaped center crease of the coffee bean */}
            <path
              d="M 12,4 C 11,8 14,11 12,14 C 10,17 13,20 12,20"
              fill="none"
              stroke="url(#beanCrease)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* 3. Click Splash Droplets & Ripple Rings */}
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ left: splash.x, top: splash.y }}
        >
          {/* Expanding coffee ripple ring */}
          <div className="w-8 h-8 rounded-full border-2 border-[#C88346] -translate-x-1/2 -translate-y-1/2 animate-ping opacity-60" />
          
          {/* Micro splash beads */}
          <div className="absolute -top-3 left-1 w-1.5 h-1.5 rounded-full bg-[#E09A55] animate-bounce" />
          <div className="absolute top-2 -right-3 w-1.5 h-1.5 rounded-full bg-[#A85A26] animate-bounce" style={{ animationDelay: '0.1s' }} />
        </div>
      ))}
    </div>
  );
}
