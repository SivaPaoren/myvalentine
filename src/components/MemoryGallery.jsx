import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONFIG } from '../App'

const memories = [
  {
    id: 1,
    title: "Our First Adventure",
    description: "When we sneak behind the trees at the football field",
    emoji: "☕",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 2,
    title: "Stargazing Night",
    description: "Looking and counting stars and making wishes",
    emoji: "🌟",
    color: "from-purple-400 to-indigo-500"
  },
  {
    id: 3,
    title: "Beach Night",
    description: "sitting by the beach and talking about our dreams",
    emoji: "🌅",
    color: "from-orange-400 to-pink-500"
  },
  {
    id: 4,
    title: "Movie Marathon",
    description: "Cozy nights with popcorn and laughter",
    emoji: "🎬",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 5,
    title: "Night Owls",
    description: "Endless theories and race related conversations",
    emoji: "🥞",
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: 6,
    title: "Every Day With You",
    description: "Every moment becomes a cherished memory",
    emoji: "💕",
    color: "from-red-400 to-pink-600"
  }
]

export default function MemoryGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = memories.length - 1
      if (nextIndex >= memories.length) nextIndex = 0
      return nextIndex
    })
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-12"
        >
          Our Beautiful Moments
        </motion.h2>

        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full max-w-md"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`glass rounded-2xl p-8 text-center cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
                }}
              >
                <div className={`text-8xl mb-6 bg-gradient-to-r ${memories[currentIndex].color} bg-clip-text text-transparent`}>
                  {memories[currentIndex].emoji}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {memories[currentIndex].title}
                </h3>
                <p className="text-white/80 text-lg">
                  {memories[currentIndex].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-10 glass rounded-full p-4 text-white hover:bg-white/20 transition-all"
            aria-label="Previous memory"
          >
            ←
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-10 glass rounded-full p-4 text-white hover:bg-white/20 transition-all"
            aria-label="Next memory"
          >
            →
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
              }`}
              aria-label={`Go to memory ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
