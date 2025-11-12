import React from 'react'
import { motion } from "motion/react"
import { Users, ArrowRight, Sparkles } from "lucide-react"
import { Link } from 'react-router-dom'

const Community = () => {
    const writers = [
        {
            name: "Alex Morgan",
            role: "Technology Writer",
            avatar: "./images/technology.jpg",
            badge: "Featured",
        },
        {
            name: "Jordan Lee",
            role: "Culture & Society",
            avatar: "./images/cultural.png",
            badge: "Rising Star",
        },
        {
            name: "Casey Wilson",
            role: "Science & Innovation",
            avatar: "./images/science.jpeg",
            badge: null,
        },
        {
            name: "Riley Chen",
            role: "Personal Essays",
            avatar: "./images/Essays.jpeg",
            badge: "Featured",
        },
        {
            name: "Taylor Scott",
            role: "Business Strategy",
            avatar: "./images/business.jpeg",
            badge: null,
        },
        {
            name: "Morgan Davis",
            role: "Philosophy & Ideas",
            avatar: "./images/philosopher.jpeg",
            badge: "Influencer",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <section className="w-full py-48 bg-background relative overflow-hidden">
            <motion.div
                className="absolute top-40 left-1/4 w-72 h-72 bg-primary/6 rounded-full blur-3xl pointer-events-none"
                animate={{
                    y: [0, -50, 0],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="mb-24 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <motion.div
                            className="p-2 rounded-lg bg-accent/10 border border-accent/30"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                            <Users className="w-6 h-6 text-accent" />
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                            Voices That Shape
                            <br />
                            Our Community
                        </h2>
                    </div>
                    <p className="text-lg text-foreground/70 leading-relaxed font-light prose-editorial">
                        Meet the exceptional writers, thinkers, and storytellers who inspire our global community every single day
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {writers.map((writer, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="relative group" whileHover={{ y: -12 }}>
                            {/* Card container */}
                            <motion.div className="text-center cursor-pointer" whileHover={{ scale: 1.02 }}>
                                <motion.div
                                    className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden mb-4 mx-auto border-2 border-accent/30 group-hover:border-accent transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.img
                                        src={writer.avatar}
                                        alt={writer.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    <motion.div className="absolute inset-0 bg-linear-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                {/* Badge */}
                                {writer.badge && (
                                    <motion.div
                                        className="absolute -top-2 -right-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center gap-1 shadow-lg"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.08, type: "spring" }}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {writer.badge}
                                    </motion.div>
                                )}

                                {/* Name */}
                                <h3 className="font-serif font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-accent transition-colors duration-300">
                                    {writer.name}
                                </h3>

                                {/* Role */}
                                <p className="text-xs md:text-sm text-foreground/60 font-light">{writer.role}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="bg-card/50 border border-border/50 backdrop-blur-sm rounded-2xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</h4>
                            <p className="text-foreground/70 font-light">Active Writers</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</h4>
                            <p className="text-foreground/70 font-light">Monthly Readers</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <h4 className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</h4>
                            <p className="text-foreground/70 font-light">Countries</p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                to="/community"
                                className="flex items-center justify-center gap-2 w-full px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Explore the Community
                                <motion.div initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Link
                                to="/write"
                                className="flex items-center justify-center gap-2 w-full px-8 py-3 border-2 border-primary/50 hover:border-primary hover:bg-primary/5 text-foreground font-semibold rounded-lg transition-all duration-300"
                            >
                                Join as a Writer
                                <motion.div initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Community
