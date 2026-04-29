import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email Us',
    value: 'hello@developershub.co',
    sub:   'We reply within 2 business hours',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call Us',
    value: '+1 (555) 234-5678',
    sub:   'Mon–Fri, 9am–6pm PST',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Visit Us',
    value: '123 Tech Avenue, San Francisco',
    sub:   'California, CA 94102, USA',
  },
  {
    icon: <Clock size={20} />,
    label: 'Business Hours',
    value: 'Mon – Fri: 9am – 6pm',
    sub:   'Weekend: By appointment only',
  },
]

const services = [
  'Software Development',
  'AI Solutions & Automation',
  'AI Content Generation',
  'Digital Marketing',
  'Post Production',
  'Meeting Scheduler',
  'Other',
]

function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="pt-20">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-20 bg-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h1 className="font-syne text-5xl sm:text-6xl font-bold">
              Let's Build <span className="text-gradient">Together</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Have a project idea? A question? Or just want to see if we're a good fit?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ─────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <div key={i} className="p-5 rounded-2xl bg-navy border border-white/5 glow-hover flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">{info.label}</p>
                  <p className="text-white text-sm font-medium">{info.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ─────────────────────────────────────────── */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success state */
                <div className="h-full flex flex-col items-center justify-center p-12 rounded-2xl bg-navy border border-green-500/20 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thanks for reaching out. A member of our team will get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',service:'',budget:'',message:'' }) }}
                    className="px-6 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-navy border border-white/5">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare size={20} className="text-accent" />
                    <h2 className="font-syne text-2xl font-bold text-white">Send Us a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Service Needed *</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-navy-light border border-white/10 text-white text-sm focus:border-accent/50 transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-gray-400 text-sm mb-1.5">Estimated Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-light border border-white/10 text-white text-sm focus:border-accent/50 transition-colors appearance-none"
                      >
                        <option value="">Select a budget range...</option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $50,000</option>
                        <option>$50,000 – $100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-400 text-sm mb-1.5">Project Details *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <div className="h-56 rounded-2xl bg-navy border border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <MapPin size={28} className="text-accent" />
                  <p className="text-white font-medium text-sm">San Francisco, CA</p>
                  <p className="text-gray-400 text-xs">123 Tech Avenue, CA 94102</p>
                </div>
              </div>

              {/* Global Offices */}
              <div className="p-6 rounded-2xl bg-navy border border-white/5 space-y-5">
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-accent" />
                  <h4 className="font-syne font-semibold text-white">Our Offices</h4>
                </div>
                {[
                  { city: 'San Francisco (HQ)', time: 'PST (UTC-8)' },
                  { city: 'London',              time: 'GMT (UTC+0)' },
                  { city: 'Singapore',           time: 'SGT (UTC+8)' },
                ].map((o, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-300 text-sm">{o.city}</span>
                    <span className="text-gray-500 text-xs">{o.time}</span>
                  </div>
                ))}
              </div>

              {/* Response time guarantee */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-green-500/15 to-green-600/5 border border-green-500/20 flex items-start gap-3">
                <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Guaranteed Response</p>
                  <p className="text-gray-400 text-xs mt-1">Every inquiry gets a thoughtful reply within 2 business hours — no exceptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
