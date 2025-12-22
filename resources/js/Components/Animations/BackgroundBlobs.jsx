import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Top Left Blob */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-japan-beige/40 blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            {/* Bottom Right Blob */}
            <motion.div
                className="absolute top-[40%] -right-[10%] w-[35vw] h-[35vw] rounded-full bg-japan-light-gray/40 blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
             
            {/* Bottom Left Blob */}
            <motion.div
                className="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-japan-beige/30 blur-3xl mix-blend-multiply filter"
                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />
        </div>
    );
}
