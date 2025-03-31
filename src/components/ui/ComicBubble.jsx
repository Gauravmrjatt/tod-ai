// components/ui/ComicBubble.jsx
import { motion } from "framer-motion"
export const ComicBubble = ({ children }) => (
    <motion.div
        className="inline-block bg-white p-8 rounded-3xl border-4 border-black shadow-comic"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
    >
        {children}
    </motion.div>
)