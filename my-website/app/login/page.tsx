"use client";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface LoginCredentials {
    email: string;
    password: string;
}

export default function LoginPage() {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: "",
        password: ""
    });
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const router = useRouter();

    // Mouse position for interactive background
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        setError("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!credentials.email || !credentials.password) {
            setError("Email and password are required");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                // Redirect after success animation
                setTimeout(() => {
                    router.push("/dashboard");
                    router.refresh(); // Refresh to update middleware/auth state
                }, 1000);
            } else {
                setError(data.message || "Invalid credentials");
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError("Login failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden bg-dark-bg">
            {/* Interactive Background */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15) 0%, rgba(15, 23, 42, 0) 50%)`
                }}
            />

            {/* Animated Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/30 rounded-full blur-[100px] animate-pulse-slowmix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-neon/10 rounded-full blur-[120px] animate-pulse-slow delay-2000" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="group inline-block">
                        <motion.h1
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon via-primary-400 to-cyber-purple drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                            animate={{ backgroundPosition: ["0% center", "200% center"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% auto" }}
                        >
                            MyWebsite
                        </motion.h1>
                    </Link>
                    <h2 className="mt-6 text-2xl font-bold text-white tracking-wide">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Enter the portal to continue
                    </p>
                </div>

                <div className="relative">
                    {/* Glass Card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyber-purple/20 rounded-2xl blur-xl transform -rotate-1"></div>
                    <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 py-8 px-4 sm:rounded-2xl sm:px-10 shadow-2xl ring-1 ring-white/5">

                        <AnimatePresence mode="wait">
                            {success ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-10"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 12 }}
                                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/30"
                                    >
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-2">Login Successful!</h3>
                                    <p className="text-slate-400">Redirecting to dashboard...</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                                            Email address
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-cyber-purple rounded-lg blur opacity-0 group-focus-within:opacity-50 transition duration-500"></div>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={credentials.email}
                                                onChange={handleChange}
                                                className="relative block w-full px-4 py-3 border border-slate-700/50 rounded-lg bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:ring-0 focus:border-transparent transition-all shadow-inner"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                                            Password
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-cyber-purple rounded-lg blur opacity-0 group-focus-within:opacity-50 transition duration-500"></div>
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                value={credentials.password}
                                                onChange={handleChange}
                                                className="relative block w-full px-4 py-3 border border-slate-700/50 rounded-lg bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:ring-0 focus:border-transparent transition-all shadow-inner"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-slate-700 text-primary-600 focus:ring-primary-500 bg-slate-900/80"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <Link href="#" className="font-medium text-primary-400 hover:text-primary-300 hover:underline transition-all">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>

                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-lg text-sm flex items-center"
                                        >
                                            <svg className="w-5 h-5 mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {error}
                                        </motion.div>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-bold text-white overflow-hidden shadow-lg shadow-primary-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 animate-gradient w-[200%] h-full"></div>
                                            <span className="relative flex items-center">
                                                {loading ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Authenticating...
                                                    </>
                                                ) : "Sign in"}
                                            </span>
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>

                        {!success && (
                            <div className="mt-8 text-center">
                                <p className="text-slate-400 text-sm">
                                    Don't have an account?{' '}
                                    <Link href="/contact" className="text-cyber-neon font-medium hover:text-white transition-colors">
                                        Contact Support
                                    </Link>
                                </p>
                            </div>
                        )}

                        <div className="mt-6 border-t border-white/5 pt-6 text-center">
                            <Link
                                href="/"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center gap-2 group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}