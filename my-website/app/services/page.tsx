'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices',
      icon: '💻',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '📱',
      features: ['iOS & Android', 'React Native', 'User-Friendly', 'Cloud Integration']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that users love',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to grow your business online',
      icon: '📊',
      features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      title: 'E-Commerce',
      description: 'Complete online store solutions with payment integration',
      icon: '🛒',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory', 'Analytics']
    },
    {
      title: 'Consulting',
      description: 'Expert advice and guidance for your digital transformation',
      icon: '💡',
      features: ['Strategy', 'Technology', 'Process', 'Training']
    },
    {
      title: 'Manegement',
      description: 'Expert advice and guidance for your digital transformation',
      icon: '👨🏻‍💻',
      features: ['24/7 Support', 'Technology', 'Process', 'Clinet friendly']
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Animations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyber-neon/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyber-pink/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-screen" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-pink animate-gradient bg-[length:200%_auto]"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300"
          >
            Comprehensive digital solutions to help your business thrive
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8 group relative overflow-hidden border border-white/5 hover:border-vivid-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-vivid-primary/10 to-vivid-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-8 transform transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-vivid-accent transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed relative z-10 font-light">
                  {service.description}
                </p>

                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-slate-300 group-hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-vivid-secondary mr-3 shadow-[0_0_5px_#db2777]" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
          >
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-gold to-vivid-secondary">Work</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your unique vision and requirements.' },
              { step: '02', title: 'Planning', desc: 'Crafting a strategic roadmap for success.' },
              { step: '03', title: 'Execution', desc: 'Building with precision and cutting-edge tech.' },
              { step: '04', title: 'Launch', desc: 'Delivering excellence to the world.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors"
              >
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-white/5 mb-6 absolute -top-4 -right-4 select-none group-hover:scale-110 transition-transform duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-vivid-primary mb-3 group-hover:text-vivid-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-vivid-primary to-vivid-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 text-slate-300 relative z-10">
            Let's discuss how we can help bring your vision to life
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
