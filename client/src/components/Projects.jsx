import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Coffee, 
  ShoppingBag, 
  Clock, 
  CloudSun, 
  Activity, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsList, setProjectsList] = useState(featuredProjects);

  // Fetch live projects from MERN backend if available
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          // Merge any remote updates with local details
          const merged = featuredProjects.map((p) => {
            const remote = data.data.find((r) => r.slug === p.id);
            return remote ? { ...p, ...remote } : p;
          });
          setProjectsList(merged);
        }
      })
      .catch((err) => {
        // Fallback gracefully to default data
        console.log('Using static project data (Backend offline or local preview)');
      });
  }, []);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured & Impact' },
    { id: 'internship', label: 'Internship Prototype' },
    { id: 'hackathon', label: 'Hackathon (MERN)' },
    { id: 'mobile', label: 'Flutter Mobile' },
  ];

  const filteredProjects = projectsList.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.id === 'pick-one-cause';
    if (filter === 'internship') return p.category === 'Internship';
    if (filter === 'hackathon') return p.category === 'Hackathon';
    if (filter === 'mobile') return p.category === 'Mobile';
    return true;
  });

  // Render bespoke custom visual mockup for each project
  const renderVisualMockup = (id) => {
    switch (id) {
      case 'pick-one-cause':
        return (
          <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#FDFBF7] to-[#F4EBD9] p-4 flex flex-col justify-between border-b border-[#E2D3C0] overflow-hidden">
            {/* Mock Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C88346]"></div>
                <span className="font-serif font-bold text-xs text-[#2E1E14]">Pick One Cause</span>
              </div>
              <div className="flex gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#EFE6DA] text-[#61442E] font-medium">Education</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#EFE6DA] text-[#61442E] font-medium">Health</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#EFE6DA] text-[#61442E] font-medium">Community</span>
              </div>
            </div>

            {/* Mock Cards */}
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-3 rounded-xl bg-white/80 border border-[#E2D3C0] shadow-sm space-y-1">
                <div className="w-6 h-6 rounded-lg bg-[#C88346]/20 flex items-center justify-center text-[#C88346]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="font-bold text-[11px] text-[#2E1E14]">Rural Tech Literacy</div>
                <div className="text-[10px] text-[#7F5E42] line-clamp-1">Empowering students with coding kits.</div>
                <div className="w-full bg-[#EFE6DA] h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-[#C88346] h-full w-3/4"></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/80 border border-[#E2D3C0] shadow-sm space-y-1">
                <div className="w-6 h-6 rounded-lg bg-[#5D7E54]/20 flex items-center justify-center text-[#5D7E54]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="font-bold text-[11px] text-[#2E1E14]">Clean Water Access</div>
                <div className="text-[10px] text-[#7F5E42] line-clamp-1">Solar well infrastructure support.</div>
                <div className="w-full bg-[#EFE6DA] h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-[#5D7E54] h-full w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Mock CTA Footer */}
            <div className="flex items-center justify-between pt-1 border-t border-[#E2D3C0]/60 text-[10px] text-[#7F5E42]">
              <span>Accessible Design System</span>
              <span className="font-semibold text-[#C88346]">Discover &amp; Support →</span>
            </div>
          </div>
        );

      case 'crust-and-crumbs':
        return (
          <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#2E1E14] to-[#463020] text-[#FAF6F0] p-4 flex flex-col justify-between border-b border-[#E2D3C0] overflow-hidden">
            {/* Bakery Nav Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-[#7F5E42]/60">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xs tracking-wide text-[#E7D7C1]">Crust &amp; Crumbs</span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#C88346] text-[#2E1E14] font-bold">Vue 3 + Pinia</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#7F5E42]/50 text-[10px]">
                <ShoppingBag className="w-3 h-3 text-[#E09A55]" />
                <span className="font-mono text-[#FAF6F0]">3 items ($24.50)</span>
              </div>
            </div>

            {/* Bakery Items Mockup */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 rounded-xl bg-[#FAF6F0]/10 border border-[#BA9B7B]/30 text-center space-y-1">
                <div className="text-xl">🥐</div>
                <div className="text-[10px] font-bold text-[#E7D7C1]">Butter Croissant</div>
                <div className="text-[9px] text-[#BA9B7B]">$3.75</div>
              </div>
              <div className="p-2 rounded-xl bg-[#FAF6F0]/10 border border-[#BA9B7B]/30 text-center space-y-1 ring-1 ring-[#C88346]">
                <div className="text-xl">🥖</div>
                <div className="text-[10px] font-bold text-[#FAF6F0]">Artisan Sourdough</div>
                <div className="text-[9px] text-[#E09A55]">$6.50 • In Cart</div>
              </div>
              <div className="p-2 rounded-xl bg-[#FAF6F0]/10 border border-[#BA9B7B]/30 text-center space-y-1">
                <div className="text-xl">☕</div>
                <div className="text-[10px] font-bold text-[#E7D7C1]">Espresso Roast</div>
                <div className="text-[9px] text-[#BA9B7B]">$4.20</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#BA9B7B]">
              <span>Live on Vercel</span>
              <span className="text-[#E09A55] font-medium">Figma → Vue Prototype</span>
            </div>
          </div>
        );

      case 'queueless':
        return (
          <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#F4EBD9] to-[#EBDDCB] p-4 flex flex-col justify-between border-b border-[#E2D3C0] overflow-hidden">
            {/* Queue Management Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C88346]" />
                <span className="font-bold text-xs text-[#2E1E14]">Queueless • Live Queue</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-300">
                Service Active
              </span>
            </div>

            {/* Token Badge */}
            <div className="flex items-center justify-center gap-4 my-auto">
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border-2 border-dashed border-[#C88346] text-center shadow-sm">
                <div className="text-[10px] text-[#7F5E42] uppercase tracking-wider font-semibold">Your Digital Token</div>
                <div className="text-3xl font-mono font-bold text-[#2E1E14] mt-0.5">#B-142</div>
                <div className="text-[10px] text-[#5D7E54] font-medium mt-1">2 people ahead of you</div>
              </div>

              <div className="space-y-1.5 text-left text-[11px] text-[#61442E]">
                <div className="p-1.5 rounded-lg bg-white/70 border border-[#E2D3C0]">
                  <span className="text-[#BA9B7B]">Desk 1: </span>
                  <span className="font-semibold text-[#2E1E14]">Serving #B-140</span>
                </div>
                <div className="p-1.5 rounded-lg bg-white/70 border border-[#E2D3C0]">
                  <span className="text-[#BA9B7B]">Desk 2: </span>
                  <span className="font-semibold text-[#2E1E14]">Serving #B-141</span>
                </div>
                <div className="text-[10px] text-[#7F5E42]">Estimated wait: ~6 mins</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#7F5E42]">
              <span className="font-mono text-[10px]">MERN Stack • MongoDB &amp; Node</span>
              <span className="font-medium text-[#C88346]">Hackathon Prototype</span>
            </div>
          </div>
        );

      case 'flutter-weather-app':
        return (
          <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#7F5E42] via-[#463020] to-[#2E1E14] text-[#FAF6F0] p-4 flex flex-col justify-between border-b border-[#E2D3C0] overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#BA9B7B]/40">
              <div className="flex items-center gap-1.5">
                <CloudSun className="w-4 h-4 text-[#E09A55]" />
                <span className="font-medium text-xs text-[#FAF6F0]">Addis Ababa, ET</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C88346]/40 text-[#FAF6F0]">
                Flutter &amp; Dart
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 my-auto">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-[#FAF6F0]">23°C</div>
                <div className="text-xs text-[#E7D7C1] mt-0.5">Partly Cloudy</div>
              </div>
              <div className="space-y-1 text-left text-[11px] text-[#BA9B7B]">
                <div>Humidity: <strong className="text-[#FAF6F0]">48%</strong></div>
                <div>Wind: <strong className="text-[#FAF6F0]">11 km/h</strong></div>
                <div>Elevation: <strong className="text-[#FAF6F0]">2,355 m</strong></div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#BA9B7B]">
              <span>OpenWeather API</span>
              <span className="text-[#E09A55] font-medium">Live Flutter Web</span>
            </div>
          </div>
        );

      case 'bmi-calculator':
        return (
          <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#FDFBF7] to-[#EFE6DA] p-4 flex flex-col justify-between border-b border-[#E2D3C0] overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2D3C0]">
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#C88346]" />
                <span className="font-bold text-xs text-[#2E1E14]">Flutter BMI Metric</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFE6DA] text-[#61442E]">
                Open Source
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="p-3 rounded-xl bg-white/90 border border-[#E2D3C0] text-center space-y-1">
                <div className="text-[10px] text-[#7F5E42] font-semibold">HEIGHT</div>
                <div className="text-xl font-bold font-mono text-[#2E1E14]">172 <span className="text-xs font-normal">cm</span></div>
                <div className="w-full bg-[#EFE6DA] h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-[#C88346] h-full w-2/3"></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/90 border border-[#E2D3C0] text-center space-y-1">
                <div className="text-[10px] text-[#7F5E42] font-semibold">WEIGHT</div>
                <div className="text-xl font-bold font-mono text-[#2E1E14]">65 <span className="text-xs font-normal">kg</span></div>
                <div className="w-full bg-[#EFE6DA] h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-[#7F5E42] h-full w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#7F5E42]">
              <span className="text-emerald-700 font-semibold">Result: 22.0 (Normal)</span>
              <span className="text-[#C88346] font-medium">Custom Stateful UI</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#F7F2EA] border-b border-[#E2D3C0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C88346]" />
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Work built with code &amp; design intention.
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            Real applications ranging from social impact platforms and bakery ordering systems to hackathon queue managers and mobile utilities.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-[#2E1E14] text-[#FAF6F0] shadow-warm'
                  : 'bg-[#FAF6F0] text-[#61442E] border border-[#E2D3C0] hover:bg-[#EFE6DA] hover:text-[#2E1E14]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl bg-[#FAF6F0] border border-[#E2D3C0] overflow-hidden hover:border-[#BA9B7B] hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Bespoke Interactive Visual Mockup Header */}
              {renderVisualMockup(project.id)}

              {/* Card Content */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold font-mono text-[#C88346]">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#BA9B7B] px-2 py-0.5 rounded bg-[#F7F2EA] border border-[#E2D3C0]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2E1E14] group-hover:text-[#7F5E42] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#61442E] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F7F2EA] text-[#463020] border border-[#E2D3C0]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-[#F7F2EA] text-[#BA9B7B]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#E2D3C0] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E1E14] hover:text-[#C88346] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#F7F2EA] text-[#61442E] hover:text-[#2E1E14] hover:bg-[#EFE6DA] transition-colors"
                        aria-label={`GitHub repo for ${project.title}`}
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] transition-colors"
                        title="View Live Demo"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3 text-[#C88346]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Case Study View */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
