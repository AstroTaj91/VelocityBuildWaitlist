"use client";

import ScoutingReportPreview from "./ScoutingReportPreview";
import BuildCalculator from "./BuildCalculator";
import BuildComparison from "./BuildComparison";

export default function FeaturePreviews() {
    return (
        <section className="py-24 bg-transparent px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Beta Features
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Get exclusive early access to our AI-powered tools for smarter, faster building.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ScoutingReportPreview />
                    <BuildCalculator />
                    <BuildComparison />
                </div>
            </div>
        </section>
    );
}
