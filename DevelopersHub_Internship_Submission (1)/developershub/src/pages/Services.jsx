import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Brain, Sparkles, Megaphone, Video, Calendar, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={28} />,
    title: 'Software Development',
    subtitle: 'Web, Mobile & SaaS',
    desc: 'We build high-performance, scalable software tailored to your business goals — from consumer apps to complex enterprise platforms.',
    features: [
      'Custom web applications (React, Next.js, Vue)',
      'Mobile apps for iOS & Android (Flutter, React Native)',
      'SaaS platforms with subscription management',
      'REST & GraphQL API development',
      'Cloud infrastructure on AWS, GCP, Azure',
      'CI/CD pipelines and DevOps automation',
    ],
    gradient: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/25',
    iconBg: 'bg-blue-500/15 text-blue-400',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI Solutions & Automation',
    subtitle: 'Machine Learning & AI',
    desc: 'Integrate cutting-edge AI into your workflows — from natural language processing and computer vision to intelligent automation systems.',
    features: [
      'Custom ML model development & training',
      'Natural Language Processing (NLP) solutions',
      'Computer vision & image recognition',
      'AI-powered chatbots and virtual assistants',
      'Process automation with intelligent agents',
      'MLOps and model deployment pipelines',
    ],
    gradient: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/25',
    iconBg: 'bg-purple-500/15 text-purple-400',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'AI Content Generation',
    subtitle: 'Content at Scale',
    desc: 'Scale your content production without sacrificing quality. We build AI-powered pipelines that generate on-brand copy, images, and media.',
    features: [
      'AI copywriting tools and templates',
      'Automated blog and SEO content pipelines',
      'Image generation and visual asset creation',
      'Video script and social media automation',
      'Multi-language content localization',
      'Brand voice training and fine-tuning',
    ],
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/25',
    iconBg: 'bg-cyan-500/15 text-cyan-400',
  },
  {
    icon: <Megaphone size={28} />,
    title: 'Digital Marketing',
    subtitle: 'Growth & Acquisition',
    desc: 'Data-driven marketing strategies that attract the right audience, nurture leads, and convert them into loyal customers.',
    features: [
      'Search Engine Optimization (SEO)',
      'Google & Meta paid advertising (PPC)',
      'Social media strategy and management',
      'Email marketing and automation workflows',
      'Conversion rate optimization (CRO)',
      'Analytics setup and monthly reporting',
    ],
    gradient: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/25',
    iconBg: 'bg-orange-500/15 text-orange-400',
  },
  {
    icon: <Video size={28} />,
    title: 'Post Production',
    subtitle: 'Video & Visual Media',
    desc: 'Professional post-production services that transform raw footage into polished, compelling stories that capture your audience.',
    features: [
      'Professional video editing and color grading',
      'Motion graphics and animated explainers',
      'Corporate video and product demos',
      'Social media video content (Reels, Shorts)',
      'Podcast editing and audio production',
      'Brand intro / outro animations',
    ],
    gradient: 'from-pink-500/20 to-pink-600/5',
    border: 'border-pink-500/25',
    iconBg: 'bg-pink-500/15 text-pink-400',
  },
  {
    icon: <Calendar size={28} />,
    title: 'Meeting Scheduler',
    subtitle: 'Appointment & Booking',
    desc: 'We build and integrate smart scheduling systems that eliminate back-and-forth and automate your entire appointment workflow.',
    features: [
      'Custom booking page design & integration',
      'Google Calendar & Outlook sync',
      'Automated confirmation and reminder emails',
      'Multi-timezone support',
      'Payment collection at booking',
      'Analytics dashboard for bookings',
    ],
    gradient: 'from-green-500/20 to-green-600/5',
    border: 'border-green-500/25',
    iconBg: 'bg-green-500/15 text-green-400',
  },
]

const process = [
  { step: '01', title: 'Discovery',    desc: 'We dive deep into your business goals, user needs, and technical requirements in a structured kickoff session.' },
  { step: '02', title: 'Strategy',     desc: 'We design a roadmap with clear milestones, tech stack choices, and success metrics before a single line of code is written.' },
  { step: '03', title: 'Development',  desc: 'Our agile sprints deliver working software every 2 weeks, keeping you in the loop with demos and progress updates.' },
  { step: '04', title: 'Launch & Grow', desc: 'We deploy your product, monitor performance, and provide ongoing support to ensure continuous improvement.' },
]

function Services() {
  return (
    <div className="pt-20">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-20 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h1 className="font-syne text-5xl sm:text-6xl font-bold">
              Services Built for <span className="text-gradient">Modern Businesses</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              From custom software to AI automation and digital marketing — every service is delivered
              with the same obsession for quality and results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl bg-gradient-to-br ${svc.gradient} border ${svc.border} glow-hover`}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left: Title */}
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${svc.iconBg} flex items-center justify-center`}>
                    {svc.icon}
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">{svc.subtitle}</span>
                    <h3 className="font-syne font-bold text-2xl text-white mt-1">{svc.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{svc.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right: Features */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                  {svc.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">How We Work</span>
            <h2 className="font-syne text-4xl font-bold">Our Proven <span className="text-gradient">Process</span></h2>
            <p className="text-gray-400">A structured, transparent workflow designed to deliver results every single time.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-navy-light border border-white/5 glow-hover">
                {/* Step connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-6 h-px bg-accent/30 translate-x-full" />
                )}
                <span className="font-syne font-bold text-4xl text-gradient opacity-50">{step.step}</span>
                <h4 className="font-syne font-semibold text-xl text-white mt-3 mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────*/}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-syne text-4xl font-bold">Not Sure Which Service You Need?</h2>
          <p className="text-gray-400 text-lg">Book a free 30-minute consultation and we'll help you figure out the best approach for your project.</p>
          <Link
            to="/book-meeting"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Services
