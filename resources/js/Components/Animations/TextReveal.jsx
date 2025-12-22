import { motion } from 'framer-motion';

export default function TextReveal({ text, className = '' }) {
    // Split text into words, then characters to handle spacing correctly
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap overflow-hidden pb-4 ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <div key={index} className="mr-2 lg:mr-4 py-1"> {/* Margin right for word spacing, py-1 for descenders */}
                    {word.split("").map((character, charIndex) => (
                        <motion.span
                            variants={child}
                            key={charIndex}
                            className="inline-block"
                        >
                            {character}
                        </motion.span>
                    ))}
                </div>
            ))}
        </motion.div>
    );
}
