"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { Mail, Lock, LogIn, UserCircle, XCircle, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const siteUrl = "https://worknconnect.vercel.app";

  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ handleChange function to update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ handleSubmit (with router redirect)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    console.log("🟢 Form submitted:", form);

    if (!form.email || !form.password || !form.role) {
      setError("Please fill all fields.");
      console.log("🔴 Missing fields");
      return;
    }

    setLoading(true);
    try {
      console.log("📡 Sending login request...");
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include", // include cookie
      });

      const data = await res.json();
      console.log("📩 Login API Response:", data);

      if (!res.ok) {
        setError(data.error || "Invalid credentials.");
        console.log("❌ Login failed:", data.error);
        return;
      }

      setSuccess("✅ Login successful! Redirecting...");
      console.log("✅ Login success, preparing redirect...");

      setTimeout(() => {
        if (form.role === "poster") {
          console.log("➡️ Redirecting to /jobposter");
          router.push("/jobposter");
        } else if (form.role === "finder") {
          console.log("➡️ Redirecting to /jobfinder");
          router.push("/jobfinder");
        } else {
          router.push("/");
        }
      }, 500);

    } catch (err) {
      console.error("🔥 ERROR in handleSubmit:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Login | WorknConnect</title>
        <meta
          name="description"
          content="Login to WorknConnect to find or post jobs across India. Connect directly with job seekers and employers."
        />
        <meta
          name="keywords"
          content="WorknConnect login, job finder login, job poster login, job portal India, worknconnect.in"
        />
        <meta name="author" content="Om Vilas Shinde, CEO of WorknConnect" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/login`} />

        {/* Open Graph */}
        <meta property="og:title" content="Login | WorknConnect" />
        <meta
          property="og:description"
          content="Login to your WorknConnect account and connect with real job opportunities today."
        />
        <meta property="og:url" content={`${siteUrl}/login`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${siteUrl}/images/worknconnect-banner.jpg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login | WorknConnect" />
        <meta
          name="twitter:description"
          content="Access your WorknConnect profile and start finding or posting jobs now."
        />
        <meta
          name="twitter:image"
          content={`${siteUrl}/images/worknconnect-banner.jpg`}
        />
      </Head>

      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "WorknConnect Login Page",
            description:
              "Login page for WorknConnect — connect job seekers and employers directly.",
            url: `${siteUrl}/login`,
            publisher: {
              "@type": "Organization",
              name: "WorknConnect",
              logo: `${siteUrl}/images/logo.png`,
            },
          }),
        }}
      />

      {/* ✅ Main Login Page */}
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 blur-3xl rounded-full"></div>

        {/* Login Card */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-md bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg"
          aria-label="WorknConnect Login Form"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Welcome Back
          </h1>
          <p className="text-center text-gray-400 mb-6">
            Login to your{" "}
            <span className="text-indigo-400 font-semibold">WorknConnect</span>{" "}
            account
          </p>

          {/* ✅ Alerts */}
          {success && (
            <div className="flex items-center gap-2 text-green-400 bg-green-900/30 border border-green-700 rounded-md px-3 py-2 mb-4 text-sm">
              <CheckCircle2 size={18} /> {success}
            </div>
          )}
          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-900/30 border border-red-700 rounded-md px-3 py-2 mb-4 text-sm">
              <XCircle size={18} /> {error}
            </div>
          )}

          {/* ✅ Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-emerald-400" size={18} />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-emerald-400" size={18} />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* ✅ Role Selection */}
            <div className="relative">
              <UserCircle className="absolute left-3 top-3 text-emerald-400" size={18} />
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-gray-200 appearance-none pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="finder">Job Finder</option>
                <option value="poster">Job Poster</option>
              </select>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-indigo-400 hover:text-emerald-400 font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* ✅ Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {loading ? "Logging in..." : "Login"}
              <LogIn size={18} />
            </motion.button>
          </form>

          {/* ✅ Signup Redirect */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-indigo-400 hover:text-emerald-400 font-semibold"
            >
              Sign up here
            </Link>
          </p>
        </motion.main>
      </div>
    </>
  );
}
