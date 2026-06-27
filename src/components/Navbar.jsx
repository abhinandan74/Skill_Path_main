import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-slate-950/65 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-6 transition-all duration-300">
              <span className="text-slate-950 font-extrabold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-colors duration-300">
              SkillPath
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 font-medium text-sm transition-colors duration-300 ${
                    isActive ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <Link
            to="/about"
            className="hidden md:inline-block px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-glow-emerald hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-emerald-400 transition focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-slate-900 animate-fadeIn">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-medium block py-2 px-3 rounded-lg transition-colors ${
                      isActive ? 'bg-slate-900 text-emerald-400' : 'text-slate-300 hover:bg-slate-900/50 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link
                to="/about"
                className="px-4 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold rounded-xl text-center shadow-glow-emerald hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] block mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
