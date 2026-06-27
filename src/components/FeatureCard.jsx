import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col items-start text-left relative overflow-hidden group">
      {/* Absolute faint top accent glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl mb-6 shadow-glow-emerald group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
