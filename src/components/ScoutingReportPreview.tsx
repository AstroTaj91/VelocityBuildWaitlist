"use client";

import { motion } from "framer-motion";
import { FileSearch, CheckCircle, AlertTriangle, MapPin } from "lucide-react";

const sampleData = {
    projectName: "Sunset Ridge Development",
    location: "Austin, TX",
    acreage: "12.4 acres",
    zoning: "R-2 Residential",
    findings: [
        { label: "Zoning Compatibility", status: "pass" },
        { label: "Utility Access", status: "pass" },
        { label: "Environmental Review", status: "warning" },
        { label: "Soil Stability", status: "pass" },
    ],
};

export default function ScoutingReportPreview() {
    const scrollToForm = () => {
        document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-neutral-800"
        >
            <div className="flex items-start gap-3 mb-6">
                <div className="p-3 rounded-full bg-blue-500/20">
                    <FileSearch className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Scouting Report Generator</h3>
                    <p className="text-neutral-400 text-sm mb-4">AI-powered land feasibility analysis</p>
                    <ul className="space-y-2 text-sm text-neutral-300">
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            30% Time Saved on Average
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            15% Cost Saving Average
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            Builders Intelligence™
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sample Report Preview */}
            <div className="bg-neutral-900/50 rounded-xl p-6 mb-6 border border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="text-lg font-semibold text-white">{sampleData.projectName}</h4>
                        <div className="flex items-center gap-2 text-neutral-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            {sampleData.location} • {sampleData.acreage}
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {sampleData.zoning}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {sampleData.findings.map((finding, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                            {finding.status === "pass" ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                            )}
                            <span className="text-neutral-300">{finding.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollToForm}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
            >
                Generate Your Report →
            </button>
        </motion.div>
    );
}
