import { motion } from 'framer-motion';

export const StaggerContainer = ({ children, className = '' }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                        duration: 0.6, 
                        ease: [0.16, 1, 0.3, 1] 
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
