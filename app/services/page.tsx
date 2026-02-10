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
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4">
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700"
          >
            Comprehensive digital solutions to help your business thrive
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-blue-600 mr-2">✓</span>
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Our Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs' },
              { step: '02', title: 'Planning', desc: 'Creating the strategy' },
              { step: '03', title: 'Execution', desc: 'Building the solution' },
              { step: '04', title: 'Launch', desc: 'Delivering results' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl font-bold text-blue-600 mb-4"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help bring your vision to life
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
