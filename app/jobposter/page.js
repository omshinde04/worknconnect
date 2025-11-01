"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function JobPosterPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const envToken = process.env.NEXT_PUBLIC_STATIC_TOKEN;

    console.log("Token in localStorage:", token);
    console.log("Expected Token:", envToken);

    if (token !== envToken) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="text-white text-center mt-10">
      Welcome to Job Poster Dashboard 🚀
    </div>
  );
}
