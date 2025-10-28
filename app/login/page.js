"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, LogIn, UserCircle } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Gradient Glows */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 blur-3xl rounded-full"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-8">
          Login to your{" "}
          <span className="text-emerald-400 font-semibold">WorknConnect</span> account
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-emerald-400" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-emerald-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Role Selection */}
          <div className="relative">
            <UserCircle className="absolute left-3 top-3 text-emerald-400" size={18} />
            <select
              className="w-full bg-gray-800 text-gray-200 appearance-none pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="jobseeker">Job Seeker</option>
              <option value="jobposter">Job Poster</option>
              <option value="admin">Admin</option>
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

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Login <LogIn size={18} />
          </motion.button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-indigo-400 hover:text-emerald-400 font-semibold">
            Sign up here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
