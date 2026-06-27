import React from 'react'
import { Link } from 'react-router'
import { FiArrowRight, FiCheckCircle, FiCpu, FiPlay } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712] cyber-grid">
      {/* Background Decorative Blur Lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-semibold mb-6 tracking-wide uppercase shadow-inner">
              <FiCpu className="animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen AI Mentorship</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Master <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent text-glow-emerald">Any Skill</span> with Precision AI
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              SkillPath crafts tailor-made learning tracks matching your pace and goals. Bypass the noise and focus on what matters with real-time feedback.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/about"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 rounded-2xl font-bold hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all duration-300 flex items-center justify-center group"
              >
                Launch Learning Path
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 hover:border-slate-700 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiPlay className="text-emerald-400" />
                Schedule Demo
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-950">
              <div>
                <div className="text-3xl font-extrabold text-white">94%</div>
                <div className="text-xs text-slate-500 mt-1">Goal Success</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">45k+</div>
                <div className="text-xs text-slate-500 mt-1">Learners</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">100+</div>
                <div className="text-xs text-slate-500 mt-1">AI Curated Tracks</div>
              </div>
            </div>
          </div>

          {/* Visual Element: Glassmorphic Dashboard Mockup */}
          <div className="relative group lg:mt-0 mt-8">
            {/* Glowing Backdrop behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative glass-panel rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800/80 animate-float">
              {/* Window Controls */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900">
                <div className="flex space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono">mentor-agent-v1.0.4.sh</span>
              </div>

              {/* Terminal Code Content */}
              <div className="space-y-6 font-mono text-sm">
                <div>
                  <span className="text-slate-500 font-bold mr-2">&gt;</span>
                  <span className="text-slate-100">Initialize learning path for</span>
                  <span className="text-emerald-400 font-semibold ml-2">"Full Stack Web Dev"</span>
                </div>

                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-900 space-y-4">
                  {/* Phase 1 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-bold">1. Frontend Core Principles</span>
                      <span className="text-emerald-400">100% Completed</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-bold">2. NextJS & Server Components</span>
                      <span className="text-indigo-400 animate-pulse">68% Active</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-500">3. AI Integration & Agents</span>
                      <span className="text-slate-650">Locked</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-800" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Simulated AI Message */}
                <div className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                  <span className="text-emerald-400 text-lg mt-0.5">💡</span>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold">AI Suggestion:</span> You mastered React hooks fast. Skipping Basic State module to fast-track directly into React Server Actions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
