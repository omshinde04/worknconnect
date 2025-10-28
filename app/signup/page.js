"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "finder", // default role
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleRoleSelect = (role) => setForm((s) => ({ ...s, role }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
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
      // TODO: Replace with actual backend signup API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Redirect to role-based dashboard
      if (form.role === "poster") {
        router.push("/jobposter");
      } else {
        router.push("/jobseeker");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to create account. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Gradient Glows */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-emerald-400/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Join{" "}
          <span className="text-indigo-400 font-semibold">WorknConnect</span> —{" "}
          choose your role below.
        </p>

        {/* Role Selector */}
        <div className="mb-6 flex gap-3 justify-center">
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
            Job Seeker
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

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <User className="absolute left-3 top-3 text-indigo-400" size={18} />
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-indigo-400" size={18} />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-indigo-400" size={18} />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
              minLength={6}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-indigo-400" size={18} />
            <input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {error && <p className="text-sm text-red-400 mt-1">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
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
          >
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
