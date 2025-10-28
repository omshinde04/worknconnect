"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative w-full h-[90vh] sm:h-[95vh] md:h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background for Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/mobile.png"
          alt="WorknConnect mobile job network"
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>

      {/* Background for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/deskk.jpg"
          alt="WorknConnect job platform professional background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center 
                   text-center px-6 md:px-12 w-full max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 
                     text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering <span className="text-indigo-500">Connections</span>, <br className="hidden sm:block" />
          Creating <span className="text-blue-400">Opportunities</span> 💼
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-200 
                     max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 leading-relaxed 
                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <strong>WorknConnect</strong> bridges the gap between <strong>job seekers</strong> and 
          <strong> employers</strong>. A transparent and trustworthy platform built to 
          connect communities, create real opportunities, and empower growth — 
          from local workers to national talent.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.a
            href="/postjob"
            whileHover={{ scale: 1.08 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700
                       hover:from-blue-700 hover:to-indigo-800
                       rounded-2xl text-lg font-semibold shadow-lg 
                       transition-all duration-300"
          >
            Post a Job
          </motion.a>

          <motion.a
            href="/findjob"
            whileHover={{ scale: 1.08 }}
            className="px-8 py-3 bg-white/10 backdrop-blur-md 
                       border border-white/20 hover:bg-white/20
                       rounded-2xl text-lg font-semibold transition-all duration-300"
          >
            Find Jobs
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Inspirational Line */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-300 
                   text-xs sm:text-sm md:text-base font-medium text-center 
                   opacity-90 px-3 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        “Building hope through opportunities. Stay real. Stay human.” 🌍
      </motion.div>
    </header>
  );
}
