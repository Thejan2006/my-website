"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Simple auth check simulation or real check
        // In a real app, we would verify the token with an API call
        // For now, we assume if we reached here (middleware passed), we are good
        // But let's fetch messages to see if we are really authenticated
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch("/api/contact");
            if (response.status === 401) {
                router.push("/login");
                return;
            }
            const data = await response.json();
            if (response.ok) {
                setMessages(data.messages || []);
                setUser({ email: "admin@example.com" }); // Mock user for display since API doesn't return it in /contact
            }
        } catch (error) {
            console.error("Failed to fetch messages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        // Clear cookie
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        router.push("/login");
        router.refresh();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark-bg text-cyber-neon">
                <div className="animate-pulse">Loading dashboard...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-bg relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-neon/10 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-screen" />
            </div>

            <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-vivid-primary to-vivid-secondary flex items-center justify-center animate-pulse-slow shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                                <span className="text-xl">⚡</span>
                            </div>
                            <h1 className="text-2xl font-bold text-white tracking-widest uppercase">
                                Command <span className="text-vivid-accent">Center</span>
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                SYSTEM ONLINE
                            </div>
                            <span className="text-sm font-mono text-slate-400">
                                {user?.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 border border-red-500/50 rounded-lg text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium hover:shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                            >
                                Terminate Session
                            </button>
                            <Link
                                href="/"
                                className="text-sm text-vivid-accent hover:text-white transition-colors"
                            >
                                Live Site →
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

                {/* System Stats / Project Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full lg:w-1/3 space-y-6"
                >
                    <div className="glass-card p-6 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-50">
                            <svg className="w-16 h-16 text-vivid-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-vivid-primary">■</span> System Status
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1">
                                    <span>Server Load</span>
                                    <span>24%</span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                                    <div className="bg-vivid-primary h-1.5 rounded-full w-[24%] shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1">
                                    <span>Database Latency</span>
                                    <span>12ms</span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                                    <div className="bg-vivid-secondary h-1.5 rounded-full w-[12%] shadow-[0_0_10px_rgba(219,39,119,0.5)]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1">
                                    <span>Active Nodes</span>
                                    <span>8/8</span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                                    <div className="bg-vivid-accent h-1.5 rounded-full w-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-premium-gold">■</span> Recent Activities
                        </h3>
                        <div className="space-y-3">
                            {[
                                { action: "System Update", time: "2 mins ago", status: "Completed", color: "text-green-400" },
                                { action: "Firewall Scan", time: "15 mins ago", status: "Secure", color: "text-blue-400" },
                                { action: "User Login", time: "1 hour ago", status: "Verified", color: "text-purple-400" },
                            ].map((log, i) => (
                                <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
                                    <span className="text-slate-300">{log.action}</span>
                                    <div className="text-right">
                                        <div className={`text-xs font-mono ${log.color}`}>{log.status}</div>
                                        <div className="text-[10px] text-slate-500">{log.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Messages Feed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full lg:w-2/3 glass-card p-6 border border-white/10 flex flex-col"
                >
                    <div className="px-4 py-5 sm:px-6 border-b border-white/10 mb-6 flex justify-between items-center bg-black/20 rounded-t-lg">
                        <div>
                            <h2 className="text-xl font-bold text-white tracking-wide">
                                Incoming Transmissions
                            </h2>
                            <p className="mt-1 text-sm text-slate-400 font-mono">
                                // ENCRYPTED_CHANNEL // LISTENING...
                            </p>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                    </div>

                    {messages.length === 0 ? (
                        <div className="text-center py-20 bg-slate-900/30 rounded-lg border border-white/5 border-dashed">
                            <div className="text-6xl mb-4 opacity-50 grayscale">📡</div>
                            <p className="text-slate-500 font-mono">No signals detected in sector.</p>
                        </div>
                    ) : (
                        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={message.id || index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800/80 rounded-lg p-6 border border-white/5 hover:border-vivid-primary/50 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-vivid-primary to-vivid-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold border border-white/10 shadow-inner">
                                                {message.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-vivid-primary transition-colors">{message.name}</h3>
                                                <p className="text-xs font-mono text-vivid-accent opacity-70 cursor-pointer hover:opacity-100 flex items-center gap-1">
                                                    <span className="text-[10px]">✉</span> {message.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-sm font-mono text-slate-500 mt-2 md:mt-0 bg-black/20 px-2 py-1 rounded">
                                            {new Date(message.date).toLocaleString()}
                                        </div>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed pl-4 border-l border-white/10 ml-2 font-light">
                                        {message.message}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
}