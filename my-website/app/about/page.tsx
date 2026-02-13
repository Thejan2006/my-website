'use client';

import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO & Founder', image: '👩‍💼' },
    { name: 'Bob Smith', role: 'CTO', image: '👨‍💻' },
    { name: 'Carol Williams', role: 'Design Lead', image: '👩‍🎨' },
    { name: 'David Brown', role: 'Developer', image: '👨‍🔧' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyber-pink/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyber-neon/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-screen" />
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300"
          >
            We're passionate about creating amazing digital experiences
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-lg text-slate-300 mb-4">
              Founded in 2020, we started with a simple mission: to create beautiful,
              functional websites that help businesses thrive in the digital age.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              Over the years, we've grown into a team of passionate designers, developers,
              and strategists who are committed to delivering exceptional results for our clients.
            </p>
            <p className="text-lg text-slate-300">
              Today, we're proud to have worked with hundreds of clients across various
              industries, helping them achieve their digital goals and grow their businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 text-center hover:bg-white/5 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-4"
                >
                  {member.image}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyber-neon">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Our Values
          </motion.h2>

          <div className="space-y-8">
            {['Innovation', 'Quality', 'Integrity', 'Collaboration'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 flex items-center space-x-6 hover:bg-white/5 transition-colors"
              >
                <div className="text-3xl bg-cyber-yellow/20 p-4 rounded-full text-cyber-yellow shadow-[0_0_10px_rgba(252,238,10,0.3)]">
                  ✨
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
                  <p className="text-slate-300">
                    We believe in {value.toLowerCase()} and strive to embody it in everything we do.
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
