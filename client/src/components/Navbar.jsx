import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, ArrowUpRight, Sparkles, MapPin, Clock } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addisTime, setAddisTime] = useState('');

  // Track scroll position for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Addis Ababa (East Africa Time, UTC+3) clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Addis_Ababa',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setAddisTime(formatter.format(now));
      } catch (e) {
        setAddisTime('Addis Ababa');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Design + Code', href: '#design-dev' },
    { label: 'Experience', href: '#experience' },
    { label: 'Buna Corner', href: '#buna-corner' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E2D3C0]/80 shadow-warm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Ruth - Back to top"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#463020] to-[#2E1E14] text-[#FAF6F0] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="font-serif font-bold text-lg">R</span>
              {/* Coffee steam micro-dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C88346] border-2 border-[#FDFBF7] animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-[#2E1E14] tracking-tight group-hover:text-[#7F5E42] transition-colors">
                Ruth<span className="text-[#C88346]">.</span>
              </span>
              <span className="text-[11px] font-medium text-[#7F5E42] tracking-wider uppercase">
                Frontend &amp; Design Dev
              </span>
            </div>
          </a>

          {/* Center Info: Addis Ababa Local Time Badge (Ethiopia) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F2EA] border border-[#E2D3C0] text-xs text-[#61442E]">
            <MapPin className="w-3.5 h-3.5 text-[#C88346]" />
            <span className="font-medium">Addis Ababa, ET</span>
            <span className="text-[#BA9B7B]">•</span>
            <Clock className="w-3.5 h-3.5 text-[#7F5E42]" />
            <span className="font-mono text-[11px]">{addisTime || 'EAT (UTC+3)'}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#61442E] hover:text-[#2E1E14] hover:bg-[#F7F2EA] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] hover:shadow-warm transition-all duration-200 active:scale-95"
            >
              <Coffee className="w-3.5 h-3.5 text-[#C88346]" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2E1E14] text-[#FAF6F0]"
            >
              Connect
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2E1E14] hover:bg-[#F7F2EA] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E2D3C0] px-4 pt-3 pb-6 space-y-2 shadow-warm">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E2D3C0] text-xs text-[#7F5E42]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C88346]" />
              <span>Addis Ababa University</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px]">
              <Clock className="w-3 h-3 text-[#7F5E42]" />
              <span>{addisTime}</span>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#463020] hover:bg-[#F7F2EA] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://github.com/RuthInTech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-[#FAF6F0] text-[#2E1E14] border border-[#E2D3C0]"
            >
              <span>GitHub / RuthInTech</span>
              <ArrowUpRight className="w-4 h-4 text-[#7F5E42]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
