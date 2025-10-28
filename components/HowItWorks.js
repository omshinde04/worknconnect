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

export default function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-it-works-heading"
      className="relative py-24 bg-black text-gray-300 overflow-hidden"
    >
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <motion.div
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
            WorknConnect isn’t just a platform — it’s a <strong>people-driven ecosystem</strong> 
            that connects job creators and seekers effortlessly. From local shop owners to 
            national organizations, from students to professionals — we empower everyone 
            to find opportunities with <strong>trust and transparency</strong>.
          </p>
        </motion.div>

        {/* Two Role Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Job Poster Section */}
          <motion.article
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
                <Briefcase className="text-indigo-400 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    1️⃣ Create Account
                  </h4>
                  <p className="text-gray-400">
                    Sign up as a <strong>Job Poster</strong> and unlock your personalized dashboard 
                    — post openings, manage listings, and track engagement easily.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Edit3 className="text-indigo-400 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    2️⃣ Post with Purpose
                  </h4>
                  <p className="text-gray-400">
                    Share meaningful job opportunities — from short-term help to company roles.  
                    Every listing you post builds someone’s future.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <UserCheck className="text-indigo-400 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    3️⃣ Manage Transparently
                  </h4>
                  <p className="text-gray-400">
                    Edit, update, or delete listings anytime. Monitor real-time <strong>views</strong> 
                    and responses on your dashboard.
                  </p>
                </div>
              </li>
            </ul>
          </motion.article>

          {/* Job Finder Section */}
          <motion.article
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
                <UserCheck className="text-emerald-400 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    1️⃣ Create Account
                  </h4>
                  <p className="text-gray-400">
                    Register as a <strong>Job Finder</strong> — whether skilled, unskilled, 
                    literate, or illiterate. Everyone gets equal opportunity here.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Briefcase className="text-emerald-400 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    2️⃣ Explore Opportunities
                  </h4>
                  <p className="text-gray-400">
                    Browse jobs near you — from local shops to startups and enterprises.  
                    Find roles that fit your skills, time, and comfort.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="text-emerald-400 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    3️⃣ Connect Instantly
                  </h4>
                  <p className="text-gray-400">
                    Contact employers directly through <strong>WhatsApp</strong>, 
                    <strong>calls</strong>, or <strong>emails</strong>. No long forms, just real connections.
                  </p>
                </div>
              </li>
            </ul>
          </motion.article>
        </div>

        {/* Humanity Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <HeartHandshake className="mx-auto text-pink-500 w-10 h-10 mb-4" />
          <p className="text-2xl font-semibold text-white mb-3">
            Built for Everyone. Powered by Humanity. 💛
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            WorknConnect focuses on <strong>real people</strong> — not filters or algorithms.  
            It’s about <strong>building communities</strong>, uplifting families, and 
            creating <em>lasting change</em> through equal opportunity.
          </p>
        </motion.div>

        {/* Community Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-3 text-indigo-400 font-semibold text-lg"
        >
          <Users className="w-6 h-6" />
          <span>One Community • One Mission • Everyone Connected</span>
        </motion.div>
      </div>
    </section>
  );
}
