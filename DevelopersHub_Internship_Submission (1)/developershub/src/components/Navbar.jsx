import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home',      path: '/' },
  { label: 'About',     path: '/about' },
  { label: 'Services',  path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog',      path: '/blog' },
  { label: 'Contact',   path: '/contact' },
]

function Navbar() {
  const [isOpen,       setIsOpen]       = useState(false)  // mobile menu
  const [scrolled,     setScrolled]     = useState(false)  // scroll bg
  const { pathname }                    = useLocation()

  // Add background when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
              <Code2 size={20} className="text-white" />
            </div>
            <span className="font-syne font-bold text-xl text-white">
              Developers<span className="text-gradient">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-meeting"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Book a Meeting
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy/95 backdrop-blur-md border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.path
                  ? 'text-accent bg-accent/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book-meeting"
            className="block mt-3 px-4 py-3 rounded-lg bg-accent text-white text-sm font-semibold text-center"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
