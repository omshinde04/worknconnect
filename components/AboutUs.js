"use client";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function AboutUs() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "WorknConnect",
      "url": "https://worknconnect.in/about",
      "logo": "https://worknconnect.in/images/logo.png",
      "foundingDate": "2025",
      "founder": {
        "@type": "Person",
        "name": "Om Vilas Shinde"
      },
      "sameAs": [
        "https://www.linkedin.com/company/worknconnect",
        "https://instagram.com/worknconnect",
        "https://x.com/worknconnect"
      ],
      "description":
        "WorknConnect is a people-powered job network connecting job seekers and employers across India with transparency and trust.",
      "mission":
        "Empower every individual by breaking barriers between talent and opportunity through a transparent, inclusive digital ecosystem.",
      "vision":
        "To create a future where every person, regardless of background, can find meaningful work and be part of a connected India."
    }
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>About Us | WorknConnect – India’s People-Powered Job Platform</title>
        <meta
          name="description"
          content="Learn about WorknConnect — a people-powered job network connecting employers and job seekers across India. Our mission: inclusion, trust, and opportunity for all."
        />
        <meta
          name="keywords"
          content="About WorknConnect, job platform India, job seekers, job network, hiring platform, employment opportunities, people-powered jobs, Om Shinde, job portal India"
        />
        <meta name="author" content="WorknConnect Team" />
        <meta property="og:title" content="About WorknConnect – Empowering India Through Jobs" />
        <meta
          property="og:description"
          content="Discover how WorknConnect is connecting job seekers and employers across India through trust, transparency, and opportunity."
        />
        <meta property="og:url" content="https://worknconnect.in/about" />
        <meta
          property="og:image"
          content="https://worknconnect.in/images/worknconnect-banner.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* 🌍 About Section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative w-full flex items-center justify-center text-center overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900"
      >
        {/* 🌄 Mobile Background */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src="/images/mobile.jpg"
            alt="Team collaboration and unity – WorknConnect mobile background"
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
            alt="WorknConnect team unity, support, and empowerment background"
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-50"
          />
        </div>

        {/* 🔮 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

        {/* 💬 Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-white">
          <motion.h1
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About WorknConnect
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <strong className="text-blue-400">WorknConnect</strong> is a{" "}
            <span className="text-indigo-400 font-semibold">
              people-powered job network
            </span>{" "}
            built to empower every individual — from local workers to national
            talent. Our belief is simple:{" "}
            <span className="text-blue-400 font-semibold">
              opportunity should never be limited by background or literacy
            </span>
            . We connect hearts before resumes.
          </motion.p>

          {/* Visionary Statement */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 sm:mt-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We’re more than a platform — we’re a movement for{" "}
            <span className="text-blue-400 font-semibold">
              trust, inclusion, and dignity in work
            </span>
            . Whether you’re a student, shop owner, skilled worker, or
            organization,{" "}
            <span className="text-indigo-400">WorknConnect</span> helps you grow,
            connect, and create meaningful impact.
          </motion.p>

          {/* ✨ Mission / Vision / Promise */}
          <motion.div
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Mission */}
            <article
              itemScope
              itemType="https://schema.org/CreativeWork"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-400 transition-all">
                🌍 Our Mission
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                To empower individuals by bridging <strong>talent</strong> and{" "}
                <strong>opportunity</strong>. WorknConnect is a{" "}
                <span className="text-blue-400 font-semibold">
                  human-first digital ecosystem
                </span>{" "}
                where growth belongs to everyone.
              </p>
            </article>

            {/* Vision */}
            <article
              itemScope
              itemType="https://schema.org/CreativeWork"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-400 transition-all">
                🚀 Our Vision
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                To build a future where{" "}
                <strong>every effort gets recognition</strong> and{" "}
                <strong>every skill finds purpose</strong>. A connected India,
                powered by{" "}
                <span className="text-indigo-400 font-semibold">
                  equality and sustainability
                </span>
                .
              </p>
            </article>

            {/* Promise */}
            <article
              itemScope
              itemType="https://schema.org/CreativeWork"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] sm:col-span-2 lg:col-span-1 mx-auto"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-400 transition-all">
                💙 Our Promise
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                We remain <strong>people-first</strong>, transparent, and
                innovative.{" "}
                <span className="text-blue-400 font-semibold">WorknConnect</span>{" "}
                connects not just jobs —{" "}
                <span className="text-indigo-400 font-semibold">
                  it connects lives and builds futures
                </span>
                .
              </p>
            </article>
          </motion.div>

          {/* 💡 Tagline */}
          <motion.footer
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl text-gray-200 font-medium">
              Together, we’re building a{" "}
              <span className="text-blue-400 font-semibold">
                future of work
              </span>{" "}
              that’s{" "}
              <span className="text-indigo-400 font-semibold">
                accessible, inclusive, and human
              </span>
              .
            </p>
          </motion.footer>
        </div>
      </section>
    </>
  );
}
