"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Briefcase } from "lucide-react";

export default function JobFinder() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Fetch jobs (mock for now)
  useEffect(() => {
    // Replace with your real API later: fetch("/api/jobs")
    setJobs([
      {
        id: 1,
        title: "Electrician",
        company: "Om Traders",
        location: "Pimpri, Pune",
        type: "Full-time",
        salary: "₹15,000 - ₹20,000",
        phone: "+919876543210",
        whatsapp: "+919876543210",
        email: "omtraders@gmail.com",
        description: "Looking for an experienced electrician for shop maintenance.",
      },
      {
        id: 2,
        title: "Sales Executive",
        company: "Radix Solutions",
        location: "Nigdi, Pune",
        type: "Part-time",
        salary: "₹10,000 + Incentives",
        phone: "+919812345678",
        whatsapp: "+919812345678",
        email: "hr@radix.com",
        description: "Good communication skills required for field sales.",
      },
    ]);
  }, []);

  // ✅ Filter jobs
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()) ||
      job.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent">
          Find Your Next Job 🔍
        </h1>

        {/* Search bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by job title, location or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-5 py-3 bg-[#111] border border-gray-700 rounded-lg text-sm focus:border-indigo-500 outline-none"
          />
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[#141414] border border-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                {job.title}
              </h2>
              <p className="text-gray-400 text-sm mb-2">{job.company}</p>
              <p className="text-gray-400 text-sm flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                {job.location}
              </p>

              <div className="flex flex-wrap gap-3 mb-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                  {job.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  {job.salary}
                </span>
              </div>

              <p className="text-gray-300 text-sm border-t border-gray-800 pt-3">
                {job.description}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <a
                  href={`tel:${job.phone}`}
                  className="flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/40 px-3 py-2 rounded-md"
                >
                  <Phone className="w-4 h-4 text-emerald-400" /> Call
                </a>
                <a
                  href={`https://wa.me/${job.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/40 px-3 py-2 rounded-md"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp
                </a>
                <a
                  href={`mailto:${job.email}`}
                  className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 px-3 py-2 rounded-md"
                >
                  <Mail className="w-4 h-4 text-blue-400" /> Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No jobs found.</p>
        )}
      </motion.div>
    </main>
  );
}
