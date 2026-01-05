"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [state, setState] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, state, comment }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Something went wrong");
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="waitlist-form" className="py-32 bg-transparent px-6">
            <div className="max-w-xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-blue-400 font-medium mb-2">
                        For Enterprise, join the waitlist for earlybird pricing and comment 'ENTERPRISE'
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join The Waitlist</h2>
                    <p className="text-neutral-400 mb-12">
                        Secure your spot in the future of home building. We're launching soon.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-4 text-left"
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">Email *</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="elon@spacex.com"
                                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-white transition-all text-white"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Jane Doe"
                                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-white transition-all text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-neutral-400 mb-1">State</label>
                                    <select
                                        id="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-white transition-all text-white appearance-none"
                                    >
                                        <option value="">Select State</option>
                                        {STATES.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="comment" className="block text-sm font-medium text-neutral-400 mb-1">Comment</label>
                                <textarea
                                    id="comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Tell us about your build project..."
                                    rows={3}
                                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-white transition-all text-white resize-none"
                                />
                            </div>

                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors duration-300 mt-4 disabled:opacity-50"
                            >
                                {loading ? "Registering..." : "Reserve My Spot"}
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-8 glass rounded-2xl border-white/10 text-center"
                        >
                            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">You're in.</h3>
                            <p className="text-neutral-400">We'll be in touch soon with your beta access details.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
