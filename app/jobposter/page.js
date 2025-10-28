"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  UserCircle,
  LogOut,
  Trash2,
  Edit2,
  Upload,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function JobPostDashboard() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    phone: "",
    whatsapp: "",
    email: "",
    description: "",
    image: null,
  });

  const [status, setStatus] = useState("");
  const [postedJobs, setPostedJobs] = useState([]);
  const fileInputRef = useRef(null);

  // ✅ Handle input change
  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // ✅ Image Upload (max 1MB)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1024 * 1024) {
      alert("⚠️ Image size must be below 1MB");
      fileInputRef.current.value = "";
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setJob({ ...job, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.image) {
      alert("Please upload an image before posting.");
      return;
    }

    const newJob = { ...job, id: Date.now() };
    setPostedJobs([...postedJobs, newJob]);
    setStatus("✅ Job Posted Successfully!");

    // Reset form
    setJob({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      salary: "",
      phone: "",
      whatsapp: "",
      email: "",
      description: "",
      image: null,
    });

    fileInputRef.current.value = "";
    setTimeout(() => setStatus(""), 4000);
  };

  // ✅ Delete job
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setPostedJobs(postedJobs.filter((job) => job.id !== id));
    }
  };

  // ✅ Edit job
  const handleEdit = (jobToEdit) => {
    setJob(jobToEdit);
    setPostedJobs(postedJobs.filter((j) => j.id !== jobToEdit.id));
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)] blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10 bg-[#0F0F10]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 md:p-12"
      >
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-4">
            <UserCircle className="w-14 h-14 text-indigo-500" />
            <div>
              <h2 className="text-xl font-semibold">Om Shinde</h2>
              <p className="text-gray-400 text-sm">Employer Dashboard</p>
            </div>
          </div>

         
        </div>

        {/* Job Form */}
        <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-500 to-emerald-400 text-transparent bg-clip-text">
          Post a New Job 🚀
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Job Title"
              name="title"
              value={job.title}
              placeholder="e.g. Electrician, Sales Executive"
              onChange={handleChange}
            />
            <InputField
              label="Company / Shop Name"
              name="company"
              value={job.company}
              placeholder="e.g. Om Traders"
              onChange={handleChange}
            />
          </div>

          {/* Location, Type, Salary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Full Address / Location"
              name="location"
              value={job.location}
              placeholder="e.g. Near Om Chowk, Pimpri, Pune"
              onChange={handleChange}
            />
            <div>
              <label className="text-gray-300 text-sm">Job Type</label>
              <select
                name="type"
                value={job.type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm text-white focus:border-indigo-500 transition"
              >
                <option value="Full-time" className="text-black">
                  Full-time
                </option>
                <option value="Part-time" className="text-black">
                  Part-time
                </option>
                <option value="Contract" className="text-black">
                  Contract
                </option>
              </select>
            </div>
            <InputField
              label="Salary Range"
              name="salary"
              value={job.salary}
              placeholder="e.g. ₹10,000 - ₹20,000"
              onChange={handleChange}
            />
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Contact Number"
              name="phone"
              value={job.phone}
              placeholder="+91 9876543210"
              onChange={handleChange}
            />
            <InputField
              label="WhatsApp Number"
              name="whatsapp"
              value={job.whatsapp}
              placeholder="+91 9876543210"
              onChange={handleChange}
            />
            <InputField
              label="Email Address"
              name="email"
              value={job.email}
              placeholder="example@email.com"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm">Job Description</label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              placeholder="Describe the job role, requirements, or timings"
              rows="4"
              required
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:border-indigo-500 transition resize-none"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <label className="text-gray-300 text-sm">
                Upload Job Image (max 1MB)
              </label>
              <div
                className="flex items-center justify-center border border-gray-700 rounded-md p-4 cursor-pointer hover:border-indigo-500 transition"
                onClick={() => fileInputRef.current.click()}
              >
                {job.image ? (
                  <img
                    src={job.image}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md border border-gray-700"
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <Upload className="w-6 h-6 mb-2" />
                    <p>Click to upload</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-emerald-500 text-white py-3 rounded-md font-semibold shadow-md transition flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Post Job
          </motion.button>

          {status && (
            <p className="text-center text-green-400 font-medium">{status}</p>
          )}
        </form>

        {/* Posted Jobs */}
        {postedJobs.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
              My Posted Jobs 👇
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postedJobs.map((job) => {
                const whatsappLink = job.whatsapp
                  ? `https://wa.me/${job.whatsapp.replace(/\D/g, "")}`
                  : null;

                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#141414] border border-gray-800 rounded-xl p-5 relative shadow-lg"
                  >
                    {job.image && (
  <div className="w-full h-48 bg-black/30 flex items-center justify-center rounded-md mb-4 border border-gray-800 overflow-hidden">
    <img
      src={job.image}
      alt="Job"
      className="max-h-48 w-auto object-contain"
    />
  </div>
)}


                    <h4 className="text-xl font-bold">{job.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{job.company}</p>

                    <div className="flex flex-wrap gap-3 text-sm mb-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-medium">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                        {job.salary || "Not Mentioned"}
                      </span>
                    </div>

                    <p className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <MapPin className="w-4 h-4 text-indigo-400" />{" "}
                      {job.location}
                    </p>

                    {/* Contact Options */}
                    <div className="flex flex-col gap-1 text-sm text-gray-400 mt-2">
                      <a
                        href={`tel:${job.phone}`}
                        className="flex items-center gap-2 hover:text-emerald-400 transition"
                      >
                        <Phone className="w-4 h-4 text-emerald-400" /> Call:{" "}
                        {job.phone}
                      </a>
                      {whatsappLink && (
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-green-400 transition"
                        >
                          <MessageCircle className="w-4 h-4 text-green-400" />{" "}
                          Chat on WhatsApp
                        </a>
                      )}
                      {job.email && (
                        <a
                          href={`mailto:${job.email}`}
                          className="flex items-center gap-2 hover:text-blue-400 transition"
                        >
                          <Mail className="w-4 h-4 text-blue-400" />{" "}
                          {job.email}
                        </a>
                      )}
                    </div>

                    <p className="mt-3 text-gray-300 text-sm leading-relaxed border-t border-gray-800 pt-3">
                      {job.description}
                    </p>

                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={() => handleEdit(job)}
                        className="p-2 rounded-md bg-blue-600/20 hover:bg-blue-600/40 transition"
                      >
                        <Edit2 className="w-4 h-4 text-blue-400" />
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="p-2 rounded-md bg-red-600/20 hover:bg-red-600/40 transition"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

// ✅ Reusable Input Component
const InputField = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="text-gray-300 text-sm">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-indigo-500 transition"
    />
  </div>
);
