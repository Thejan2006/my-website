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
      title: 'Modern Aesthetics',
      description: 'Clean lines and sophisticated color palettes that create a stunning visual impact.',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop'
    },
    {
      title: 'High Performance',
      description: 'Optimized experiences that load instantly and respond immediately to user interaction.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
    },
    {
      title: 'Fluid Motion',
      description: 'Silky smooth animations that guide the user journey with elegance and purpose.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400 selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
            style={{ pointerEvents: 'none' }}
          >
            <source src="https://www.pexels.com/download/video/3130284/" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              src="https://images.unsplash.com/photo-1659698328281-53fc377cebcb?q=80&w=1932&auto=format&fit=crop"
              alt="Modern Tech"
              className="w-full h-full object-cover opacity-30"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-blue-950/70 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-6 py-2 mb-8 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">
              🚀 The Future of Digital Design
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Design that <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient bg-[length:200%_auto]"
            >
              Inspires
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We blend architectural elegance with digital performance to create
            experiences that are as beautiful as they are functional.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/services"
              className="px-10 py-5 bg-gradient-to-r from-vivid-primary to-vivid-secondary rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Video & Tech Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-blue-1205">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Experience the <span className="text-vivid-accent">Future</span> of Design
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our approach combines fluid animations with structured layouts.
              Watch how we bring static elements to life with our unique design philosophy.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-blue-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vivid-accent animate-pulse" />
                Live Preview
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-vivid-secondary" />
                4K Resolution
              </div>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-vivid-primary/20 to-transparent z-10 pointer-events-none" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            >
              <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-[15px] rounded-full flex items-center justify-center border border-white/30">
                <span className="text-3xl">▶</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="py-32 px-4 bg-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Crafted for <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-vivid-secondary to-premium-gold">Excellence</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden h-[400px] shadow-2xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-vivid-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
