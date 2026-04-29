import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import MeetingScheduler from './pages/MeetingScheduler'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      {/* Scroll to top on every page change */}
      <ScrollToTop />

      <div className="min-h-screen bg-dark text-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/about"         element={<About />} />
            <Route path="/services"      element={<Services />} />
            <Route path="/portfolio"     element={<Portfolio />} />
            <Route path="/contact"       element={<Contact />} />
            <Route path="/book-meeting"  element={<MeetingScheduler />} />
            <Route path="/blog"          element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
