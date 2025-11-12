import React from 'react'
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const [words, setWords] = useState([])
    const words_list = ["Stories", "Ideas", "Voices", "Wisdom"]

    useEffect(() => {
        setWords([words_list[0]])
        let currentIndex = 0
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % words_list.length
            setWords([words_list[currentIndex]])
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    }

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-12">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card" />

                <motion.div
                    className="absolute top-1/4 right-1/6 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 2,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/4 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <motion.div
                className="max-w-5xl mx-auto px-6 text-center z-10 relative"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(96, 125, 139, 0.15)" }}
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            ✨
                        </motion.span>
                        Welcome to the future of storytelling
                    </motion.span>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                    <motion.h1
                        className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight tracking-tighter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Where{" "}
                        <motion.span
                            className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-accent via-primary to-accent"
                            key={words[0]}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            transition={{
                                duration: 0.7,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            {words[0] || "Stories"}
                        </motion.span>{" "}
                        matter
                    </motion.h1>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12">
                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light prose-editorial">
                        An immersive platform where creators share authentic voices, readers discover meaningful insights, and
                        communities thrive around ideas that shape our world.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <Link
                            to="/signup"
                            className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Start Reading
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <Link
                            to="/write"
                            className="flex items-center justify-center gap-2 w-full px-8 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/5 text-foreground font-semibold rounded-lg transition-all duration-300"
                        >
                            Start Writing
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex justify-center gap-8 text-sm text-foreground/60 flex-wrap"
                >
                    <div className="flex items-center gap-2">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-accent"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <span>1M+ Monthly Readers</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-primary"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                        />
                        <span>50K+ Writers</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-accent"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                        />
                        <span>100+ Countries</span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
                <p className="text-xs md:text-sm text-foreground/60 font-medium tracking-wider">SCROLL TO EXPLORE</p>
                <motion.div
                    className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                    <motion.div
                        className="w-1 h-2 bg-accent rounded-full mt-2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HeroSection
