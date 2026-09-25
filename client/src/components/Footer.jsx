import React from 'react';
import { ArrowUp, Coffee, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2E1E14] text-[#FAF6F0] pt-16 pb-12 border-t border-[#463020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#463020] text-left">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#C88346] text-[#2E1E14] font-serif font-bold text-base flex items-center justify-center">
                R
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-[#FAF6F0]">
                Ruth<span className="text-[#C88346]">.</span>
              </span>
              <span className="text-xs font-mono text-[#D2BBA0] pl-2 border-l border-[#7F5E42]">
                Frontend &amp; Design Dev
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D2BBA0] max-w-md leading-relaxed">
              4th-year Software Engineering student at Addis Ababa University. Building interfaces where thoughtful design meets functional code.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#BA9B7B]">
              <span className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#C88346]" />
                Addis Ababa, Ethiopia
              </span>
              <span>•</span>
              <span className="text-[#E7D7C1]">Class of 2026</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#BA9B7B]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#E7D7C1]">
              <li>
                <a href="#about" className="hover:text-[#C88346] transition-colors">About Ruth</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#C88346] transition-colors">Technical Toolkit</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C88346] transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#design-dev" className="hover:text-[#C88346] transition-colors">Design + Code Bridge</a>
              </li>
              <li>
                <a href="#buna-corner" className="hover:text-[#C88346] transition-colors">Buna Corner (Coffee Guestbook)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C88346] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#BA9B7B]">
              Connect
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#463020] border border-[#7F5E42] flex items-center justify-center text-[#E7D7C1] hover:text-[#FAF6F0] hover:bg-[#61442E] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#463020] border border-[#7F5E42] flex items-center justify-center text-[#E7D7C1] hover:text-[#FAF6F0] hover:bg-[#61442E] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="w-9 h-9 rounded-xl bg-[#463020] border border-[#7F5E42] flex items-center justify-center text-[#E7D7C1] hover:text-[#FAF6F0] hover:bg-[#61442E] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#463020] text-[#FAF6F0] hover:bg-[#61442E] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#C88346]" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BA9B7B]">
          <div>
            © {new Date().getFullYear()} Ruth. Handcrafted in Figma &amp; built with React, Node.js, and Ethiopian coffee.
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span>MERN Stack</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-[#C88346]">Addis Ababa, ET</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
