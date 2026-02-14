import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CONFIG } from '../App'

const commands = {
  help: `Available commands:
  • help - Show this message
  • love - Why I love you
  • hug - Virtual hug
  • reasons - Random reason why you're amazing
  • clear - Clear terminal`,
  
  love: `Because you are my sunshine on cloudy days, my anchor in storms, and my home wherever we are. Every day with you is a gift I cherish. ใจฉันมีแต่เธอ 💕`,
  
  hug: `
    ╔═══════════════╗
    ║   ⊂(◉‿◉)つ    ║
    ║  SENDING HUG  ║
    ╚═══════════════╝
    *Wrapped in warmth* 🤗`,
  
  
  reasons: () => {
    const reasons = [
      "Your cuteness just brightens up my entire world",
      "The way you laugh at my terrible jokes",
      "How you make ordinary moments extraordinary",
      "Your kindness to everyone around you",
      "The way you believe in me",
      "Your beautiful soul that shines through everything you do",
      "How you make me want to be a better person",
      "The comfort of your presence"
    ]
    return `💫 ${reasons[Math.floor(Math.random() * reasons.length)]}`
  }
}

export default function Terminal() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([
    { type: 'system', text: `Welcome to the Love Terminal 💻` },
    { type: 'system', text: `Type 'help' for available commands` }
  ])
  const outputRef = useRef(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  const handleCommand = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.toLowerCase().trim()
    setOutput(prev => [...prev, { type: 'input', text: `$ ${input}` }])

    if (cmd === 'clear') {
      setOutput([])
    } else if (commands[cmd]) {
      const response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd]
      setOutput(prev => [...prev, { type: 'output', text: response }])
    } else {
      setOutput(prev => [...prev, { type: 'error', text: `Command not found: ${cmd}. Type 'help' for available commands.` }])
    }

    setInput('')
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
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h2 className="text-xl font-mono text-white ml-4">
              secret_terminal.exe
            </h2>
          </div>

          <div
            ref={outputRef}
            className="bg-black/40 rounded-xl p-4 font-mono text-sm h-80 overflow-y-auto mb-4"
          >
            {output.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-2 ${
                  line.type === 'input' ? 'text-cyan-400' :
                  line.type === 'error' ? 'text-red-400' :
                  line.type === 'system' ? 'text-purple-400' :
                  'text-green-400'
                }`}
              >
                {line.text.split('\n').map((textLine, i) => (
                  <div key={i}>{textLine}</div>
                ))}
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex gap-2">
            <div className="flex-1 bg-black/40 rounded-xl px-4 py-3 flex items-center">
              <span className="text-cyan-400 font-mono mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono outline-none"
                placeholder="Type a command..."
                autoFocus
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-mono px-6 rounded-xl hover:shadow-xl transition-all"
            >
              Enter
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
