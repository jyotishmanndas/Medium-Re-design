import React from 'react'
import { useRef } from "react"
import { Sparkles, Globe, Users, BookOpen } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"

const ScrollSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const sections = [
        {
            icon: Sparkles,
            title: "The Power of Ideas",
            subtitle: "Where Every Thought Becomes a Story",
            description:
                "Ideas are the currency of human progress. On Medium, every perspective matters. Every voice deserves to resonate across the globe, sparking conversations that change how we think.",
            accent: "accent",
        },
        {
            icon: Globe,
            title: "Voices from Everywhere",
            subtitle: "A Global Community of Storytellers",
            description:
                "Connect with exceptional writers from every corner of the world. Discover perspectives shaped by different cultures, experiences, and insights. Read stories that challenge, inspire, and expand your worldview.",
            accent: "primary",
        },
        {
            icon: Users,
            title: "Join the Movement",
            subtitle: "Write, Share, and Inspire",
            description:
                "Be part of a thriving community that celebrates thoughtful writing and authentic dialogue. Share your insights, build your audience, and become part of a global conversation that matters.",
            accent: "accent",
        },
        {
            icon: BookOpen,
            title: "Create Your Legacy",
            subtitle: "Your Stories Shape the Future",
            description:
                "Whether you're a first-time writer or a seasoned author, Medium is your platform. Write freely, reach widely, and build a meaningful connection with readers who genuinely care about your words.",
            accent: "secondary",
        },
    ]

    const offsets = sections.map((_, idx) =>
        useTransform(scrollYProgress, [0, 1], [120 * (idx * 0.15), -80 * (idx * 0.15)]),
    )

    return (
        <section ref={containerRef} className="relative w-full py-48 bg-background overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Introduction */}
                <motion.div
                    className="mb-40 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                        The Story of Medium
                    </motion.h2>
                    <motion.p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
                        Scroll through the narrative of how Medium became the platform where meaningful writing thrives
                    </motion.p>
                </motion.div>

                {sections.map((section, idx) => {
                    const Icon = section.icon
                    const offset = offsets[idx]
                    const accentColor =
                        section.accent === "accent"
                            ? "bg-accent/10 border-accent/30"
                            : section.accent === "primary"
                                ? "bg-primary/10 border-primary/30"
                                : "bg-secondary/10 border-secondary/30"
                    const textColor =
                        section.accent === "accent"
                            ? "text-accent"
                            : section.accent === "primary"
                                ? "text-primary"
                                : "text-secondary"

                    return (
                        <motion.div key={idx} className="relative mb-48 last:mb-0" style={{ y: offset }}>
                            {/* Background accent line */}
                            <motion.div
                                className="absolute -left-20 top-0 bottom-0 w-1 bg-linear-to-b from-accent/0 via-accent/30 to-accent/0"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.2 }}
                                style={{ originY: 0 }}
                            />

                            {/* Section Number */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block text-sm font-serif font-bold text-accent/60 tracking-wider">
                                    {String(idx + 1).padStart(2, "0")} — {section.subtitle}
                                </span>
                            </motion.div>

                            {/* Main Content Container */}
                            <motion.div
                                className="grid md:grid-cols-2 gap-12 items-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Left side: Text */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    <div className="flex items-start gap-6">
                                        <motion.div
                                            className={`flex-shrink-0 p-4 rounded-lg border ${accentColor} backdrop-blur-sm`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            <Icon className={`w-8 h-8 ${textColor}`} />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                                                {section.title}
                                            </h3>
                                            <p className="text-lg text-foreground/75 leading-relaxed font-light prose-editorial">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right side: Visual element */}
                                <motion.div
                                    className={`relative h-72 rounded-2xl border ${accentColor} backdrop-blur-sm overflow-hidden`}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {/* Gradient orb animation */}
                                    <motion.div
                                        className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-40 ${section.accent === "accent"
                                                ? "bg-accent"
                                                : section.accent === "primary"
                                                    ? "bg-primary"
                                                    : "bg-secondary"
                                            }`}
                                        animate={{
                                            x: [0, 30, -20, 0],
                                            y: [0, -30, 20, 0],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Icon showcase */}
                                    <div className="relative h-full flex items-center justify-center">
                                        <motion.div
                                            animate={{
                                                y: [0, -15, 0],
                                                opacity: [0.8, 1, 0.8],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Icon className={`w-32 h-32 ${textColor} opacity-30`} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Bottom accent bar */}
                            <motion.div
                                className={`h-1 bg-linear-to-r ${section.accent === "accent"
                                        ? "from-accent to-accent/0"
                                        : section.accent === "primary"
                                            ? "from-primary to-primary/0"
                                            : "from-secondary to-secondary/0"
                                    } rounded-full mt-12`}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                style={{ originX: 0 }}
                            />
                        </motion.div>
                    )
                })}
            </div>

            {/* Background decoration */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
        </section>
    )
}

export default ScrollSection
