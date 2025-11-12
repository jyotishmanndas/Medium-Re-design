import { motion } from "framer-motion"

const NarativePanel = ({mode})=> {
    const narratives = {
        login: [
            {
                icon: "📖",
                title: "Continue Reading",
                description: "Pick up where you left off and explore stories that matter to you.",
            },
            {
                icon: "💭",
                title: "Your Thoughts Matter",
                description: "Engage with writers, share your perspective, and be part of the conversation.",
            },
            {
                icon: "🌟",
                title: "Personalized Experience",
                description: "Discover stories tailored to your interests and reading habits.",
            },
        ],
        signup: [
            {
                icon: "✍️",
                title: "Share Your Voice",
                description: "Write stories that resonate with millions of readers worldwide.",
            },
            {
                icon: "🤝",
                title: "Build Community",
                description: "Connect with fellow writers and readers who share your passion.",
            },
            {
                icon: "💰",
                title: "Monetize Your Ideas",
                description: "Earn from your stories and build a sustainable writing career.",
            },
        ],
    }

    const items = narratives[mode]

    const containerVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <motion.div
            className="hidden lg:flex flex-col justify-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div>
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                    {mode === "login" ? "Welcome back to the story" : "Your story starts here"}
                </motion.h1>
                <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed">
                    {mode === "login"
                        ? "Reconnect with ideas that inspire, engage with writers you admire, and continue your journey of discovery."
                        : "Join millions of readers and writers who are reshaping how we think, learn, and connect through the power of storytelling."}
                </motion.p>
            </div>


            <motion.div className="space-y-6">
                {items.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex gap-4">
                        <motion.div
                            className="text-4xl"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: index * 0.1 }}
                        >
                            {item.icon}
                        </motion.div>
                        <div>
                            <h3 className="text-lg font-display font-bold text-foreground mb-1">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8 }}
            />
        </motion.div>
    )
}


export default NarativePanel