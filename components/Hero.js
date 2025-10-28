"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative w-full h-[90vh] sm:h-[95vh] md:h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background - Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/mobile.png"
          alt="WorknConnect job platform for mobile users"
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>

      {/* Background - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/deskk.jpg"
          alt="WorknConnect professional network background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center 
                   text-center px-6 md:px-12 w-full max-w-5xl 
                   -translate-y-4 sm:-translate-y-2 md:translate-y-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Main Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug mb-3 md:mb-4 
                     drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering <span className="text-blue-500">Connections</span>,  
          <br className="hidden sm:block" /> Creating{" "}
          <span className="text-blue-400">Opportunities</span> 💼
        </motion.h1>

        {/* Subtitle / SEO Description */}
        <motion.p
          className="text-xs sm:text-sm md:text-xl text-gray-200 
                     max-w-xs sm:max-w-md md:max-w-2xl mb-6 md:mb-10 leading-relaxed 
                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          WorknConnect — the platform that bridges <strong>job seekers</strong> and{" "}
          <strong>employers</strong>. Post jobs, find talent, and grow your career effortlessly.
          Empowering real people to connect, work, and succeed with transparency.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.a
            href="/postjob"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2.5 sm:px-8 sm:py-3 
                       bg-blue-600 hover:bg-blue-700 
                       rounded-xl sm:rounded-2xl 
                       text-base sm:text-lg font-semibold 
                       shadow-lg transition-all duration-300"
          >
            Post a Job
          </motion.a>

          <motion.a
            href="/findjob"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2.5 sm:px-8 sm:py-3 
                       bg-white/10 backdrop-blur-md 
                       hover:bg-white/20 
                       rounded-xl sm:rounded-2xl 
                       text-base sm:text-lg font-semibold 
                       border border-white/30 transition-all duration-300"
          >
            Find Jobs
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Inspirational Quote */}
      <motion.div
        className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 
                   text-gray-300 text-[10px] sm:text-xs md:text-sm 
                   font-medium text-center opacity-90 px-3 leading-tight 
                   w-[95%] sm:w-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        “Building hope through opportunities. Stay real. Stay human.”
      </motion.div>
    </header>
  );
}
