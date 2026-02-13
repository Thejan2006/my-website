"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data.message || "Error sending message");
            }
        } catch (error) {
            console.error(error);
            setStatus("Error sending message");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center justify-center">
            {/* Background Animations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-neon/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyber-pink/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-screen" />
            </div>

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white space-y-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-pink animate-gradient bg-[length:200%_auto]">Talk</span>
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card p-6 flex items-start space-x-4 hover:bg-white/5 transition-colors border border-white/5 hover:border-cyber-neon/30 group">
                            <div className="bg-cyber-neon/10 p-3 rounded-lg text-cyber-neon group-hover:scale-110 transition-transform">
                                📍
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white group-hover:text-cyber-neon transition-colors">Visit Us</h3>
                                <p className="text-slate-400">123 Innovation Drive<br />Tech City, TC 90210</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-start space-x-4 hover:bg-white/5 transition-colors border border-white/5 hover:border-cyber-pink/30 group">
                            <div className="bg-cyber-pink/10 p-3 rounded-lg text-cyber-pink group-hover:scale-110 transition-transform">
                                📧
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white group-hover:text-cyber-pink transition-colors">Email Us</h3>
                                <p className="text-slate-400">hello@mywebsite.com<br />support@mywebsite.com</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-start space-x-4 hover:bg-white/5 transition-colors border border-white/5 hover:border-cyber-yellow/30 group">
                            <div className="bg-cyber-yellow/10 p-3 rounded-lg text-cyber-yellow group-hover:scale-110 transition-transform">
                                📞
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white group-hover:text-cyber-yellow transition-colors">Call Us</h3>
                                <p className="text-slate-400">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="glass-card p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-neon/10 rounded-full blur-3xl -z-10"></div>
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-600 transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-600 transition-all"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-600 transition-all resize-none"
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-lg text-lg font-bold text-white overflow-hidden shadow-lg shadow-cyber-neon/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon via-cyber-pink to-cyber-neon animate-gradient w-[200%] h-full"></div>
                            <span className="relative flex items-center z-10">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : "Send Message"}
                            </span>
                        </button>

                        {status && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-center mt-4 font-medium ${status.includes("success") ? "text-cyber-neon drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]" : "text-pink-500"
                                    }`}
                            >
                                {status}
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
