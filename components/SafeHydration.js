"use client";
import { useEffect, useState } from "react";

export default function SafeHydration({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait for the client to fully load before rendering
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent server/client mismatch

  return <>{children}</>;
}
