import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CONFIG } from '../App'

export default function Hero({ playSound }) {
  const [displayText, setDisplayText] = useState('')
  const [imageError, setImageError] = useState(false)
  const fullText = `Baby,it feels like a beautiful dream. You light up my world in ways words can't capture. รักเธอนะ 💕`

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            {!imageError ? (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
                <img
                  src="valentine-microsite/src/assets/gf.jp"
                  alt={CONFIG.herName}
                  onError={() => setImageError(true)}
                  className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/30 shadow-2xl"
                />
              </div>
            ) : (
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                  💖
                </div>
              </div>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Happy Valentine's Day
          </motion.h1>

          {/* Typewriter Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/90 text-lg md:text-xl leading-relaxed min-h-[120px] md:min-h-[100px]"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* Decorative sparkles */}
          <div className="flex justify-center gap-4 mt-8">
            {['✨', '💝', '✨'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
