import { motion } from "motion/react"
import { Mail, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <section className="w-full py-32 bg-linear-to-b from-secondary/50 to-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
                    animate={{ y: [20, -20, 20] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
            </div>

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">Join thousands of writers</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Ready to share your story?</h2>

                    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                        Join a global community of writers, thinkers, and creators who are shaping the future of storytelling.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/signup"
                            className="px-8 py-3 bg-accent text-accent-foreground font-medium rounded-full hover:shadow-xl transition-all duration-300"
                        >
                            Start writing
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/newsletter"
                            className="flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent font-medium rounded-full hover:bg-accent/5 transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            Newsletter
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm text-muted-foreground mt-8"
                >
                    No credit card required. Join free today.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-6 right-6 text-sm z-20 font-medium"
            >
                <span className="text-muted-foreground">Redesigned by:</span>{" "}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="font-semibold text-accent"
                >
                    Jyotishman Das
                </motion.span>
            </motion.div>
        </section>
    )
}

export default Footer