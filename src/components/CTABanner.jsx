import React from 'react'
import { Link } from 'react-router'
import { FiArrowRight } from 'react-icons/fi'

const CTABanner = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-emerald-500/5 to-indigo-500/5 rounded-3xl blur-[80px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 glass-panel rounded-3xl p-12 md:p-16 border border-slate-850 shadow-2xl overflow-hidden">
        {/* Absolute Glowing Orbs */}
        <div className="absolute -right-16 -bottom-16 w-60 h-60 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute -left-16 -top-16 w-60 h-60 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ready to Start Your <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-glow-emerald">Learning Journey?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners mastering new skills with personalized AI guidance. Your next breakthrough is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center justify-center group"
            >
              Get Started Now
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 bg-slate-900/60 border border-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-850 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
