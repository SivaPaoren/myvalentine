import { motion } from 'framer-motion'

export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 })

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300/20"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  )
}
