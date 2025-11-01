"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Info, Phone, HelpCircle, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (window.scrollY > lastScrollY.current) {
        // Scrolling down → hide
        setShowBottomNav(false);
      } else {
        // Scrolling up → show
        setShowBottomNav(true);
      }
      lastScrollY.current = window.scrollY;

      // ✅ Auto show bottom navbar when user stops scrolling
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowBottomNav(true);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

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
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} />, title: "Home" },
    { name: "How", href: "#how", icon: <HelpCircle size={18} />, title: "How It Works" },
    { name: "About", href: "#about", icon: <Info size={18} />, title: "About Us" },
    { name: "Contact", href: "#contact", icon: <Phone size={18} />, title: "Contact" },
  ];

  return (
    <>
      {/* ✅ Top Navbar (Desktop Only) */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-sm border-b border-gray-200" : "border-b border-gray-100"
        } hidden md:block`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Homepage">
            <div className="w-3 h-3 bg-blue-600 rounded-sm rotate-45"></div>
            <span className="text-xl font-semibold text-gray-900 tracking-tight">
              WorknConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                title={link.title}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-3">
              <Link
                href="/signup"
                className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ✅ Bottom Navbar (Mobile Only, compact size) */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showBottomNav ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-sm flex justify-around items-center py-1.5 md:hidden"
        role="navigation"
        aria-label="Mobile Navigation"
      >
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href || (pathname === "/" && link.href === "/");
          return (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`flex flex-col items-center justify-center text-[10px] font-medium transition-all duration-200 ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
                  isActive ? "bg-blue-100" : ""
                }`}
              >
                {link.icon}
              </div>
              <span className="mt-0.5">{link.name}</span>
            </button>
          );
        })}

        {/* Profile / Auth Menu */}
        <button
          onClick={() => router.push("/login")}
          className="flex flex-col items-center justify-center text-[10px] font-medium text-gray-600 transition-all duration-200"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full">
            <User size={18} />
          </div>
          <span className="mt-0.5">Account</span>
        </button>
      </motion.nav>

      {/* ✅ Spacing below top navbar */}
      <div className="h-[60px] md:h-[70px]" />
    </>
  );
}
