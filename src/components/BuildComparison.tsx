"use client";

import { motion } from "framer-motion";
import { Scale, Clock, DollarSign, Shield, CloudRain, Wallet } from "lucide-react";

const comparisons = [
    {
        factor: "Timeline",
        icon: Clock,
        traditional: "12–18 months",
        modular: "4–8 months",
        winner: "modular",
    },
    {
        factor: "Cost Variance",
        icon: DollarSign,
        traditional: "±20%",
        modular: "±5%",
        winner: "modular",
    },
    {
        factor: "Quality Control",
        icon: Shield,
        traditional: "On-site",
        modular: "Factory-controlled",
        winner: "modular",
    },
    {
        factor: "Weather Delays",
        icon: CloudRain,
        traditional: "High risk",
        modular: "Minimal",
        winner: "modular",
    },
    {
        factor: "Financing",
        icon: Wallet,
        traditional: "Traditional",
        modular: "Flexible",
        winner: "tie",
    },
];

export default function BuildComparison() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-neutral-800 lg:col-span-2"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-purple-500/20">
                    <Scale className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Build Comparison</h3>
                    <p className="text-neutral-400 text-sm">Traditional vs. Modular construction</p>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-neutral-800">
                            <th className="text-left py-3 px-4 text-neutral-400 font-medium">Factor</th>
                            <th className="text-center py-3 px-4 text-neutral-400 font-medium">Traditional</th>
                            <th className="text-center py-3 px-4 text-neutral-400 font-medium">Modular</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisons.map((row, i) => (
                            <tr key={i} className="border-b border-neutral-800/50">
                                <td className="py-4 px-4">
                                    <div className="flex items-center gap-2">
                                        <row.icon className="w-4 h-4 text-neutral-500" />
                                        <span className="text-white font-medium">{row.factor}</span>
                                    </div>
                                </td>
                                <td className={`text-center py-4 px-4 ${row.winner === "traditional" ? "text-green-400" : "text-neutral-400"}`}>
                                    {row.traditional}
                                </td>
                                <td className={`text-center py-4 px-4 ${row.winner === "modular" ? "text-green-400 font-semibold" : "text-neutral-400"}`}>
                                    {row.modular}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-neutral-500 text-sm mt-4 text-center">
                Modular construction offers significant advantages in speed, predictability, and quality.
            </p>
        </motion.div>
    );
}
