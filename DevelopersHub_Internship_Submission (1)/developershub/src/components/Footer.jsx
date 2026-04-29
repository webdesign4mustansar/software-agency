import { Link } from 'react-router-dom'
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const services = [
  'Software Development',
  'AI Solutions',
  'AI Content Generation',
  'Digital Marketing',
  'Post Production',
  'Meeting Scheduler',
]

const company = [
  { label: 'About Us',   path: '/about' },
  { label: 'Services',   path: '/services' },
  { label: 'Portfolio',  path: '/portfolio' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Contact',    path: '/contact' },
  { label: 'Book Meeting', path: '/book-meeting' },
]

function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="font-syne font-bold text-xl text-white">
                Developers<span className="text-gradient">Hub</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build world-class digital products — from web and mobile apps to AI-powered
              solutions that help businesses scale faster and smarter.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Github size={16} />,    href: '#' },
                { icon: <Linkedin size={16} />,  href: '#' },
                { icon: <Twitter size={16} />,   href: '#' },
                { icon: <Instagram size={16} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-navy-light border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-syne font-semibold text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 text-sm hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-syne font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c.path}>
                  <Link
                    to={c.path}
                    className="text-gray-400 text-sm hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-syne font-semibold text-white mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              {[
                { icon: <Mail size={15} />,    text: 'hello@developershub.co' },
                { icon: <Phone size={15} />,   text: '+1 (555) 234-5678' },
                { icon: <MapPin size={15} />,  text: '123 Tech Avenue, San Francisco, CA 94102' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-navy-light border border-white/10 text-white text-sm placeholder-gray-500 focus:border-accent/50"
                />
                <button className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-medium transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DevelopersHub Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
