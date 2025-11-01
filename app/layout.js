import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SafeHydration from "@/components/SafeHydration";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "WorknConnect | Empowering Connections, Creating Opportunities 💼",
    template: "%s | WorknConnect",
  },
  description:
    "WorknConnect connects job seekers and employers seamlessly. Post jobs, find opportunities, and build your future — all in one trusted platform built for everyone.",
  keywords: [
    "job platform",
    "find jobs",
    "post jobs",
    "local hiring",
    "worknconnect",
    "career opportunities",
    "hire workers",
    "employment network",
    "community jobs",
    "job board",
  ],
  authors: [{ name: "Omradix Solutions", url: "https://omradixsolutions.vercel.app" }],
  creator: "Omradix Solutions",
  publisher: "WorknConnect",
  metadataBase: new URL("https://worknconnect.vercel.app"),
  alternates: {
    canonical: "https://worknconnect.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://worknconnect.vercel.app",
    siteName: "WorknConnect",
    title: "WorknConnect | Connecting People & Opportunities",
    description:
      "Join WorknConnect — where every connection creates a new opportunity. Post jobs, find work, and grow together.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WorknConnect - Connecting People and Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorknConnect | Empowering Connections, Creating Opportunities 💼",
    description:
      "A modern platform connecting job seekers and employers with simplicity and trust. Post or find jobs today!",
    creator: "@worknconnect",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Job Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "application-name": "WorknConnect",
    "msapplication-TileColor": "#2563eb",
  },
};

export const viewport = {
  themeColor: "#2563eb",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WorknConnect",
  url: "https://worknconnect.vercel.app",
  logo: "https://worknconnect.vercel.app/images/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/worknconnect",
    "https://twitter.com/worknconnect",
    "https://facebook.com/worknconnect",
  ],
  description:
    "WorknConnect is a people-first job network connecting job seekers and employers with simplicity and trust.",
  founder: {
    "@type": "Person",
    name: "Omradix Solutions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {/* ✅ Hydrate content safely */}
        <SafeHydration>
          {/* ✅ Page Content */}
          <main className="relative min-h-screen flex flex-col justify-between">
            {children}

            {/* ✅ Fixed bottom Navbar */}
            <Navbar />
          </main>
        </SafeHydration>

        {/* ✅ Footer below everything */}
        <Footer />
      </body>
    </html>
  );
}
