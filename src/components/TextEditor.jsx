import { motion } from "motion/react"
import { Bold, Italic, Underline, Heading2, List, Quote, Code, Link as LinkIcon, Save, ArrowLeft } from "lucide-react"
import { Link } from 'react-router-dom'

const TextEditor = () => {

    const formatTools = [
        { icon: Bold, label: "Bold", key: "b" },
        { icon: Italic, label: "Italic", key: "i" },
        { icon: Underline, label: "Underline", key: "u" },
        { icon: Heading2, label: "Heading", key: "h" },
        { icon: Quote, label: "Quote", key: "q" },
        { icon: List, label: "List", key: "l" },
        { icon: Code, label: "Code", key: "c" },
        { icon: LinkIcon, label: "Link", key: "k" },
    ]

    return (
        <div className="space-y-6">
            <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <motion.button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                >
                    <Link to="/">
                        <ArrowLeft className="w-5 h-5 text-foreground" />
                    </Link>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                    <Save className="w-4 h-4" />
                    Save Draft
                </motion.button>
            </motion.div>


            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <input
                    type="text"
                    placeholder="Story Title"
                    className="w-full text-4xl font-serif font-bold bg-transparent text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-accent rounded-lg px-4 py-2"
                />
            </motion.div>

            <motion.div
                className="flex gap-2 p-4 bg-card rounded-lg border border-border sticky top-24 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {formatTools.map((tool) => {
                    const Icon = tool.icon

                    return (
                        <motion.button
                            key={tool.key}
                            className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground hover:text-accent"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title={tool.label}
                        >
                            <Icon className="w-4 h-4" />
                        </motion.button>
                    )
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
            >
                <textarea
                    placeholder="Tell your story... Start writing and watch it come to life."
                    className="w-full min-h-96 p-6 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-accent resize-none font-sans text-lg leading-relaxed"
                />
            </motion.div>
        </div>
    )
}

export default TextEditor