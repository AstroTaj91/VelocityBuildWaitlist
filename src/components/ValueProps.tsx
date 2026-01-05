import { Shield, DollarSign, CheckCircle } from "lucide-react";

const props = [
    {
        icon: DollarSign,
        title: "True Costs",
        description: "No hidden surprises. Our AI analyzes local material and labor data for real-time accuracy."
    },
    {
        icon: Shield,
        title: "Verified Builders",
        description: "Trust every quote. We vet every builder on our platform for quality and reliability."
    },
    {
        icon: CheckCircle,
        title: "Code Compliant",
        description: "Build it right. Automatic checks against local building codes and regulations."
    }
];

export default function ValueProps() {
    return (
        <section className="py-24 bg-transparent border-y border-neutral-900/50 relative">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {props.map((prop, index) => (
                    <div key={index} className="flex flex-col items-center text-center group p-8 glass rounded-2xl transition-all duration-500 hover:border-neutral-700">
                        <div className="mb-6 p-4 rounded-full bg-neutral-900 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                            <prop.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{prop.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{prop.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
