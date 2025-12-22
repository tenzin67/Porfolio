import PortfolioLayout from '@/Layouts/PortfolioLayout';
import BentoCard from '@/Components/BentoCard';
import FadeIn from '@/Components/Animations/FadeIn';

export default function Design() {
    return (
        <PortfolioLayout title="UI & UX Projects">
            <FadeIn>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-12">
                     <div className="mb-12">
                        <a href="/" className="text-japan-stone hover:text-japan-ink transition-colors text-sm mb-4 inline-block">← Back to Home</a>
                        <h1 className="text-3xl sm:text-4xl font-bold text-japan-ink">UI & UX Design</h1>
                        <p className="text-japan-charcoal/80 mt-2 text-lg font-light">
                            Systems design, prototyping, and user interface frameworks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1: Home Dept UI */}
                        <BentoCard title="UI Framework" className="md:col-span-2 bg-japan-ink text-white">
                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Department of Home Website
                                    </h3>
                                    <p className="text-white/70 max-w-xl font-light">
                                        Designed the complete website structure, navigation, and page hierarchy in Figma before development. Built a reusable component system that streamlined the eventual React implementation.
                                    </p>
                                </div>
                                <span className="text-xs font-mono text-white/50 border border-white/20 px-3 py-1 rounded">
                                    FIGMA SYSTEM
                                </span>
                            </div>
                        </BentoCard>

                        {/* Project 2: Scholarship Platform */}
                        <BentoCard title="UX / Interface">
                            <h3 className="text-xl font-bold text-japan-ink mb-3">Scholarship & Mentorship Platform</h3>
                            <p className="text-japan-charcoal/80 font-light leading-relaxed mb-6">
                                Designed the user journey for senior students to share experiences and juniors to seek guidance. Focused on trust, clarity, and ease of access for students with varying technical literacy.
                            </p>
                            <div className="mt-auto">
                                <span className="text-xs font-mono text-japan-stone bg-japan-light-gray/30 px-2 py-1 rounded">UI/UX Design</span>
                            </div>
                        </BentoCard>

                         {/* Project 3: College Prototype */}
                        <BentoCard title="Prototyping">
                            <h3 className="text-xl font-bold text-japan-ink mb-3">Dalai Lama College Website</h3>
                            <p className="text-japan-charcoal/80 font-light leading-relaxed mb-6">
                                A comprehensive academic prototype covering admissions, departments, and student portals. Mapped out complex information architecture to ensure intuitive navigation for staff and students.
                            </p>
                            <div className="mt-auto">
                                <span className="text-xs font-mono text-japan-stone bg-japan-light-gray/30 px-2 py-1 rounded">Figma Prototype</span>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </FadeIn>
        </PortfolioLayout>
    );
}
