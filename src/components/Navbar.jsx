import React from 'react'
import { useState } from "react"
import { motion } from "motion/react"
import { Menu, X, BookOpen } from "lucide-react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-40 bg-background/50 backdrop-blur-md border-b border-border"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <motion.div
                        className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1 }}
                    >
                        <BookOpen className="w-5 h-5" />
                    </motion.div>
                    <span className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        Medium
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/write" className="text-md font-medium text-foreground hover:text-accent transition-colors">
                        Write
                    </Link>
                    <Link to="/community" className="text-md font-medium text-foreground hover:text-accent transition-colors">
                        Community
                    </Link>
                    <Link to="/about" className="text-md font-medium text-foreground hover:text-accent transition-colors">
                        About
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to="/signin"
                        className="hidden sm:inline text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                        Sign in
                    </Link>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/signup"
                            className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium text-sm hover:shadow-lg transition-shadow"
                        >
                            Get started
                        </Link>
                    </motion.div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-border overflow-hidden"
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    <Link to="/discover" className="text-foreground hover:text-accent transition-colors">
                       Write
                    </Link>
                    <Link to="/community" className="text-foreground hover:text-accent transition-colors">
                        Community
                    </Link>
                    <Link to="/about" className="text-foreground hover:text-accent transition-colors">
                        About
                    </Link>
                    <Link to="/login" className="text-foreground hover:text-accent transition-colors">
                        Sign in
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar
