import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Lock, ArrowRight } from "lucide-react"

const AuthForm = ({mode}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 800))
        onSubmit?.(email, password)
        setLoading(false)
    }

    const containerVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    return (
        <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                    {mode === "login" ? "Welcome back" : "Join the movement"}
                </h2>
                <p className="text-muted-foreground">
                    {mode === "login"
                        ? "Sign in to access your stories and the stories that inspire you."
                        : "Create an account to start writing and connecting with the world."}
                </p>
            </motion.div>

            {mode === "signup" && (
                <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        required
                    />
                </motion.div>
            )}

            <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        required
                    />
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-foreground">Password</label>
                    {mode === "login" && (
                        <a href="#" className="text-sm text-accent hover:underline">
                            Forgot?
                        </a>
                    )}
                </div>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        required
                    />
                </div>
            </motion.div>

            <motion.button
                variants={itemVariants}
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground rounded-lg py-3 font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 group"
            >
                {loading ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                ) : (
                    <>
                        {mode === "login" ? "Sign In" : "Create Account"}
                        <motion.span
                            className="inline-block"
                            initial={{ x: -4, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.span>
                    </>
                )}
            </motion.button>

            <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <a href={mode === "login" ? "/signup" : "/signin"} className="text-accent font-semibold hover:underline">
                    {mode === "login" ? "Sign up" : "Sign in"}
                </a>
            </motion.p>
        </motion.form>
    )
}

export default AuthForm