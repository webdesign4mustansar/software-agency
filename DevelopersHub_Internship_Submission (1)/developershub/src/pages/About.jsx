import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Zap, Globe, Users, Award, TrendingUp } from 'lucide-react'

const team = [
  { name: 'Alex Rivera',    role: 'CEO & Founder',           initials: 'AR', color: 'from-blue-500 to-cyan-500',    bio: '10+ years in tech startups. Ex-Google engineer with a passion for scalable systems.' },
  { name: 'Sofia Chen',     role: 'CTO',                     initials: 'SC', color: 'from-purple-500 to-pink-500',  bio: 'Full-stack architect specializing in AI integration and distributed system design.' },
  { name: 'Marcus Johnson', role: 'Head of Design',          initials: 'MJ', color: 'from-orange-500 to-red-500',   bio: 'Award-winning designer who believes great UX begins with empathy and data.' },
  { name: 'Priya Patel',    role: 'Head of AI Solutions',    initials: 'PP', color: 'from-green-500 to-teal-500',   bio: 'PhD in Machine Learning, 7 years deploying AI models in production environments.' },
]

const values = [
  { icon: <Target size={20} />,   title: 'Client-First',     desc: 'Every decision we make is filtered through one question: does this serve our client\'s goals?' },
  { icon: <Zap size={20} />,      title: 'Move Fast',        desc: 'We ship early, iterate often, and treat speed as a feature — not a shortcut.' },
  { icon: <Heart size={20} />,    title: 'Craftsmanship',    desc: 'We take immense pride in our work. Clean code, thoughtful design, thorough testing.' },
  { icon: <Globe size={20} />,    title: 'Think Globally',   desc: 'We build products for global audiences and partner with clients across 20+ countries.' },
]

const milestones = [
  { year: '2019', event: 'Company founded in San Francisco with a 3-person team.' },
  { year: '2020', event: 'Crossed 20 clients. Launched first AI product integration.' },
  { year: '2021', event: 'Expanded team to 15. Opened remote office in London.' },
  { year: '2022', event: '100+ projects delivered. Won "Top Dev Agency" award.' },
  { year: '2023', event: 'Launched AI Content Studio. Team grew to 25 specialists.' },
  { year: '2024', event: '150+ projects, 80+ clients. Opened Asia Pacific operations.' },
]

function About() {
  return (
    <div className="pt-20">

      {/* ── Page Hero ──────────────────────────────────────────── */}
      <section className="py-20 bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h1 className="font-syne text-5xl sm:text-6xl font-bold">
              We Are <span className="text-gradient">DevelopersHub</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              A team of passionate engineers, designers, and strategists united by one mission:
              building digital products that genuinely change how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Company Story ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-syne text-4xl font-bold">From a Small Team with a <span className="text-gradient">Big Vision</span></h2>
              <p className="text-gray-400 leading-relaxed">
                DevelopersHub was founded in 2019 by a group of engineers who were tired of seeing
                great ideas fail due to poor technical execution. We set out to bridge the gap between
                visionary thinking and flawless delivery.
              </p>
              <p className="text-gray-400 leading-relaxed">
                What started as a 3-person web development shop has grown into a 25+ specialist agency
                delivering enterprise-grade software, AI solutions, and digital marketing strategies
                for clients across 20+ countries.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our philosophy is simple: treat every project like it's our own startup. We invest deeply
                in understanding your business, your users, and your goals before writing a single line of code.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-white/5 mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <span className="text-accent text-sm font-semibold">{m.year}</span>
                    <p className="text-gray-300 text-sm mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <Target size={24} />
              </div>
              <h3 className="font-syne text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses of every size with cutting-edge technology solutions — delivered
                with precision, transparency, and a relentless focus on measurable outcomes.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan/15 to-cyan/5 border border-cyan/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center text-cyan">
                <Eye size={24} />
              </div>
              <h3 className="font-syne text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted technology partner globally — where every client, from a solo
                founder to a Fortune 500 company, gets enterprise-level quality and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">What We Stand For</span>
            <h2 className="font-syne text-4xl font-bold">Our Core <span className="text-gradient">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy border border-white/5 glow-hover text-center space-y-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto">
                  {v.icon}
                </div>
                <h4 className="font-syne font-semibold text-white">{v.title}</h4>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">The People</span>
            <h2 className="font-syne text-4xl font-bold">Meet Our <span className="text-gradient">Leadership Team</span></h2>
            <p className="text-gray-400">World-class experts who live and breathe technology, design, and strategy.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-navy-light border border-white/5 glow-hover text-center space-y-4 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto`}>
                  {member.initials}
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-lg text-white">{member.name}</h4>
                  <p className="text-accent text-sm mt-1">{member.role}</p>
                </div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-syne text-4xl font-bold">Want to Work <span className="text-gradient">With Us?</span></h2>
          <p className="text-gray-400 text-lg">Join 80+ companies who trust DevelopersHub to build their digital future.</p>
          <Link
            to="/book-meeting"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Schedule a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default About
