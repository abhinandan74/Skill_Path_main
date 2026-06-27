import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import TestimonialSection from '../components/TestimonialSection'
import CTABanner from '../components/CTABanner'

const Landing = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Learning Guidance',
      description: 'Our advanced AI analyzes your learning style and creates personalized paths tailored just for you.',
    },
    {
      icon: '🎯',
      title: 'Personalized Skill Learning',
      description: 'Focus on the skills that matter to you with customized learning modules and real-world projects.',
    },
    {
      icon: '💬',
      title: 'Interactive AI Chat Support',
      description: 'Get instant help from our AI mentor available 24/7 to answer your questions and guide your learning.',
    },
    {
      icon: '✨',
      title: 'Beginner-Friendly Experience',
      description: 'Start from scratch with no prior experience needed. Our platform grows with you at every step.',
    },
  ]

  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030712] relative overflow-hidden border-t border-slate-950">
        {/* Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
              Why Choose SkillPath?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Experience the future of learning with our AI-powered platform designed for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTABanner />
    </>
  )
}

export default Landing
