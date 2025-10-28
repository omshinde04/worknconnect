"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full py-12 sm:py-16 md:py-20 flex items-center justify-center text-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aboutt.jpg"
          alt="Team collaborating representing the WorknConnect mission"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
        {/* ✅ Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 text-white">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-400">WorknConnect</span>
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <strong>WorknConnect</strong> isn’t just a job portal — it’s a vision
          to empower India’s workforce by creating trust, opportunity, and
          long-term growth. We bring people, purpose, and progress together.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-xl text-gray-200 mt-5 sm:mt-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our platform connects dreamers and doers — where{" "}
          <span className="text-blue-400 font-semibold">work meets purpose</span>{" "}
          and ambition transforms into achievement. Together, we’re building a
          sustainable, connected digital economy for the next generation.
        </motion.p>

        {/* ✅ Mission, Vision, Promise Cards */}
        <motion.div
          className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-5 sm:p-6 rounded-2xl shadow-lg hover:bg-white/25 transition-all duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-300 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed">
              To create a transparent digital ecosystem that bridges opportunity
              and talent — empowering everyone to connect, work, and grow with
              trust and innovation.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-5 sm:p-6 rounded-2xl shadow-lg hover:bg-white/25 transition-all duration-300">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-300 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed">
              To be India’s most trusted platform for collaboration and career
              development — helping millions build meaningful and lasting
              professional connections.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-5 sm:p-6 rounded-2xl shadow-lg hover:bg-white/25 transition-all duration-300 sm:col-span-2 lg:col-span-1 mx-auto">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-300 mb-2">
              Our Promise
            </h3>
            <p className="text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed">
              We stand for equality, innovation, and empowerment — ensuring
              every individual feels valued, connected, and inspired to grow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
