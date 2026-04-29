import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Brain, Megaphone, Video,
  Calendar, Sparkles, CheckCircle, Star, Globe,
  Users, Award, TrendingUp, ChevronRight, Play,
  Zap, Shield, Clock
} from 'lucide-react'

/* ─── Data ─────────────────────────────────────────────────── */
const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Software Development',
    desc: 'Custom web, mobile, and SaaS products built with modern tech stacks — React, Node.js, Flutter, and more.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI Solutions & Automation',
    desc: 'Intelligent automation, ML pipelines, and AI-powered tools that streamline operations and drive growth.',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'AI Content Generation',
    desc: 'Scale your content strategy with AI-driven copy, imagery, and multimedia — on-brand and on-demand.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Digital Marketing',
    desc: 'Data-backed campaigns across SEO, paid ads, social media, and email that convert clicks into customers.',
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/20',
  },
  {
    icon: <Video size={24} />,
    title: 'Post Production',
    desc: 'Professional video editing, motion graphics, and visual storytelling that make your brand unforgettable.',
    color: 'from-pink-500/20 to-pink-600/5',
    border: 'border-pink-500/20',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Meeting Scheduler',
    desc: 'Streamlined appointment booking with automated reminders and calendar sync to keep your team aligned.',
    color: 'from-green-500/20 to-green-600/5',
    border: 'border-green-500/20',
  },
]

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered',  icon: <Globe size={20} /> },
  { value: 80,  suffix: '+', label: 'Happy Clients',        icon: <Users size={20} /> },
  { value: 5,   suffix: '+', label: 'Years Experience',     icon: <Award size={20} /> },
  { value: 98,  suffix: '%', label: 'Client Satisfaction',  icon: <TrendingUp size={20} /> },
]

const projects = [
  {
    title: 'FinTrack SaaS Platform',
    category: 'Web Development',
    desc: 'A full-stack financial tracking dashboard with real-time analytics and AI-powered insights.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'MedAI Diagnosis Tool',
    category: 'AI Solutions',
    desc: 'Machine learning model that assists doctors with early-stage diagnosis, achieving 94% accuracy.',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'ShopEase Mobile App',
    category: 'Mobile Development',
    desc: 'Cross-platform e-commerce app with AR try-on feature, serving 50,000+ monthly active users.',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    gradient: 'from-orange-600 to-red-600',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, FinTrack Inc.',
    text: 'DevelopersHub delivered our platform 2 weeks ahead of schedule and the code quality was exceptional. They felt like an extension of our own team.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, MedAI Labs',
    text: 'The AI solution they built transformed our diagnostic process. Their deep technical expertise and clear communication made the entire process seamless.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'VP Marketing, GrowthCo',
    text: 'Our conversion rates jumped 40% after their digital marketing overhaul. They understood our audience better than we did!',
    rating: 5,
  },
]

const whyUs = [
  { icon: <Zap size={20} />,    title: 'Fast Delivery',         desc: 'Agile methodology with 2-week sprints ensures rapid, reliable delivery every time.' },
  { icon: <Shield size={20} />, title: 'Enterprise-Grade Code',  desc: 'Clean, tested, scalable code following SOLID principles and industry best practices.' },
  { icon: <Clock size={20} />,  title: '24/7 Support',           desc: 'Dedicated support team available around the clock to keep your product running smoothly.' },
  { icon: <Star size={20} />,   title: 'Award-Winning Design',   desc: 'UI/UX design that balances aesthetics with usability to delight your end users.' },
]

/* ─── Animated Counter ──────────────────────────────────────── */
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const step = target / (duration / 16)
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          setCount(Math.floor(current))
          if (current >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-syne font-bold text-4xl text-gradient">
      {count}{suffix}
    </span>
  )
}

