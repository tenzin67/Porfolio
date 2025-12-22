import { Head } from '@inertiajs/react';

export default function PortfolioLayout({ children, title = 'Full Stack Developer' }) {
    return (
        <div className="min-h-screen bg-japan-off-white text-japan-charcoal font-sans antialiased selection:bg-japan-stone selection:text-white relative">
            <Head title={`Tenzin Palgyal - ${title}`} />

            <main className="pt-12 md:pt-20">
                {children}
            </main>

            <footer className="py-8 text-center">
                <p className="text-xs text-japan-stone/60">
                    &copy; {new Date().getFullYear()} Tenzin Palgyal.
                </p>
            </footer>
        </div>
    );
}
