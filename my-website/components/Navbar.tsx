'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-vivid-primary to-vivid-secondary flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-vivid-accent transition-colors">
                My<span className="text-vivid-secondary">Website</span>
              </span>
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
                  className={`text-sm font-medium tracking-wide ${pathname === link.href
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white'
                    } transition-colors duration-200`}
                >
                  {link.label}
                </motion.span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-vivid-primary to-vivid-secondary shadow-[0_0_10px_rgba(219,39,119,0.5)]"
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full opacity-50" />
              </Link>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="relative px-6 py-2.5 overflow-hidden rounded-full group bg-white/5 border border-white/10 hover:border-vivid-primary/50 transition-colors"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-vivid-primary/20 to-vivid-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-sm font-bold text-white group-hover:text-white transition-colors">
                  Login
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
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
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 px-4 rounded-xl text-base font-medium ${pathname === link.href
                  ? 'bg-gradient-to-r from-vivid-primary/20 to-vivid-secondary/20 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10">
            <Link
              href="/login"
              className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-vivid-primary to-vivid-secondary text-white font-bold shadow-lg shadow-vivid-primary/25"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
