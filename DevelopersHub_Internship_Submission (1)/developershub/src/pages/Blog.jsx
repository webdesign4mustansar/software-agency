import { useState } from 'react'
import { Clock, Tag, ArrowRight, Search, TrendingUp } from 'lucide-react'

const categories = ['All', 'AI & ML', 'Web Dev', 'Mobile', 'Marketing', 'Design']

const posts = [
  {
    title: 'How We Cut Our AI Model Training Time by 60% Using Distributed Computing',
    category: 'AI & ML',
    date: 'April 15, 2026',
    readTime: '8 min read',
    excerpt: 'A deep dive into the infrastructure changes and code optimizations we made to dramatically speed up our machine learning pipelines without sacrificing accuracy.',
    tags: ['AI', 'MLOps', 'Performance'],
    featured: true,
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'React Server Components in 2026: What Actually Changed',
    category: 'Web Dev',
    date: 'April 8, 2026',
    readTime: '6 min read',
    excerpt: 'RSC adoption has matured. Here\'s our honest take on when to use them, when to avoid them, and the real performance gains we\'ve seen across client projects.',
    tags: ['React', 'Next.js', 'Performance'],
    featured: false,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'The Hidden UX Mistakes That Are Killing Your Mobile App Retention',
    category: 'Mobile',
    date: 'March 28, 2026',
    readTime: '5 min read',
    excerpt: 'After auditing 30+ mobile apps, we discovered 7 UX patterns that consistently destroy user retention — and how to fix each one with minimal effort.',
    tags: ['UX', 'Mobile', 'Retention'],
    featured: false,
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'B2B Content Marketing in the Age of AI: Our Playbook',
    category: 'Marketing',
    date: 'March 20, 2026',
    readTime: '7 min read',
    excerpt: 'We generated 580% traffic growth for a client in 90 days using AI-assisted content at scale. Here\'s the exact strategy, tools, and prompts we used.',
    tags: ['Content', 'SEO', 'AI Tools'],
    featured: false,
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'Design Systems at Scale: Lessons from Building 50+ Component Libraries',
    category: 'Design',
    date: 'March 12, 2026',
    readTime: '9 min read',
    excerpt: 'After building component libraries for 50+ products, we\'ve learned what separates design systems that teams love from the ones they abandon after a month.',
    tags: ['Design Systems', 'UI', 'Figma'],
    featured: false,
    gradient: 'from-pink-600 to-purple-600',
  },
  {
    title: 'LLM Fine-Tuning vs RAG: Which Should You Choose?',
    category: 'AI & ML',
    date: 'March 5, 2026',
    readTime: '10 min read',
    excerpt: 'The choice between fine-tuning and retrieval-augmented generation is nuanced. We break down cost, accuracy, and maintenance tradeoffs with real examples.',
    tags: ['LLM', 'RAG', 'AI'],
    featured: false,
    gradient: 'from-indigo-600 to-blue-600',
  },
]

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery,    setSearchQuery]    = useState('')

  const filtered = posts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch   = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featured = posts.find(p => p.featured)
  const regular  = filtered.filter(p => !p.featured || activeCategory !== 'All' || searchQuery)

  return (
    <div className="pt-20">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-20 bg-grid relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Insights & Articles</span>
            <h1 className="font-syne text-5xl sm:text-6xl font-bold">
              Ideas From Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Technical deep-dives, industry insights, and practical guides from the engineers,
              designers, and strategists at DevelopersHub.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────────────────── */}
      {activeCategory === 'All' && !searchQuery && featured && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="group grid lg:grid-cols-5 rounded-2xl overflow-hidden bg-navy border border-white/5 glow-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              {/* Thumbnail */}
              <div className={`lg:col-span-2 h-56 lg:h-auto bg-gradient-to-br ${featured.gradient} relative`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur text-white text-xs font-semibold flex items-center gap-1.5">
                    <TrendingUp size={12} /> Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">{featured.category}</span>
                    <span className="text-gray-500 text-xs flex items-center gap-1.5"><Clock size={12}/> {featured.readTime}</span>
                    <span className="text-gray-500 text-xs">{featured.date}</span>
                  </div>
                  <h2 className="font-syne font-bold text-2xl text-white leading-tight group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-navy-light text-gray-300 text-xs border border-white/5">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-accent font-semibold mt-6">
                  Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Filter + Search ────────────────────────────────────── */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'bg-navy border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-navy border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors w-56"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────────── */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regular.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-400">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((post, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden bg-navy border border-white/5 glow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">{post.category}</span>
                      <span className="text-gray-500 text-xs flex items-center gap-1"><Clock size={11}/> {post.readTime}</span>
                    </div>
                    <h3 className="font-syne font-semibold text-lg text-white leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-navy-light text-gray-400 text-xs border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <span className="text-accent text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default Blog
