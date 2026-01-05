export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-black border-t border-neutral-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl font-bold tracking-tighter mb-2">VELOCITYBUILD.AI</span>
                    <p className="text-neutral-500 text-sm">© 2026 VelocityBuild. All rights reserved.</p>
                </div>

                <div className="flex gap-8 text-neutral-400 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>

                <div className="text-neutral-500 text-sm">
                    Privacy Policy • Terms of Service
                </div>
            </div>
        </footer>
    );
}
