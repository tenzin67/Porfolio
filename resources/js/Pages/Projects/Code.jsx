import PortfolioLayout from '@/Layouts/PortfolioLayout';
import BentoCard from '@/Components/BentoCard';
import FadeIn from '@/Components/Animations/FadeIn';

export default function Code() {
    return (
        <PortfolioLayout title="Code Projects">
             <FadeIn>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-12">
                    <div className="mb-12">
                        <a href="/" className="text-japan-stone hover:text-japan-ink transition-colors text-sm mb-4 inline-block">← Back to Home</a>
                        <h1 className="text-3xl sm:text-4xl font-bold text-japan-ink">Projects</h1>
                        <p className="text-japan-charcoal/80 mt-2 text-lg font-light">
                             Full-stack applications, internal systems, and architectural implementations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1: Staff System */}
                        <BentoCard title="Internal System" className="md:col-span-2">
                             <div>
                                <h3 className="text-2xl font-bold text-japan-ink mb-4">
                                    All-in-One Staff, Project & Welfare Management
                                </h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <p className="text-japan-charcoal/80 mb-6 font-light leading-relaxed">
                                            A robust internal platform designed for long-term maintainability. I architected the role-based access control system to securely separate viewing permissions from administrative capabilities.
                                        </p>
                                        <ul className="space-y-2 text-sm text-japan-stone">
                                            <li className="flex items-start">
                                                <span className="mr-2 text-japan-charcoal">•</span>
                                                <span><strong>Role-Based Access:</strong> Senior roles restricted to view-only; Handlers/Executives granted full CRUD access.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-japan-charcoal">•</span>
                                                <span><strong>Tech Stack:</strong> Deep integration of Laravel, React, and Inertia.js for a seamless SPA feel within a monolithic structure.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-1 flex flex-col gap-2">
                                         {['Laravel', 'React', 'Inertia.js', 'PostgreSQL', 'Tailwind', 'Docker'].map(tag => (
                                            <span key={tag} className="text-xs font-mono text-japan-stone bg-japan-beige px-3 py-2 rounded block w-fit">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BentoCard>

                        {/* Project 2: Home Dept CMS */}
                        <BentoCard title="Content Management System" className="md:col-span-2">
                             <div>
                                <h3 className="text-2xl font-bold text-japan-ink mb-4">
                                    Department of Home Website — CMS
                                </h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <p className="text-japan-charcoal/80 mb-6 font-light leading-relaxed">
                                            Designed and deployed the official Department of Home information system. Structured specifically for non-technical staff to manage complex data hierarchies including staff profiles, settlement details, and news updates.
                                        </p>
                                        <ul className="space-y-2 text-sm text-japan-stone">
                                            <li className="flex items-start">
                                                <span className="mr-2 text-japan-charcoal">•</span>
                                                <span><strong>Workflow Focused:</strong> Implemented clear content workflows for maintaining settlement data, TSO profiles, and project information.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2 text-japan-charcoal">•</span>
                                                <span><strong>Production Live:</strong> Currently active as the central information hub for the department.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="md:col-span-1 flex flex-col gap-2">
                                         {['WordPress', 'CMS', 'Production', 'Information Arch'].map(tag => (
                                            <span key={tag} className="text-xs font-mono text-japan-stone bg-japan-beige px-3 py-2 rounded block w-fit">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BentoCard>

                        {/* Project 3: Restaurant Menu */}
                        <BentoCard title="React Application">
                            <h3 className="text-xl font-bold text-japan-ink mb-3">Test Tibet Restaurant — Menu App</h3>
                            <p className="text-japan-charcoal/80 font-light leading-relaxed mb-6">
                                A dynamic menu management application built with React. Focused on component reusability and clean state management. Allows for easy updates to menu items, prices, and categories.
                            </p>
                             <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="text-xs font-mono text-japan-stone bg-japan-beige px-2 py-1 rounded">React</span>
                                <span className="text-xs font-mono text-japan-stone bg-japan-beige px-2 py-1 rounded">JavaScript</span>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </FadeIn>
        </PortfolioLayout>
    );
}
