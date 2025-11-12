import { motion } from "motion/react"
import { Globe, Lock, Eye } from "lucide-react"
import { useState } from "react"


const PublishPanel = ()=> {
    const [visibility, setVisibility] = useState("draft")
    const [tags, setTags] = useState(["Writing", "Stories"])

    return (
        <motion.div
            className="bg-card border border-border rounded-lg p-6 sticky top-24 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <h3 className="font-serif font-bold text-foreground mb-4">Publish Settings</h3>
            </div>

            <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Visibility</label>
                <div className="space-y-2">
                    {[
                        { value: "draft", label: "Draft", icon: Lock },
                        { value: "public", label: "Publish", icon: Globe },
                    ].map((option) => {
                        const Icon = option.icon
                        const isSelected = visibility === option.value

                        return (
                            <motion.button
                                key={option.value}
                                onClick={() => setVisibility(option.value)}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${isSelected ? "border-accent bg-accent/10" : "border-border hover:bg-muted"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Icon className={`w-4 h-4 ${isSelected ? "text-accent" : "text-muted-foreground"}`} />
                                <span className={isSelected ? "text-accent font-medium" : "text-foreground"}>{option.label}</span>
                            </motion.button>
                        )
                    })}
                </div>
            </div>


            <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Topics</label>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <motion.span
                            key={tag}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                            whileHover={{ scale: 1.05 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                </div>
                <p className="text-sm text-foreground line-clamp-2 font-medium mb-2">Your Story Title</p>
                <p className="text-xs text-muted-foreground">Est. reading time: 5 min</p>
            </div>

            <motion.button
                onClick={()=>{}}
                className={`w-full py-3 rounded-lg font-medium transition-all ${visibility === "public"
                    ? "bg-accent text-accent-foreground hover:shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {visibility === "public" ? "Publish Now" : "Save as Draft"}
            </motion.button>

            <p className="text-xs text-muted-foreground text-center">
                {visibility === "public" ? "Your story will be visible to all readers" : "Only you can see this draft"}
            </p>
        </motion.div>
    )
}


export default PublishPanel