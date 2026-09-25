import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Coffee, Layers, Compass } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A100A]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FDFBF7] border border-[#D2BBA0] shadow-warm-xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F2EA] text-[#61442E] hover:text-[#2E1E14] hover:bg-[#EFE6DA] transition-colors focus:outline-none"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4EBD9] text-[#7F5E42] border border-[#D2BBA0]">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-[#BA9B7B]">
              Category: {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2E1E14]">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[#7F5E42]">
            {project.tagline}
          </p>
        </div>

        {/* Coffee Pair Vibe Callout */}
        {project.coffeeVibe && (
          <div className="my-5 p-3 rounded-xl bg-gradient-to-r from-[#F7F2EA] to-[#EFE6DA] border border-[#D2BBA0] flex items-center gap-3 text-xs text-[#463020]">
            <Coffee className="w-4 h-4 text-[#C88346] shrink-0" />
            <div>
              <strong className="text-[#2E1E14]">Coffee Pairing:</strong> {project.coffeeVibe}
            </div>
          </div>
        )}

        {/* Story Body */}
        <div className="space-y-6 mt-6 text-[#463020] text-sm sm:text-base leading-relaxed">
          <div>
            <h4 className="font-serif font-bold text-lg text-[#2E1E14] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C88346]" />
              Project Narrative &amp; Purpose
            </h4>
            <p className="text-[#61442E]">{project.fullStory}</p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#A5572E] mb-1">
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-[#61442E]">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5D7E54] mb-1">
                The Design &amp; Code Solution
              </div>
              <p className="text-xs sm:text-sm text-[#61442E]">
                {project.solutionApproach}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-serif font-bold text-lg text-[#2E1E14] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C88346]" />
              Key Features &amp; Capabilities
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#61442E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C88346] mt-2 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#2E1E14] uppercase tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#F7F2EA] text-[#463020] border border-[#E2D3C0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#E2D3C0] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] transition-colors"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C88346]" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs bg-[#F7F2EA] text-[#2E1E14] border border-[#D2BBA0] hover:bg-[#EFE6DA] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#7F5E42]" />
                <span>View Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#7F5E42] hover:text-[#2E1E14] transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
