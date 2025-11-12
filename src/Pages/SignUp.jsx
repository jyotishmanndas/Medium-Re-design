import { motion } from "framer-motion"
import NarativePanel from "../components/NarativePannel"
import AuthForm from "../components/Auth-form"
import { useState } from "react"

const Signup = () => {
    const [mode, setMode] = useState("signup")
    return (
        <main className="min-h-screen bg-linear-to-br from-background via-background to-card">
            <div className="grid lg:grid-cols-2 min-h-screen gap-12">
                {/* Left side */}
                <motion.div className="hidden lg:flex items-center justify-center px-12 relative overflow-hidden">
                    <NarativePanel mode={mode} />
                </motion.div>

                {/* Right side */}
                <motion.div
                    className="flex items-center justify-center px-6 md:px-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-full max-w-md">
                        <AuthForm mode={mode} />
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

export default Signup
