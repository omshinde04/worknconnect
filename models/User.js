import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["finder", "poster"],
      default: "finder",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" } // ✅ Use specific collection name
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
