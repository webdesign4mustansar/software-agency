import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const categories = ['All', 'Web Dev', 'Mobile', 'AI / ML', 'Marketing']

const projects = [
  {
    title: 'FinTrack Dashboard',
    category: 'Web Dev',
    desc: 'Real-time financial analytics SaaS with AI-powered forecasting and multi-tenant architecture.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    gradient: 'from-blue-600 to-cyan-500',
    result: '40% faster reporting',
  },
  {
    title: 'MedAI Diagnosis Tool',
    category: 'AI / ML',
    desc: 'ML-powered clinical decision support system assisting with early-stage disease diagnosis.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    gradient: 'from-purple-600 to-pink-500',
    result: '94% accuracy rate',
  },
  {
    title: 'ShopEase Mobile App',
    category: 'Mobile',
    desc: 'Cross-platform e-commerce app with AR product try-on for fashion and home decor brands.',
    tags: ['Flutter', 'Firebase', 'Stripe', 'ARCore'],
    gradient: 'from-orange-500 to-red-500',
    result: '50K+ monthly users',
  },
  {
    title: 'GrowthPulse Marketing',
    category: 'Marketing',
    desc: 'Full-funnel digital marketing campaign that scaled a B2B SaaS from $0 to $1M ARR.',
    tags: ['SEO', 'Google Ads', 'HubSpot', 'Analytics'],
    gradient: 'from-green-500 to-teal-500',
    result: '320% ROI in 6 months',
  },
  {
    title: 'LegalDocs AI Platform',
    category: 'AI / ML',
    desc: 'Intelligent document processing platform that extracts, classifies, and summarizes legal contracts.',
    tags: ['GPT-4', 'LangChain', 'React', 'MongoDB'],
    gradient: 'from-yellow-600 to-orange-500',
    result: '80% time saved',
  },
  {
    title: 'PropertyHub Web App',
    category: 'Web Dev',
    desc: 'Property listing marketplace with advanced search, virtual tours, and mortgage calculator.',
    tags: ['Next.js', 'Prisma', 'Mapbox', 'Tailwind'],
    gradient: 'from-indigo-600 to-blue-500',
    result: '10K listings launched',
  },
  {
    title: 'FitLife Training App',
    category: 'Mobile',
    desc: 'AI-powered personal training app that adapts workout plans to user performance and goals.',
    tags: ['React Native', 'TensorFlow Lite', 'AWS'],
    gradient: 'from-red-600 to-pink-500',
    result: '25K downloads in month 1',
  },
  {
    title: 'TechBrand Content Campaign',
    category: 'Marketing',
    desc: 'AI-assisted content strategy that grew organic traffic by 580% in 90 days for a tech startup.',
    tags: ['Content AI', 'SEO', 'LinkedIn Ads', 'Analytics'],
    gradient: 'from-teal-600 to-cyan-500',
    result: '580% traffic growth',
  },
]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="pt-20">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-20 bg-grid relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h1 className="font-syne text-5xl sm:text-6xl font-bold">
              Projects We're <span className="text-gradient">Proud Of</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              A curated showcase of our most impactful work — spanning software, AI, mobile, and marketing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter Tabs + Grid ─────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-navy border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((proj, i) => (
              <div
                key={`${proj.title}-${i}`}
                className="group rounded-2xl overflow-hidden bg-navy border border-white/5 glow-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient thumbnail */}
                <div className={`h-40 bg-gradient-to-br ${proj.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-white text-xs font-medium">
                      {proj.result}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{proj.category}</span>
                  <h3 className="font-syne font-semibold text-lg text-white">{proj.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-navy-light text-gray-300 text-xs border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-1">
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="View live site">
                      <ExternalLink size={15} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="View source code">
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────*/}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-syne text-4xl font-bold">Have a Project in <span className="text-gradient">Mind?</span></h2>
          <p className="text-gray-400 text-lg">Let's add it to this portfolio. Tell us about your idea and we'll send you a proposal.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Portfolio
