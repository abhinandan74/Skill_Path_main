import React from 'react'
import { Link } from 'react-router'
import { FiHome } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#030712] relative overflow-hidden cyber-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="text-center max-w-lg relative z-10 glass-panel rounded-3xl p-10 md:p-12 border border-slate-900 shadow-2xl">
        <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent text-glow-emerald mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Page Not Found</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            <FiHome />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
