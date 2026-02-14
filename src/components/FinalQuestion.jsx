import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function FinalQuestion() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noButtonClicks, setNoButtonClicks] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleNoHover = () => {
    const maxX = 200
    const maxY = 100
    setNoButtonPos({
      x: Math.random() * maxX * (Math.random() > 0.5 ? 1 : -1),
      y: Math.random() * maxY * (Math.random() > 0.5 ? 1 : -1)
    })
  }

  const handleNoClick = () => {
    setNoButtonClicks(prev => prev + 1)
    handleNoHover()
  }

  const handleYes = () => {
    setAnswered(true)
    
    // Confetti explosion
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)
  }

  return (
    <section className="relative py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {!answered ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="text-7xl mb-8"
            >
              💝
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Will you be my Valentine?
            </h2>

            <p className="text-white/80 text-lg mb-12">
              I promise more adventures, laughter, and love... 
            </p>

            <div className="flex gap-4 justify-center items-center flex-wrap relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYes}
                className="bg-gradient-to-r from-pink-500 to-red-600 text-white text-2xl font-bold py-4 px-12 rounded-2xl shadow-2xl hover:shadow-pink-500/50 transition-all"
              >
                Yes! 💖
              </motion.button>

              <motion.button
                animate={{
                  x: noButtonPos.x,
                  y: noButtonPos.y
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={handleNoHover}
                onClick={handleNoClick}
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white text-2xl font-bold py-4 px-12 rounded-2xl shadow-xl hover:shadow-gray-500/50 transition-all relative"
              >
                No 🙃
              </motion.button>
            </div>

            {noButtonClicks > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/70 mt-6 italic"
              >
                {noButtonClicks === 1 && "Are you sure? 🥺"}
                {noButtonClicks === 2 && "Please? 🥹"}
                {noButtonClicks === 3 && "I'll make it worth it! 💕"}
                {noButtonClicks >= 4 && "The button knows you want to say yes! 😊"}
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-9xl mb-8"
            >
              🎉
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              YES!!!
            </h2>

            <p className="text-white/90 text-2xl mb-4">
              You just made me the happiest person alive! 💖
            </p>

            <p className="text-white/70 text-lg italic">
              Here's to forever with you, my Valentine 🌹
            </p>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 text-6xl"
            >
              💑
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
