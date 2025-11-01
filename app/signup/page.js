"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { Mail, Lock, User, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "finder",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleRoleSelect = (role) => setForm((s) => ({ ...s, role }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.fullName.trim() || !form.email.trim() || !form.password) {
      setError("Please fill all required fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          role: form.role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed. Please try again.");
        return;
      }

      // ✅ Show success message with redirect info
      setSuccess("🎉 Account created successfully! Redirecting to login page...");

      // ⏳ Delay redirect for smooth UX
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Head>
        <title>Join WorknConnect | Sign Up to Find or Post Jobs</title>
        <meta
          name="description"
          content="Sign up on WorknConnect to find jobs or hire skilled people. Create a free account and start connecting with real opportunities today."
        />
        <meta
          name="keywords"
          content="job portal, signup, find jobs, hire workers, job seeker registration, WorknConnect, job poster account"
        />
        <meta name="author" content="Om Vilas Shinde, CEO of WorknConnect" />
        <link rel="canonical" href="https://worknconnect.vercel.app/signup" />
      </Head>

      {/* 🧭 Main Signup Section */}
      <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-emerald-400/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Signup Card */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-md bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-center text-gray-400 mb-6">
            Join{" "}
            <span className="text-indigo-400 font-semibold">WorknConnect</span>{" "}
            — bridge opportunities and skills across India.
          </p>

          {/* ✅ Success or Error Alerts */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-400 bg-green-900/30 border border-green-700 rounded-md px-3 py-2 mb-4 text-sm"
            >
              <CheckCircle2 size={18} />
              {success}
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 bg-red-900/30 border border-red-700 rounded-md px-3 py-2 mb-4 text-sm"
            >
              <XCircle size={18} />
              {error}
            </motion.div>
          )}

          {/* Role Selector */}
          <fieldset className="mb-6 text-center">
            <legend className="sr-only">Choose account role</legend>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => handleRoleSelect("finder")}
                aria-pressed={form.role === "finder"}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                  form.role === "finder"
                    ? "bg-gradient-to-r from-indigo-600 to-emerald-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-800/90"
                }`}
              >
                Job Finder
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("poster")}
                aria-pressed={form.role === "poster"}
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                  form.role === "poster"
                    ? "bg-gradient-to-r from-indigo-600 to-emerald-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-800/90"
                }`}
              >
                Job Poster
              </button>
            </div>
          </fieldset>

          {/* Signup Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <User className="absolute left-3 top-3 text-indigo-400" size={18} />
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                aria-required="true"
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-indigo-400" size={18} />
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                aria-required="true"
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-indigo-400" size={18} />
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                minLength={6}
                aria-required="true"
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-indigo-400" size={18} />
              <input
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password"
                aria-required="true"
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {loading ? "Creating Account..." : "Sign Up"}
              <ArrowRight size={18} />
            </motion.button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-emerald-400 font-semibold"
            >
              Login here
            </Link>
          </p>
        </motion.section>
      </main>
    </>
  );
}
