import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || 
                e.target.tagName === 'A' || 
                e.target.closest('button') || 
                e.target.closest('a')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />

            {/* Outer cursor ring */}
            <motion.div
                className="fixed w-8 h-8 border-2 border-accent/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "rgba(96, 125, 139, 0.6)" : "rgba(96, 125, 139, 0.3)"
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
        </>
    )
}

export default CustomCursor