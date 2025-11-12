import { motion } from "motion/react"
import { Clock, Heart, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

const Article = () => {
    const articles = [
        {
            id: 1,
            title: "The Renaissance of Storytelling",
            excerpt:
                "Exploring how writers are reclaiming narrative power in the age of algorithms and discovering their authentic voice.",
            author: "Sarah Chen",
            category: "Culture",
            readTime: "8 min",
            likes: 2450,
            image: "./images/storytelling.jpeg",
            gradient: "from-accent to-primary",
        },
        {
            id: 2,
            title: "Why Community Matters More Than Ever",
            excerpt:
                "Building meaningful connections in a fragmented world through authentic writing and real human dialogue.",
            author: "Marcus Rivera",
            category: "Community",
            readTime: "12 min",
            likes: 3890,
            image: "./images/community.jpeg",
            gradient: "from-primary to-accent",
        },
        {
            id: 3,
            title: "The Art of Deep Reading",
            excerpt: "How to reclaim focus and depth in your reading practice amid endless digital distractions.",
            author: "Emma Thompson",
            category: "Writing",
            readTime: "6 min",
            likes: 1876,
            image: "./images/deepReading.jpeg",
            gradient: "from-accent/80 to-secondary",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }

    return (
        <section className="w-full bg-background relative overflow-hidden">
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    className="mb-24 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block text-sm font-semibold text-accent/80 tracking-widest mb-4 uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Featured Reading
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                        Stories That Inspire
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
                        Discover powerful narratives from exceptional writers exploring ideas that matter
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {articles.map((article, idx) => (
                        <motion.article key={article.id} variants={itemVariants} className="group h-full">
                            <Link href={`/article/${article.id}`}>
                                <motion.div
                                    className="relative h-64 rounded-2xl overflow-hidden mb-6 cursor-pointer"
                                    whileHover={{ scale: 1.04, y: -8 }}
                                    transition={{
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                >
                                    <motion.img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    <motion.div
                                        className={`absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
                                    />

                                    <motion.div
                                        className="absolute top-4 left-4 px-3 py-1.5 bg-accent/95 backdrop-blur-sm text-accent-foreground text-xs font-semibold rounded-full"
                                        initial={{ opacity: 0, y: -10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {article.category}
                                    </motion.div>

                                    <motion.div
                                        className="absolute bottom-4 right-4 p-2 rounded-full bg-foreground/20 backdrop-blur-sm text-foreground"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileHover={{ opacity: 1, scale: 1, rotate: 45 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className="flex flex-col h-full"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                            
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300 leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="text-foreground/70 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed font-light flex-grow">
                                        {article.excerpt}
                                    </p>

                                   
                                    <motion.div
                                        className="flex items-center justify-between text-xs text-foreground/60 pt-4 border-t border-border/40"
                                        initial={{ opacity: 0.6 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-medium text-foreground/80">{article.author}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span className="hidden sm:inline flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <motion.button
                                            className="p-1.5 rounded-full hover:bg-accent/20 transition-colors duration-200"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                            }}
                                        >
                                            <Heart className="w-4 h-4 hover:fill-accent hover:text-accent transition-colors" />
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>

                {/* View all button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/discover"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-accent/40 hover:border-accent text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-300 font-medium"
                        >
                            Explore More Articles
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Article