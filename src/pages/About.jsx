import React from 'react'
import { FiTarget, FiInfo, FiAward } from 'react-icons/fi'

const About = () => {
  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid border-b border-slate-900/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-glow-emerald">SkillPath</span>
          </h1>
          <p className="text-xl text-slate-455 max-w-2xl mx-auto leading-relaxed">
            Empowering learners worldwide through personalized, AI-guided skill development.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What is SkillPath */}
          <div className="glass-panel p-10 rounded-3xl border border-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl text-indigo-400 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <FiInfo />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">What is SkillPath?</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                SkillPath is an innovative AI-powered learning platform designed to help individuals discover and master new skills at their own pace. We believe that everyone deserves access to high-quality, personalized education regardless of their background or experience level.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our platform combines cutting-edge artificial intelligence with intuitive user experience to create learning paths that adapt to each learner's unique needs, pace, and goals.
              </p>
            </div>
          </div>

          {/* Our Purpose */}
          <div className="glass-panel p-10 rounded-3xl border border-slate-900 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl text-emerald-400 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <FiTarget />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Purpose</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                In a rapidly changing world, the ability to learn new skills is more important than ever. Our purpose is to democratize education by making world-class learning guidance accessible to everyone through artificial intelligence.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We aim to break down barriers to learning and help individuals transform their careers and lives through continuous skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#020617]/30 border-t border-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold text-xs uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-4 tracking-tight">Key Pillars of SkillPath</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-slate-900/60 border-l-4 border-l-emerald-500">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>🤖</span> AI Guidance
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our intelligent AI analyzes your learning patterns and provides real-time guidance to optimize your learning journey.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-900/60 border-l-4 border-l-indigo-500">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>🎯</span> Personalized Paths
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Receive customized learning paths based on your goals, skill level, and learning preferences.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-900/60 border-l-4 border-l-teal-500">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>💬</span> 24/7 Support
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Get instant answers and guidance from our AI mentor available around the clock to support your learning.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-900/60 border-l-4 border-l-pink-500">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span>✨</span> Beginner-Friendly
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No prior experience needed. Start your learning journey from anywhere and progress at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-emerald-500/5 to-indigo-500/5 rounded-3xl blur-[80px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 glass-panel rounded-3xl p-12 border border-slate-905">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl text-emerald-400 mx-auto mb-6 shadow-glow-emerald">
            <FiAward />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-slate-350 leading-relaxed max-w-2xl mx-auto">
            To empower learners worldwide by providing accessible, personalized, and effective AI-guided learning experiences that help them master new skills and achieve their goals. We're committed to creating a future where quality education is available to everyone, everywhere.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
