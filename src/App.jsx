import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import MemoryGallery from './components/MemoryGallery'
import LoveCalculator from './components/LoveCalculator'
import Terminal from './components/Terminal'
import FinalQuestion from './components/FinalQuestion'
import FloatingHearts from './components/FloatingHearts'
import ParticleCanvas from './components/ParticleCanvas'

// PERSONALIZATION VARIABLES - CHANGE THESE!
export const CONFIG = {
  herName: "Merina",
  myName: "Shiva",
  anniversaryDate: "02-06-2025", // e.g., "2023-02-14"
}

function App() {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const playSound = (soundType) => {
    if (!soundEnabled) return
    // Optional: implement sound playing logic here
    // const audio = new Audio(`/sounds/${soundType}.mp3`)
    // audio.play().catch(() => {})
  }

  return (
    <div className="relative min-h-screen">
      <ParticleCanvas />
      <FloatingHearts />
      
      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="fixed top-6 right-6 z-50 glass rounded-full p-3 text-white hover:bg-white/20 transition-all"
        aria-label="Toggle sound"
      >
        {soundEnabled ? '🔊' : '🔇'}
      </motion.button>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-white/80 text-sm flex flex-col items-center"
        >
          <span className="mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <Hero playSound={playSound} />
      <MemoryGallery playSound={playSound} />
      <LoveCalculator playSound={playSound} />
      <Terminal playSound={playSound} />
      <FinalQuestion playSound={playSound} />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white/60 text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Made with 💖 by {CONFIG.myName}
        </motion.p>
      </footer>
    </div>
  )
}

export default App
