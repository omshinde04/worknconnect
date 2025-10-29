import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";

// ✅ SEO Metadata (for Next.js App Router)
export const metadata = {
  title: "WorknConnect | Find Jobs & Hire Workers Instantly in India",
  description:
    "WorknConnect is India's smart platform connecting job seekers and employers. Post jobs, find skilled workers, and grow your business — all in one place.",
  keywords: [
    "WorknConnect",
    "Find Jobs",
    "Hire Workers",
    "Local Jobs India",
    "Job Portal India",
    "Online Hiring",
    "Job Search Platform",
    "Work from Home",
    "Skilled Workers",
    "Employment India",
  ],
  authors: [{ name: "Omradix Solutions", url: "https://omradixsolutions.vercel.app" }],
  openGraph: {
    title: "WorknConnect | Smart Job & Hiring Platform in India",
    description:
      "Find jobs or hire trusted workers instantly with WorknConnect. Simple. Reliable. Fast.",
    url: "https://worknconnect.in",
    siteName: "WorknConnect",
    images: [
      {
        url: "https://worknconnect.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WorknConnect - Find Jobs and Hire Workers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorknConnect | Find Jobs & Hire Workers Instantly",
    description:
      "India’s fast-growing job and hiring platform — WorknConnect connects job seekers with businesses quickly and effectively.",
    images: ["https://worknconnect.in/og-image.jpg"],
    creator: "@worknconnect",
  },
  alternates: {
    canonical: "https://worknconnect.in",
  },
  metadataBase: new URL("https://worknconnect.in"),
};

// ✅ JSON-LD Structured Data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WorknConnect",
  alternateName: "Work n Connect",
  url: "https://worknconnect.in",
  logo: "https://worknconnect.in/logo.png",
  sameAs: [
    "https://www.instagram.com/worknconnect/",
    "https://www.linkedin.com/company/worknconnect/",
    "https://x.com/worknconnect",
  ],
  description:
    "WorknConnect is a digital platform that connects job seekers and employers across India to simplify hiring and job searching.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9373545169",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
};

export default function Page() {
  return (
    <>
      {/* ✅ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ✅ Main Landing Sections */}
      <Hero />
      <HowItWorks />
      <AboutUs />
      <ContactSection />
    </>
  );
}
