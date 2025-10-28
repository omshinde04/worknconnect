"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, Send, HeartHandshake } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("info");

    try {
      const res = await fetch("https://formspree.io/f/myznbgkl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        setStatusType("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
        setStatusType("error");
      }
    } catch (err) {
      setStatus("❌ Error sending message.");
      setStatusType("error");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="relative bg-black text-white px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)] blur-3xl opacity-60"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-400/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto relative z-10 bg-[#0F0F10]/90 backdrop-blur-lg 
                   rounded-2xl shadow-2xl p-10 md:p-16 border border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgb(99,102,241)",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-md shadow-md"
            >
              Let’s Collaborate
            </motion.button>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-white">
              Let’s Shape <br /> the Future of Work <br /> Together 🤝
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full origin-left"
            />

            <p className="text-gray-400 text-base leading-relaxed">
              Whether you're an employer, job seeker, or community partner — WorknConnect
              bridges the gap between talent and opportunity. Reach out to us anytime to
              collaborate, share ideas, or grow together.
            </p>

            <div className="text-gray-300 text-sm md:text-base space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-indigo-400" />
                <a href="tel:+919373545159" className="hover:text-indigo-400">
                  +91 9373545159
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a
                  href="mailto:shindeom052@gmail.com"
                  className="hover:text-indigo-400"
                >
                  shindeom052@gmail.com
                </a>
              </p>
              <p>⏰ Monday to Saturday — 9 AM to 7 PM</p>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            onSubmit={handleSubmit}
            className="space-y-4 relative"
          >
            <motion.input
              variants={item}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-indigo-500 transition"
            />
            <motion.input
              variants={item}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-indigo-500 transition"
            />
            <motion.textarea
              variants={item}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-indigo-500 transition resize-none"
            />
            <motion.button
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(99,102,241,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-emerald-500 text-white py-3 rounded-md font-semibold shadow-md transition"
            >
              <Send className="w-4 h-4 inline-block mr-2" />
              Send Message
            </motion.button>

            {/* Success/Error Status */}
            <AnimatePresence>
              {status && (
                <motion.p
                  key="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className={`text-sm font-medium mt-2 ${
                    statusType === "success"
                      ? "text-green-400"
                      : statusType === "error"
                      ? "text-red-400"
                      : "text-gray-400"
                  }`}
                >
                  {status}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

        {/* Humanity Message */}
        <div className="mt-16 text-center space-y-3">
          <HeartHandshake className="w-8 h-8 mx-auto text-indigo-400" />
          <p className="text-xl font-semibold text-gray-200">
            WorknConnect — Connecting People with Purpose 🌍
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Together, we’re building a community where work meets trust and growth never stops.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
