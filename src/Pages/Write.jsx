import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import TextEditor from "../components/TextEditor"
import PublishPanel from "../components/Publishpanel"


const Write = () => {
    return (
        <main className="w-full bg-background min-h-screen">
            <Navbar />
            <div className="pt-24 flex gap-8 max-w-7xl mx-auto px-6 pb-12">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <TextEditor />
                </motion.div>


                <motion.div
                    className="w-80 hidden lg:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <PublishPanel />
                </motion.div>
            </div>
        </main>
    )
}

export default Write
