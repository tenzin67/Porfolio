import { motion } from 'framer-motion';

export default function BentoCard({ children, className = '', title, ...props }) {
    return (
        <motion.div 
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`bg-white rounded-2xl p-8 border border-japan-light-gray/50 flex flex-col shadow-sm hover:shadow-xl hover:border-japan-light-gray transition-all duration-300 ${className}`}
            {...props}
        >
            {title && (
                <h3 className="text-sm font-mono text-japan-stone uppercase tracking-wider mb-6">
                    {title}
                </h3>
            )}
            {children}
        </motion.div>
    );
}