/* ─── Home Page ─────────────────────────────────────────────── */
function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-grid">
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <Sparkles size={14} />
                Trusted by 80+ companies worldwide
              </div>

              {/* Headline */}
              <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Building{' '}
                <span className="text-gradient">Digital</span>
                <br />
                Futures That{' '}
                <span className="text-gradient">Matter</span>
              </h1>

              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                We craft world-class software products, AI systems, and digital experiences
                that help ambitious companies scale, innovate, and stand out.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 hover:border-accent/50 text-white font-semibold transition-all duration-200 hover:bg-white/5"
                >
                  View Our Work
                </Link>
              </div>

              {/* Mini trust bar */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-dark flex items-center justify-center text-white text-xs font-bold`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">Rated 4.9/5 by our clients</p>
                </div>
              </div>
            </div>

            {/* Right — Visual card */}
            <div className="hidden lg:block relative">
              <div className="animate-float">
                <div className="glass rounded-2xl p-6 space-y-4 glow-hover">
                  {/* Fake code editor header */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-gray-400 text-xs font-mono">app.jsx</span>
                  </div>
                  {/* Fake code lines */}
                  <div className="font-mono text-sm space-y-1">
                    <p><span className="text-purple-400">import</span> <span className="text-cyan">{'{ AI }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'developershub'</span></p>
                    <p className="mt-2"><span className="text-blue-400">const</span> <span className="text-white">solution</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">await</span> AI.<span className="text-accent">build</span>{'({'}</p>
                    <p className="pl-6"><span className="text-green-400">idea</span>: <span className="text-orange-400">"your vision"</span>,</p>
                    <p className="pl-6"><span className="text-green-400">quality</span>: <span className="text-orange-400">"enterprise"</span>,</p>
                    <p className="pl-6"><span className="text-green-400">speed</span>: <span className="text-orange-400">"lightning"</span></p>
                    <p>{'}'});'</p>
                    <p className="mt-2 text-gray-400">// <span className="text-green-400">✓ Product shipped in 2 weeks</span></p>
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -top-6 -right-6 glass rounded-xl px-4 py-3 border border-green-500/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-sm font-medium text-white">Project Delivered!</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">2 weeks ahead of schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex justify-center text-accent mb-3">{stat.icon}</div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="font-syne text-4xl font-bold">Services That Drive <span className="text-gradient">Real Results</span></h2>
            <p className="text-gray-400">From concept to deployment, we provide end-to-end technology solutions for forward-thinking businesses.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${svc.color} border ${svc.border} glow-hover group cursor-default transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="font-syne font-semibold text-lg text-white mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-accent text-sm mt-4 hover:gap-2 transition-all duration-200">
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 font-semibold transition-all duration-200"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
                <h2 className="font-syne text-4xl font-bold">
                  We Build More Than Software — <span className="text-gradient">We Build Trust</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  With over 5 years of experience and 150+ delivered projects, we've refined a process
                  that consistently delivers high-quality, scalable solutions on time and within budget.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                About Our Team <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {whyUs.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-navy-light border border-white/5 glow-hover">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-syne font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-3">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Work</span>
              <h2 className="font-syne text-4xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
            </div>
            <Link to="/portfolio" className="hidden sm:inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-200 font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-navy border border-white/5 glow-hover hover:-translate-y-1 transition-all duration-300">
                {/* Project thumbnail */}
                <div className={`h-48 bg-gradient-to-br ${proj.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-syne font-bold text-white/40 text-2xl">{proj.title.slice(0,2)}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{proj.category}</span>
                  <h3 className="font-syne font-semibold text-xl text-white">{proj.title}</h3>
                  <p className="text-gray-400 text-sm">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-navy-light text-gray-300 text-xs border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="font-syne text-4xl font-bold">What Our <span className="text-gradient">Clients Say</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-light border border-white/5 glow-hover space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-cyan/10 border border-accent/20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/20 blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              <h2 className="font-syne text-4xl sm:text-5xl font-bold">
                Ready to Build <span className="text-gradient">Something Great?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Schedule a free consultation with our team and let's turn your vision into a digital reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/book-meeting"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Book a Free Meeting <Calendar size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white font-bold text-lg transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
