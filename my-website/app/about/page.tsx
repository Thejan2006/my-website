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
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-20 px-4">
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700"
          >
            We're passionate about creating amazing digital experiences
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, we started with a simple mission: to create beautiful, 
              functional websites that help businesses thrive in the digital age.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Over the years, we've grown into a team of passionate designers, developers, 
              and strategists who are committed to delivering exceptional results for our clients.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to have worked with hundreds of clients across various 
              industries, helping them achieve their digital goals and grow their businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
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
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-6xl mb-4"
                >
                  {member.image}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
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
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{value}</h3>
                <p className="text-gray-600">
                  We believe in {value.toLowerCase()} and strive to embody it in everything we do.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
