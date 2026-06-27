import React, { useState } from 'react'
import { FiMail, FiMessageSquare, FiGlobe, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields are filled
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert('Please fill in all fields')
      return
    }

    // Show success message
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-[#030712] min-h-screen text-slate-200">
      {/* Hero Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid border-b border-slate-900/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Support Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight">
            Get in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-glow-emerald">Touch</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="glass-panel border-2 border-emerald-500/30 rounded-3xl p-10 text-center shadow-glow-emerald max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl text-emerald-400 mx-auto mb-6">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Thank You!</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your message has been received successfully. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel border border-slate-900 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-slate-950/75 border border-slate-900 hover:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/35 focus:border-emerald-500 text-white placeholder-slate-600 transition duration-200 text-sm"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-slate-950/75 border border-slate-900 hover:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/35 focus:border-emerald-500 text-white placeholder-slate-600 transition duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3.5 bg-slate-950/75 border border-slate-900 hover:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/35 focus:border-emerald-500 text-white placeholder-slate-600 transition duration-200 text-sm"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  className="w-full px-4 py-3.5 bg-slate-950/75 border border-slate-900 hover:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/35 focus:border-emerald-500 text-white placeholder-slate-600 transition duration-200 resize-none text-sm leading-relaxed"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#020617]/35 border-t border-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-16 text-center tracking-tight">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-slate-900 text-center group hover:border-slate-850 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl text-indigo-400 mx-auto mb-6 shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:scale-105 transition-transform">
                <FiMail />
              </div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-sm text-slate-400">support@skillpath.com</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-900 text-center group hover:border-slate-850 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl text-emerald-400 mx-auto mb-6 shadow-glow-emerald group-hover:scale-105 transition-transform">
                <FiMessageSquare />
              </div>
              <h3 className="font-bold text-white mb-2">Chat Support</h3>
              <p className="text-sm text-slate-400">Available 24/7 on our platform</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-900 text-center group hover:border-slate-850 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl text-pink-400 mx-auto mb-6 shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:scale-105 transition-transform">
                <FiGlobe />
              </div>
              <h3 className="font-bold text-white mb-2">Social Media</h3>
              <p className="text-sm text-slate-400">Follow us on all platforms</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
