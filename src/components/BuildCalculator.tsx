"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Home, Building2 } from "lucide-react";

const buildTypes = [
    { id: "barndo", label: "Barndominium", pricePerSqFt: 85 },
    { id: "modular", label: "Modular", pricePerSqFt: 120 },
    { id: "traditional", label: "Traditional", pricePerSqFt: 180 },
];

export default function BuildCalculator() {
    const [sqFt, setSqFt] = useState(2000);
    const [units, setUnits] = useState(1);
    const [buildType, setBuildType] = useState("barndo");

    const selectedType = buildTypes.find((t) => t.id === buildType)!;
    const totalCost = sqFt * units * selectedType.pricePerSqFt;

    const scrollToForm = () => {
        document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 border border-neutral-800"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-emerald-500/20">
                    <Calculator className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Build Calculator</h3>
                    <p className="text-neutral-400 text-sm">Instant cost estimates</p>
                </div>
            </div>

            {/* Build Type Selector */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-400 mb-2">Build Type</label>
                <div className="grid grid-cols-3 gap-2">
                    {buildTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setBuildType(type.id)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${buildType === type.id
                                    ? "bg-white text-black"
                                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                                }`}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sq Ft Slider */}
            <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                    <label className="text-neutral-400">Square Footage</label>
                    <span className="text-white font-semibold">{sqFt.toLocaleString()} sq ft</span>
                </div>
                <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    value={sqFt}
                    onChange={(e) => setSqFt(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-700 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
            </div>

            {/* Units Slider */}
            <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                    <label className="text-neutral-400">Number of Units</label>
                    <span className="text-white font-semibold">{units}</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="50"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-700 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
            </div>

            {/* Estimate Display */}
            <div className="bg-neutral-900/50 rounded-xl p-4 mb-6 border border-neutral-800 text-center">
                <p className="text-neutral-400 text-sm mb-1">Estimated Total</p>
                <p className="text-3xl font-bold text-emerald-400">${totalCost.toLocaleString()}</p>
                <p className="text-neutral-500 text-xs mt-1">
                    ${selectedType.pricePerSqFt}/sq ft × {sqFt.toLocaleString()} sq ft × {units} unit{units > 1 ? "s" : ""}
                </p>
            </div>

            <button
                onClick={scrollToForm}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
            >
                Get Detailed Quote →
            </button>
        </motion.div>
    );
}
