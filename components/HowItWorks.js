"use client";

import {
  Briefcase,
  UserCheck,
  Phone,
  Edit3,
  HeartHandshake,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function HowItWorks() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How WorknConnect Works",
    "description":
      "Learn how WorknConnect helps job seekers and employers connect directly for transparent hiring opportunities.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Create Account",
        "text": "Sign up as a Job Poster or Finder to get started.",
      },
      {
        "@type": "HowToStep",
        "name": "Post or Find Jobs",
        "text": "Employers post jobs easily, and seekers explore verified openings.",
      },
      {
        "@type": "HowToStep",
        "name": "Connect Instantly",
        "text": "Contact directly via WhatsApp, calls, or emails with transparency.",
      },
    ],
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>How It Works | WorknConnect - Job Finder & Employer Platform</title>
        <meta
          name="description"
          content="Discover how WorknConnect simplifies job connections — helping employers post jobs easily and job seekers find opportunities fast. Transparent, human, and community-driven."
        />
        <meta
          name="keywords"
          content="WorknConnect, how it works, job platform, hire employees, find jobs, job seekers, local hiring, job opportunities, work connection India"
        />
        <meta name="author" content="WorknConnect Team" />
        <meta property="og:title" content="How WorknConnect Works" />
        <meta
          property="og:description"
          content="WorknConnect connects job seekers and employers transparently. Learn how our platform helps you hire and find jobs easily."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://worknconnect.in/how-it-works" />
        <meta
          property="og:image"
          content="https://worknconnect.in/images/worknconnect-banner.jpg"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section
        id="how"
        aria-labelledby="how-it-works-heading"
        className="relative py-24 bg-black text-gray-300 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Heading */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              id="how-it-works-heading"
              className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              How <span className="text-indigo-500">WorknConnect</span> Works
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              WorknConnect is a <strong>people-powered job platform</strong> that connects
              <strong> job seekers</strong> and <strong>employers</strong> directly.
              Whether you’re a student, skilled worker, or business owner — we help
              you grow with <strong>trust and transparency</strong>.
            </p>
          </motion.header>

          {/* Job Poster Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.article
              itemScope
              itemType="https://schema.org/HowToStep"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-10 rounded-2xl bg-gray-900/60 border border-gray-800 
                       shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] 
                       transition-all text-left backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
                👨‍💼 For Job Posters
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <Briefcase className="text-indigo-400 w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">1️⃣ Create Account</h4>
                    <p className="text-gray-400">
                      Sign up as a <strong>Job Poster</strong> to manage your dashboard,
                      post openings, and track engagement easily.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Edit3 className="text-indigo-400 w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">2️⃣ Post with Purpose</h4>
                    <p className="text-gray-400">
                      Share genuine job opportunities — from part-time to full-time roles.
                      Help others build their careers.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <UserCheck className="text-indigo-400 w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">3️⃣ Manage Transparently</h4>
                    <p className="text-gray-400">
                      Edit, update, or remove listings anytime. Track <strong>real-time
                      responses</strong> and applications effortlessly.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.article>

            {/* Job Finder Section */}
            <motion.article
              itemScope
              itemType="https://schema.org/HowToStep"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 md:p-10 rounded-2xl bg-gray-900/60 border border-gray-800 
                       shadow-[0_0_30px_rgba(52,211,153,0.15)] hover:shadow-[0_0_50px_rgba(52,211,153,0.25)] 
                       transition-all text-left backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
                👩‍🔧 For Job Finders
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <UserCheck className="text-emerald-400 w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">1️⃣ Create Account</h4>
                    <p className="text-gray-400">
                      Register as a <strong>Job Finder</strong> — everyone deserves a chance
                      to grow, whether skilled or unskilled.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Briefcase className="text-emerald-400 w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      2️⃣ Explore Opportunities
                    </h4>
                    <p className="text-gray-400">
                      Browse verified jobs near you — from local shops to large businesses.
                      Filter by skill, location, and category.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Phone className="text-emerald-400 w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">3️⃣ Connect Instantly</h4>
                    <p className="text-gray-400">
                      Contact employers directly via <strong>WhatsApp</strong> or
                      <strong> calls</strong> — skip the middleman, start working faster.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.article>
          </div>

          {/* Humanity Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 max-w-3xl mx-auto text-center"
          >
            <HeartHandshake className="mx-auto text-pink-500 w-10 h-10 mb-4" />
            <h4 className="text-2xl font-semibold text-white mb-3">
              Built for Everyone. Powered by Humanity. 💛
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              WorknConnect focuses on <strong>real people</strong> — not algorithms.
              We’re building communities, supporting families, and creating
              <em> equal opportunities </em> for all.
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex items-center justify-center gap-3 text-indigo-400 font-semibold text-lg"
          >
            <Users className="w-6 h-6" />
            <span>One Community • One Mission • Everyone Connected</span>
          </motion.footer>
        </div>
      </section>
    </>
  );
}
