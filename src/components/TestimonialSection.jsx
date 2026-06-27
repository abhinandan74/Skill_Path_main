import React from 'react'
import { FaStar } from 'react-icons/fa'

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Developer',
      image: '👩‍💻',
      rating: 5,
      text: 'SkillPath helped me transition into web development. The AI guidance was incredibly personalized and the learning path was exactly what I needed.',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Data Analyst',
      image: '👨‍💼',
      rating: 5,
      text: 'I loved the interactive AI chat support. It made learning complex topics much easier. Highly recommended for anyone serious about upskilling.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      image: '👩‍💼',
      rating: 5,
      text: 'SkillPath is beginner-friendly yet comprehensive. I was able to learn at my own pace with the support of an AI mentor. Fantastic platform!',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020617]/50 relative border-t border-slate-950">
      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            What Our Learners Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners who have accelerated their careers and mastered new disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full group"
            >
              {/* Background Quotation Mark decoration */}
              <span className="absolute right-6 top-6 text-slate-800/20 text-8xl font-serif pointer-events-none group-hover:text-emerald-500/5 transition-colors duration-300">
                “
              </span>

              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-500/20 flex items-center justify-center text-2xl mr-4 group-hover:border-emerald-400 transition-colors duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-tight">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex mb-5 space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]" size={14} />
                  ))}
                </div>

                <p className="text-slate-350 text-sm leading-relaxed italic relative">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
