"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close hamburger when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "#how" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-gray-200" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-sm rotate-45"></div>
          <span className="text-xl font-semibold text-gray-900">WorknConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition">
              Log In
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Divider Line */}
      <motion.div
        className="h-0.5 bg-gray-200 w-full"
        animate={{ opacity: isScrolled ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[65px] left-0 right-0 mx-4 bg-white shadow-lg rounded-2xl p-6 space-y-5 md:hidden border border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 text-lg font-medium hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3">
              <button className="w-full py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
                Sign Up
              </button>
              <button className="w-full py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition">
                Log In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
