"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // ✅ Smooth scroll handler for section links
  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === "/") {
      router.push("/");
      return;
    }

    if (pathname !== "/") {
      router.push(`/${href}`);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  // ✅ Accessible, SEO-friendly link list
  const navLinks = [
    { name: "Home", href: "/", title: "Go to WorknConnect Home Page" },
    { name: "How it Works", href: "#how", title: "Learn How WorknConnect Works" },
    { name: "About Us", href: "#about", title: "About WorknConnect Platform" },
    { name: "Contact", href: "#contact", title: "Contact WorknConnect Team" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-gray-200" : "border-b border-gray-100"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">
        {/* ✅ SEO Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="WorknConnect Homepage"
        >
          <div
            className="w-3 h-3 bg-blue-600 rounded-sm rotate-45"
            aria-hidden="true"
          ></div>
          <span className="text-xl font-semibold text-gray-900 tracking-tight">
            WorknConnect
          </span>
        </Link>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              title={link.title}
              aria-label={link.title}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-3">
            <Link
              href="/signup"
              title="Create an account on WorknConnect"
              className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              title="Log in to your WorknConnect account"
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Divider Line */}
      <motion.div
        className="h-0.5 bg-gray-200 w-full"
        animate={{ opacity: isScrolled ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      />

      {/* ✅ Mobile Menu */}
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
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                title={link.title}
                aria-label={link.title}
                className="block text-gray-800 text-lg font-medium hover:text-blue-600 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col space-y-3">
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                title="Create an account on WorknConnect"
                className="w-full py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                title="Log in to your WorknConnect account"
                className="w-full py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Log In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
