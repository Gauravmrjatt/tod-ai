// components/ui/AnimatedButton.jsx
import { motion } from "framer-motion"
export const AnimatedButton = ({ children }) => (
    <motion.button
        className="bg-yellow-400 text-black px-8 py-4 rounded-full text-2xl font-bold shadow-comic hover:shadow-comic-hover border-4 border-black"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.button>
)