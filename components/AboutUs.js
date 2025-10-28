"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full flex items-center justify-center text-center overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900"
    >
      {/* 🌄 Mobile Background */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/mobile.jpg"
          alt="Team collaboration representing unity and purpose"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-50"
        />
      </div>

      {/* 💻 Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/big.jpg"
          alt="Team unity, support, and empowerment background"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-50"
        />
      </div>

      {/* 🔮 Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      {/* 💬 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-white">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About WorknConnect
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <strong className="text-blue-400">WorknConnect</strong> is a 
          <span className="text-indigo-400 font-semibold"> people-powered job network </span> 
          designed to empower every individual — from local workers to national talent.  
          We believe that <span className="text-blue-400 font-semibold">opportunity should never be limited by background, literacy, or social reach</span>.  
          Our goal is simple: connect hearts before resumes.
        </motion.p>

        {/* Visionary Statement */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are not just building a platform — we are building a movement for 
          <span className="text-blue-400 font-semibold"> trust, inclusion, and dignity in work</span>.  
          Whether you are a student, shop owner, skilled worker, or organization,  
          <span className="text-indigo-400"> WorknConnect</span> helps you grow, connect, and create impact that lasts a lifetime.
        </motion.p>

        {/* ✨ Mission - Vision - Promise Cards */}
        <motion.div
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Mission Card */}
          <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-400 transition-all">
              🌍 Our Mission
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              To empower every person by breaking barriers between <strong>talent</strong> and 
              <strong> opportunity</strong>. We’re crafting a transparent, trusted, and 
              <span className="text-blue-400 font-semibold"> human-first digital ecosystem</span> 
              where growth belongs to everyone.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-400 transition-all">
              🚀 Our Vision
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              To build a nation where <strong>no effort goes unnoticed</strong> and 
              <strong> every skill finds purpose</strong>.  
              Our vision is a connected India, where every person becomes part of a 
              <span className="text-indigo-400 font-semibold"> sustainable future of work</span>.
            </p>
          </div>

          {/* Promise Card */}
          <div className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] sm:col-span-2 lg:col-span-1 mx-auto">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-400 transition-all">
              💙 Our Promise
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              We promise to stay <strong>people-first</strong>, transparent, and innovative.  
              <span className="text-blue-400 font-semibold"> WorknConnect</span> will always stand 
              beside dreamers, doers, and believers — because we don’t just connect jobs,  
              <span className="text-indigo-400 font-semibold"> we connect lives and build futures.</span>
            </p>
          </div>
        </motion.div>

        {/* 💡 Closing Tagline */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl text-gray-200 font-medium">
            Together, we’re building a <span className="text-blue-400 font-semibold">future of work</span>  
            that is <span className="text-indigo-400 font-semibold">accessible, inclusive, and human.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
