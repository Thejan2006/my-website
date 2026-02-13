'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      title: 'Modern Design',
      description: 'Beautiful and responsive design that works on all devices',
      icon: '🎨'
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and performance with Next.js',
      icon: '⚡'
    },
    {
      title: 'Smooth Animations',
      description: 'Engaging animations powered by Framer Motion',
      icon: '✨'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyber-neon/30 bg-cyber-neon/10 text-cyber-neon text-sm font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(0,243,255,0.3)] animate-pulse-slow"
          >
            🚀 The Future of Web Design is Here
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tight"
          >
            Create <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-neon via-primary-400 to-cyber-purple animate-gradient bg-[length:200%_auto]">Something</span> <br />
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Extraordinary</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the next generation of web development with stunning animations,
            glassmorphism effects, and seamless navigation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-white/5 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000" />
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Us?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with visually stunning design to create unique digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 hover:border-primary-500/30 transition-colors group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-secondary-900/50 backdrop-blur-sm -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center bg-slate-800/50 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10">
            Ready to <span className="text-gradient">Transform</span> Your Idea?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of satisfied customers and start your journey with us today.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Start Project Now
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
