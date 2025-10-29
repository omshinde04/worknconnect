"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleRoleSelect = (role) => setForm((s) => ({ ...s, role }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
      await new Promise((resolve) => setTimeout(resolve, 800));
      form.role === "poster" ? router.push("/jobposter") : router.push("/jobseeker");
    } catch (err) {
      console.error(err);
      setError("Failed to create account. Try again later.");
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

        {/* 🔹 Schema.org (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "WorknConnect Signup Page",
              description:
                "Register with WorknConnect to find jobs or post hiring opportunities. Empowering seekers and employers to connect easily.",
              url: "https://worknconnect.vercel.app/signup",
              publisher: {
                "@type": "Organization",
                name: "WorknConnect",
                logo: {
                  "@type": "ImageObject",
                  url: "https://worknconnect.vercel.app/logo.png",
                },
              },
            }),
          }}
        />
      </Head>

      {/* 🧭 Main Signup Section */}
      <main
        className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
        aria-label="Sign up page for WorknConnect job platform"
      >
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

          {/* Role Selector */}
          <fieldset className="mb-6 text-center">
            <legend className="sr-only">Choose account role</legend>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => handleRoleSelect("finder")}
                aria-pressed={form.role === "finder"}
                aria-label="Select job seeker role"
                className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                  form.role === "finder"
                    ? "bg-gradient-to-r from-indigo-600 to-emerald-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-800/90"
                }`}
              >
                Job Seeker
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("poster")}
                aria-pressed={form.role === "poster"}
                aria-label="Select job poster role"
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
          <form className="space-y-4" onSubmit={handleSubmit} aria-label="Signup form">
            {/* Full Name */}
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
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

            {/* Email */}
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
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

            {/* Password */}
            <label htmlFor="password" className="sr-only">
              Password
            </label>
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

            {/* Confirm Password */}
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
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

            {error && <p className="text-sm text-red-400 mt-1">{error}</p>}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              aria-label="Create your WorknConnect account"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {loading ? "Creating..." : "Sign Up"}
              <ArrowRight size={18} />
            </motion.button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-emerald-400 font-semibold"
              aria-label="Go to login page"
            >
              Login here
            </Link>
          </p>
        </motion.section>
      </main>
    </>
  );
}
