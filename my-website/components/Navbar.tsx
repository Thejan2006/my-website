'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-pink animate-gradient bg-[length:200%_auto]">
              MyWebsite
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`${pathname === link.href
                    ? 'text-cyber-neon font-semibold'
                    : 'text-slate-300 hover:text-white'
                    } transition-colors duration-200`}
                >
                  {link.label}
                </motion.span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-neon shadow-[0_0_8px_rgba(0,243,255,0.8)]"
                  />
                )}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/50 px-4 py-2 rounded-lg hover:bg-cyber-neon/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-slate-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 bg-slate-900 border-t border-white/10"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`block py-3 px-4 ${pathname === link.href
                    ? 'bg-cyber-neon/10 text-cyber-neon'
                    : 'text-slate-300 hover:bg-white/5'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="p-4">
              <Link
                href="/login"
                className="block w-full text-center bg-cyber-neon/20 text-cyber-neon border border-cyber-neon/50 px-4 py-2 rounded-lg hover:bg-cyber-neon/30 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
