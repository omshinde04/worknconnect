"use client";

import { Briefcase, UserCheck, Phone, Edit3, HeartHandshake, Users } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-it-works-heading"
      className="py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            id="how-it-works-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How <span className="text-indigo-600">WorknConnect</span> Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            WorknConnect is more than a job portal — it’s a <strong>human-first job platform</strong> that
            connects employers and job seekers directly. From local shop owners to large
            organizations, from skilled workers to fresh graduates — everyone can share or find
            genuine opportunities with honesty and trust.
          </p>
        </div>

        {/* Two Role Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Job Poster Section */}
          <article
            className="p-8 md:p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-lg 
                       border border-gray-200 dark:border-gray-700 hover:shadow-2xl 
                       transition-all text-left"
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
              👨‍💼 For Job Posters
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <Briefcase className="text-indigo-500 w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    1️⃣ Create Account
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sign up as a <strong>Job Poster</strong> and access your personalized dashboard — 
                    a space where you can post jobs, manage listings, and build trust within your network.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Edit3 className="text-indigo-500 w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    2️⃣ Post with Purpose
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Add detailed job descriptions — whether for local hiring, part-time help, or company openings.  
                    Every job you post helps someone earn with dignity.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <UserCheck className="text-indigo-500 w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    3️⃣ Manage Transparently
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Edit, update, or delete listings anytime. Track total <strong>job views</strong> 
                    and engagement metrics right on your dashboard.
                  </p>
                </div>
              </li>
            </ul>
          </article>

          {/* Job Finder Section */}
          <article
            className="p-8 md:p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-lg 
                       border border-gray-200 dark:border-gray-700 hover:shadow-2xl 
                       transition-all text-left"
          >
            <h3 className="text-2xl font-semibold mb-6 text-emerald-600">
              👩‍🔧 For Job Finders
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <UserCheck className="text-emerald-500 w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    1️⃣ Create Account
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Register as a <strong>Job Finder</strong> — whether you’re skilled, unskilled, 
                    literate, or illiterate. Everyone gets a fair chance to connect and work.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Briefcase className="text-emerald-500 w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    2️⃣ Explore Opportunities
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Discover jobs in your city — from local stores to large organizations.  
                    Choose opportunities that match your skills and availability.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="text-emerald-500 w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    3️⃣ Connect Instantly
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    No waiting, no forms — directly contact employers via <strong>WhatsApp</strong>, 
                    <strong>call</strong>, or <strong>email</strong>. Quick connections for real jobs.
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </div>

        {/* Humanity + Trust Message */}
        <div className="mt-24 max-w-3xl mx-auto">
          <HeartHandshake className="mx-auto text-pink-500 w-10 h-10 mb-4" aria-hidden="true" />
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Built for Everyone. Powered by Humanity. 💛
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            WorknConnect focuses on real people — not filters or fancy profiles.  
            It’s about <strong>connecting communities</strong>, helping families, 
            and creating growth for everyone, from <em>shopkeepers to students</em>.  
            Together, we make opportunities <strong>accessible to all</strong>.
          </p>
        </div>

        {/* Community Message */}
        <div
          className="mt-16 flex items-center justify-center gap-3 text-indigo-600 
                     dark:text-indigo-400 font-semibold text-lg"
        >
          <Users className="w-6 h-6" aria-hidden="true" />
          <span>One Community • One Mission • Everyone Connected</span>
        </div>
      </div>
    </section>
  );
}
