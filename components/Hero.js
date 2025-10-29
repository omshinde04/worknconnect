"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative w-full h-[90vh] sm:h-[95vh] md:h-screen flex items-center justify-center overflow-hidden text-white"
      role="banner"
      aria-label="WorknConnect Hero Section"
    >
      {/* ✅ Background for Mobile */}
      <div className="absolute inset-0 block md:hidden" aria-hidden="true">
        <Image
          src="/images/mobile.png"
          alt="WorknConnect platform connecting workers and employers"
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>

      {/* ✅ Background for Desktop */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        <Image
          src="/images/deskk.jpg"
          alt="Professional workspace background representing WorknConnect jobs"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* ✅ Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        aria-hidden="true"
      ></div>

      {/* ✅ Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* ✅ Main SEO Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering <span className="text-indigo-500">Connections</span>,{" "}
          Creating <span className="text-blue-400">Opportunities</span> 💼
        </motion.h1>

        {/* ✅ Subheadline with rich keywords */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>WorknConnect</strong> is India’s growing{" "}
          <strong>job connection platform</strong> that helps{" "}
          <strong>employers</strong> and <strong>job seekers</strong> connect
          directly — no middleman, no confusion. Find trusted local workers,
          skilled professionals, and new opportunities near you with ease.
        </motion.p>

        {/* ✅ CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            href="/signup"
            aria-label="Post a job on WorknConnect"
            title="Post your job listing on WorknConnect"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Post a Job
            </motion.button>
          </Link>

          <Link
            href="/signup"
            aria-label="Find jobs on WorknConnect"
            title="Browse available job listings on WorknConnect"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-2xl text-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Find Jobs
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* ✅ Inspirational Line (SEO benefit: keyword + emotion) */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-300 text-xs sm:text-sm md:text-base font-medium text-center opacity-90 px-3 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <em>
          “Building hope through opportunities — connecting talent with real
          jobs across India.” 🌍
        </em>
      </motion.div>
    </header>
  );
}
