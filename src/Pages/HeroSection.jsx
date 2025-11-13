import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'

const words_list = ['Stories', 'Ideas', 'Voices', 'Wisdom']
const topics = ['Technology', 'Culture', 'Design', 'Productivity', 'Health', 'Finance', 'Fiction', 'Poetry']
const testimonials = [
  { text: 'This platform helped me find my voice — and readers found me.', author: 'Asha K.' },
  { text: 'Beautifully designed and easy to use — my go-to for longform writing.', author: 'Ravi S.' },
  { text: 'Where ideas meet readers. I discovered so many new perspectives.', author: 'Mina L.' },
]

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/20 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
            y: [-100, -200],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

// ---------- Updated TopicMarquee: truly infinite continuous loop ----------
const TopicMarquee = () => {
  // repeat enough times to ensure no empty gap during animation
  const repeatCount = 3
  const repeated = Array.from({ length: repeatCount }).flatMap(() => topics)

  return (
    <div className="overflow-hidden w-full mt-8">
      <motion.div
        className="flex gap-4 w-max whitespace-nowrap items-center"
        // start at 0 and move left by 50% (because content is repeated)
        initial={{ x: '0%' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 22, // tweak speed here (smaller = faster)
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        style={{ willChange: 'transform' }}
      >
        {repeated.map((t, idx) => (
          <motion.span
            key={`${t}-${idx}`}
            className="px-4 py-2 rounded-full bg-foreground/6 border border-foreground/8 text-sm font-medium inline-block whitespace-nowrap"
            initial={{ opacity: 0.95, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.02 * (idx % topics.length) }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.15 } }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

// ---------- Updated TestimonialRotator: smooth crossfade + subtle vertical slide ----------
const TestimonialRotator = () => {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 4200)
    return () => clearInterval(t)
  }, [])
  const item = testimonials[i]

  return (
    // reserve a bit of height to avoid layout jumps when the quote changes
    <div className="relative min-h-[64px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={i}
          layout
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className="max-w-xl text-center text-sm text-foreground/70"
          style={{ transformStyle: 'preserve-3d' }}
        >
          "{item.text}" — <span className="font-medium text-foreground/90">{item.author}</span>
        </motion.blockquote>
      </AnimatePresence>
    </div>
  )
}

const HeroSection = () => {
  const [words, setWords] = useState([words_list[0]])
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initial dramatic entrance
    setIsLoaded(true)
    setWords([words_list[0]])
    let currentIndex = 0
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words_list.length
      setCurrent(currentIndex)
      setWords([words_list[currentIndex]])
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Container animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-12">
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Enhanced Background blobs with dramatic entrance */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-background via-background to-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Explosive blob entrance */}
        <motion.div
          className="absolute top-1/4 right-1/6 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0, x: 200, y: -100 }}
          animate={{
            scale: [0, 1.5, 1, 1.2, 1],
            opacity: [0, 1, 0.8, 0.8, 0.8],
            x: [200, 0, 100, 100, 0],
            y: [-100, 0, 50, 50, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.3, 0.6, 0.8, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
            ease: 'easeOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0, x: -200, y: 100 }}
          animate={{
            scale: [0, 1.4, 1, 1.15, 1],
            opacity: [0, 1, 0.6, 0.6, 0.6],
            x: [-200, 0, -80, -80, 0],
            y: [100, 0, -60, -60, 0],
          }}
          transition={{
            duration: 2.2,
            times: [0, 0.3, 0.6, 0.8, 1],
            delay: 0.4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
            ease: 'easeOut',
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/4 rounded-full blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2, 1, 1.3, 1],
            opacity: [0, 0.8, 0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.3, 0.6, 0.8, 1],
            delay: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
            ease: 'easeOut',
          }}
        />

        {/* Additional floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/3 blur-2xl"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              top: `${20 + i * 25}%`,
              left: `${10 + i * 15}%`,
            }}
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.3, 0.2, 0.3],
              rotate: 360,
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              delay: 1 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content with dramatic entrance */}
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        {/* Badge with explosive entrance */}
        <motion.div
          className="mb-5 flex justify-center"
          initial={{ opacity: 0, scale: 0, rotate: -180, y: -50 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.5,
          }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'linear' },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' },
              }}
            >
              ✨
            </motion.span>
            The future of thoughtful publishing
          </motion.span>
        </motion.div>

        {/* Main Heading with dramatic word-by-word reveal */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground leading-tight tracking-tighter">
          <motion.span
            initial={{ opacity: 0, x: -100, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 150,
              damping: 12,
              delay: 0.8,
            }}
            style={{ display: 'inline-block', marginRight: '0.3em' }}
          >
            Where
          </motion.span>
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[0]}
                initial={{ opacity: 0, scale: 0, rotate: -180, y: 100 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 180, y: -100 }}
                transition={{
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                className="bg-clip-text text-transparent bg-linear-to-r from-accent via-primary to-accent"
                style={{ display: 'inline-block' }}
              >
                {words[0] || 'Stories'}
              </motion.span>
            </AnimatePresence>

            {/* Enhanced animated gradient underline */}
            <motion.span
              layout
              initial={{ width: 0, scaleX: 0 }}
              animate={{ width: '100%', scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
                type: 'spring',
                stiffness: 100,
              }}
              className="absolute left-0 right-0 -bottom-3 h-1 rounded-full bg-linear-to-r from-accent via-primary to-accent opacity-90"
              style={{ transformOrigin: 'left' }}
            />
          </span>
          <motion.span
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 150,
              damping: 12,
              delay: 1,
            }}
            style={{ display: 'inline-block', marginLeft: '0.3em' }}
          >
            matter
          </motion.span>
        </h1>

        {/* Description with typewriter-like effect */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.4,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          An immersive platform where creators share authentic voices, readers discover meaningful insights, and communities
          form around ideas that matter.
        </motion.p>

        {/* Buttons with dramatic entrance */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.6,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.8,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
          >
            <Link to="/signup" className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold shadow-lg overflow-hidden">
              <motion.span
                className="absolute inset-0 rounded-lg -z-10 bg-linear-to-r from-accent to-primary opacity-90"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span className="relative z-10 flex items-center gap-2 text-accent-foreground" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Start Reading
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 2,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
          >
            <Link to="/write" className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/12 rounded-lg font-medium hover:bg-foreground/4 transition relative overflow-hidden group">
              <motion.span className="absolute inset-0 bg-foreground/4 rounded-lg" initial={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} />
              <motion.span className="relative z-10 flex items-center gap-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Start Writing <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-7 flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 2.2,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          <TestimonialRotator />
        </motion.div>

        {/* Topic marquee with delayed entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.4,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
        >
          <TopicMarquee />
        </motion.div>
      </motion.div>

      {/* Enhanced bottom scroll hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 2.6 },
          y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' },
        }}
      >
        <motion.p className="text-xs md:text-sm text-foreground/60 font-medium tracking-wider" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          SCROLL TO EXPLORE
        </motion.p>
        <motion.div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
