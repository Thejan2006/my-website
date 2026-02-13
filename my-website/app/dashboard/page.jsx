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

            <nav className="bg-slate-900/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-pink">
                                Admin Dashboard
                            </h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <span className="text-sm text-slate-400">
                                {user?.email}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 border border-red-500/50 rounded-lg text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium"
                            >
                                Logout
                            </button>
                            <Link
                                href="/"
                                className="text-sm text-cyber-neon hover:text-white transition-colors"
                            >
                                View Site
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-6 border border-white/10"
                >
                    <div className="px-4 py-5 sm:px-6 border-b border-white/10 mb-6">
                        <h2 className="text-xl font-bold text-white">
                            Contact Form Messages
                        </h2>
                        <p className="mt-1 text-sm text-slate-400">
                            Messages received from the website contact form (stored in server memory)
                        </p>
                    </div>

                    {messages.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-4xl mb-4">📭</div>
                            <p className="text-slate-500">No messages yet</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={message.id || index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800/50 rounded-lg p-6 border border-white/5 hover:border-cyber-neon/30 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-cyber-neon/20 flex items-center justify-center text-cyber-neon font-bold">
                                                {message.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{message.name}</h3>
                                                <p className="text-sm text-cyber-neon">{message.email}</p>
                                            </div>
                                        </div>
                                        <div className="text-sm text-slate-500 mt-2 md:mt-0">
                                            {new Date(message.date).toLocaleString()}
                                        </div>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed pl-13 border-l-2 border-white/10 pl-4 ml-2">
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