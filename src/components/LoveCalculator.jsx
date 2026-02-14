import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONFIG } from '../App'

export default function LoveCalculator() {
  const [isCalculating, setIsCalculating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState(null)
  const [steps, setSteps] = useState([])

  const calculateLove = async () => {
    setIsCalculating(true)
    setResult(null)
    setSteps([])
    setProgress(0)

    const algorithmSteps = [
      "Initializing love matrix...",
      "Running BFS to find shortest path to your heart...",
      "Computing dynamic programming table...",
      "Analyzing compatibility vectors...",
      "Applying Dijkstra's algorithm for emotional distance...",
      "Executing merge sort on shared memories...",
      "Calculating final love coefficient..."
    ]

    for (let i = 0; i < algorithmSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600))
      setSteps(prev => [...prev, algorithmSteps[i]])
      setProgress(((i + 1) / algorithmSteps.length) * 100)
    }

    await new Promise(resolve => setTimeout(resolve, 500))
    setResult(100)
    setIsCalculating(false)
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-6">
            Love Algorithm 💻
          </h2>
          <p className="text-white/80 text-center mb-8">
            Running advanced algorithms to compute our compatibility...
          </p>

          {!result && !isCalculating && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={calculateLove}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl transition-all"
            >
              Calculate Our Love 💕
            </motion.button>
          )}

          <AnimatePresence>
            {isCalculating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="bg-white/10 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-pink-400 to-purple-500 h-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-white text-center mt-2">{Math.round(progress)}%</p>
                </div>

                {/* Algorithm Steps */}
                <div className="bg-black/30 rounded-xl p-4 font-mono text-sm text-green-400 max-h-48 overflow-y-auto">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {'>'} {step}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {result !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="text-8xl mb-6"
                >
                  💖
                </motion.div>
                <h3 className="text-5xl font-bold text-white mb-4">
                  {result}%
                </h3>
                <p className="text-2xl text-white/90 mb-6">
                  Perfect Match!
                </p>
                <p className="text-white/70 text-lg">
                  {CONFIG.myName} + {CONFIG.herName} = ∞ Love
                </p>
                <p className="text-white/60 mt-4 italic">
                  "Algorithm confirmed: You're my forever 💕"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
