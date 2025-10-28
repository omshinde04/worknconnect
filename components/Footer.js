"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Gradient Glows */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10"
      >
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">WorknConnect</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bridging talent and opportunity — a future-focused platform that
            connects job seekers and employers seamlessly.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" className="hover:text-indigo-400">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-indigo-400">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-indigo-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#home" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-indigo-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="hover:text-indigo-400 transition">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Admin Access */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Admin Access</h4>
          <p className="text-sm text-gray-400 mb-4">
            Manage job postings, view seekers, and monitor platform insights.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white rounded-md text-sm font-semibold shadow-md hover:scale-105 transition-all"
          >
            Admin Login <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-indigo-400" />
              <a href="tel:+919373545159" className="hover:text-indigo-400">
                +91 9373545159
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-indigo-400" />
              <a href="mailto:shindeom052@gmail.com" className="hover:text-indigo-400">
                shindeom052@gmail.com
              </a>
            </li>
            <li>
              <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8 max-w-7xl mx-auto"></div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-sm text-gray-500 relative z-10"
      >
        <p>
          © {new Date().getFullYear()} <span className="text-white font-semibold">WorknConnect</span>. All rights reserved.
        </p>
        <p className="mt-2 text-gray-400">
          Designed & Managed by <span className="text-indigo-400 font-medium">Om Vilas Shinde</span> — CEO, WorknConnect
        </p>
      </motion.div>
    </footer>
  );
}
