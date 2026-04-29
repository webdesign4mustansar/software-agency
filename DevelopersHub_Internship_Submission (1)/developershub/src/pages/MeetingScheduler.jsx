import { useState } from 'react'
import { Calendar, Clock, Video, CheckCircle, ChevronLeft, ChevronRight, User, Mail, Phone, MessageSquare } from 'lucide-react'

/* ─── Calendar helpers ──────────────────────────────────────── */
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

// Time slots available for booking
const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM',  '1:30 PM',
  '2:00 PM',  '2:30 PM',  '3:00 PM',  '3:30 PM',
  '4:00 PM',  '4:30 PM',
]

// Simulate some days being fully booked
const BOOKED_DAYS = [3, 10, 17, 22]

const meetingTypes = [
  { id: 'discovery', label: 'Discovery Call',        duration: '30 min', icon: <MessageSquare size={16} />, desc: 'Learn about your project needs and goals' },
  { id: 'technical', label: 'Technical Consultation', duration: '60 min', icon: <Video size={16} />,         desc: 'Deep dive into tech stack and architecture' },
  { id: 'proposal',  label: 'Proposal Review',        duration: '45 min', icon: <CheckCircle size={16} />,   desc: 'Review pricing, timeline, and contract' },
]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

function MeetingScheduler() {
  const today = new Date()

  const [currentYear,  setCurrentYear]  = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [selectedDay,  setSelectedDay]  = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [meetingType,  setMeetingType]  = useState('discovery')
  const [step,         setStep]         = useState(1) // 1=pick date, 2=fill form, 3=success
  const [form, setForm]                 = useState({ name: '', email: '', phone: '', notes: '' })
  const [loading, setLoading]           = useState(false)

  const daysInMonth  = getDaysInMonth(currentYear, currentMonth)
  const firstDay     = getFirstDayOfMonth(currentYear, currentMonth)

  // Navigate months
  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1) }
    else setCurrentMonth(m => m - 1)
    setSelectedDay(null)
    setSelectedTime(null)
  }
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1) }
    else setCurrentMonth(m => m + 1)
    setSelectedDay(null)
    setSelectedTime(null)
  }

  const isPastDay = (day) => {
    const d = new Date(currentYear, currentMonth, day)
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }

  const isBooked = (day) => BOOKED_DAYS.includes(day)
  const isWeekend = (day) => {
    const dow = new Date(currentYear, currentMonth, day).getDay()
    return dow === 0 || dow === 6
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setStep(3) }, 1600)
  }

  return (
    <div className="pt-20">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="py-16 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Schedule a Meeting</span>
            <h1 className="font-syne text-5xl font-bold">
              Book a <span className="text-gradient">Free Session</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Choose a time that works for you. We'll discuss your project, answer your questions,
              and map out next steps — completely free, no commitment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meeting Type Selection ─────────────────────────────── */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-semibold text-lg text-white text-center mb-6">Select Meeting Type</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {meetingTypes.map(mt => (
              <button
                key={mt.id}
                onClick={() => setMeetingType(mt.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                  meetingType === mt.id
                    ? 'bg-accent/10 border-accent/50 shadow-lg shadow-accent/10'
                    : 'bg-navy border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${meetingType === mt.id ? 'bg-accent/20 text-accent' : 'bg-white/5 text-gray-400'}`}>
                  {mt.icon}
                </div>
                <p className={`font-syne font-semibold text-sm ${meetingType === mt.id ? 'text-white' : 'text-gray-300'}`}>{mt.label}</p>
                <p className="text-gray-500 text-xs mt-1">{mt.duration} · {mt.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scheduler ─────────────────────────────────────────── */}
      <section className="py-8 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {step === 3 ? (
            /* ── Success Screen ── */
            <div className="py-16 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mx-auto">
                <CheckCircle size={36} className="text-green-400" />
              </div>
              <h2 className="font-syne text-3xl font-bold text-white">Meeting Booked!</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Your <strong className="text-white">{meetingTypes.find(m => m.id === meetingType)?.label}</strong> is
                confirmed for <strong className="text-white">{MONTHS[currentMonth]} {selectedDay}, {currentYear}</strong> at{' '}
                <strong className="text-white">{selectedTime}</strong>.
              </p>
              <p className="text-gray-500 text-sm">A confirmation email has been sent to {form.email}</p>
              <button
                onClick={() => { setStep(1); setSelectedDay(null); setSelectedTime(null); setForm({ name:'',email:'',phone:'',notes:'' }) }}
                className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white text-sm transition-colors"
              >
                Book Another Meeting
              </button>
            </div>

          ) : (
            <div className="grid lg:grid-cols-2 gap-8">

              {/* ── Calendar Column ── */}
              <div className="p-6 rounded-2xl bg-navy border border-white/5 space-y-6">
                {/* Month Navigation */}
                <div className="flex items-center justify-between">
                  <h3 className="font-syne font-semibold text-white">
                    {MONTHS[currentMonth]} {currentYear}
                  </h3>
                  <div className="flex items-center gap-1">
                    <button onClick={prevMonth} className="w-8 h-8 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={nextMonth} className="w-8 h-8 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Day of week headers */}
                <div className="grid grid-cols-7 gap-1">
                  {DAYS_OF_WEEK.map(d => (
                    <div key={d} className="text-center text-gray-500 text-xs py-1 font-medium">{d}</div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for offset */}
                  {[...Array(firstDay)].map((_, i) => <div key={`e-${i}`} />)}

                  {/* Actual days */}
                  {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1
                    const past    = isPastDay(day)
                    const booked  = isBooked(day)
                    const weekend = isWeekend(day)
                    const disabled = past || booked || weekend
                    const selected = selectedDay === day

                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() => { setSelectedDay(day); setSelectedTime(null) }}
                        className={`h-9 rounded-lg text-sm font-medium transition-all duration-150 ${
                          selected
                            ? 'bg-accent text-white shadow-lg shadow-accent/25'
                            : disabled
                              ? 'text-gray-600 cursor-not-allowed'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-accent/30" /> Selected</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-700" /> Unavailable</span>
                </div>
              </div>

              {/* ── Time Slot / Form Column ── */}
              <div className="space-y-6">
                {/* Time slots */}
                {selectedDay && (
                  <div className="p-6 rounded-2xl bg-navy border border-white/5 space-y-4">
                    <h4 className="font-syne font-semibold text-white flex items-center gap-2">
                      <Clock size={16} className="text-accent" />
                      Available Times — {MONTHS[currentMonth]} {selectedDay}
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map(time => (
                        <button
                          key={time}
                          onClick={() => { setSelectedTime(time); setStep(2) }}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all duration-150 ${
                            selectedTime === time
                              ? 'bg-accent border-accent text-white'
                              : 'bg-navy-light border-white/5 text-gray-300 hover:border-accent/40 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Booking Form — shown after time selected */}
                {step === 2 && selectedTime && (
                  <div className="p-6 rounded-2xl bg-navy border border-white/5 space-y-5">
                    <h4 className="font-syne font-semibold text-white flex items-center gap-2">
                      <User size={16} className="text-accent" /> Your Details
                    </h4>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Phone (optional)</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">Brief Project Notes</label>
                        <textarea
                          rows={3}
                          value={form.notes}
                          onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                          placeholder="What would you like to discuss?"
                          className="w-full px-4 py-2.5 rounded-xl bg-navy-light border border-white/10 text-white placeholder-gray-500 text-sm focus:border-accent/50 transition-colors resize-none"
                        />
                      </div>

                      {/* Booking summary */}
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-sm">
                        <p className="text-gray-300">
                          📅 <strong className="text-white">{MONTHS[currentMonth]} {selectedDay}</strong> at{' '}
                          <strong className="text-white">{selectedTime}</strong>{' '}
                          · {meetingTypes.find(m => m.id === meetingType)?.duration}
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-semibold transition-all duration-200"
                      >
                        {loading
                          ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          : <><Calendar size={16} /> Confirm Booking</>
                        }
                      </button>
                    </form>
                  </div>
                )}

                {/* Prompt if no day selected */}
                {!selectedDay && (
                  <div className="p-6 rounded-2xl bg-navy border border-white/5 flex items-center gap-4 text-gray-400">
                    <Calendar size={24} className="text-accent/50 flex-shrink-0" />
                    <p className="text-sm">Select a date on the calendar to see available time slots.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default MeetingScheduler
