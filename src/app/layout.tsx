import { Suspense } from "react";

import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

import { UmamiAnalytics } from "@/components/analytics/UmamiAnalytics";
import { CustomCursor } from "@/components/common/CustomCursor";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { NavigationProgress } from "@/components/common/NavigationProgress";
import SwarmTrigger from "@/components/common/SwarmTrigger";
import { poppins } from "@/config/font";
import { AppProviders } from "@/providers/AppProviders";

import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "data:," },
  metadataBase: new URL(process.env.SITE_URL || "https://v1vekreddy.github.io"),
  alternates: {
    canonical: "https://v1vekreddy.github.io",
  },
  title: {
    default: "Vivek Reddy - AI and ML Engineer",
    template: "%s",
  },

  description:
    "AI/ML Engineer and IIT Guwahati graduate building document intelligence, RAG, and real-time speech applications.",

  openGraph: {
    type: "website",
    url: "https://v1vekreddy.github.io/",
    title: "Vivek Reddy - AI and ML Engineer",
    description:
      "AI/ML Engineer and IIT Guwahati graduate building document intelligence, RAG, and real-time speech applications.",
    siteName: "Vivek Reddy",
    images: [
      {
        url: "https://v1vekreddy.github.io/assets/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Vivek Reddy Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivek Reddy - AI and ML Engineer",
    description:
      "AI/ML Engineer and IIT Guwahati graduate building document intelligence, RAG, and real-time speech applications.",
    images: ["https://v1vekreddy.github.io/assets/social-preview.png"],
    creator: "",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <AppProviders>
            <NavigationProgress />
            <Toaster richColors position="top-right" />
            <CustomCursor />
            <Navbar />
            {children}
            <SwarmTrigger />
            <Footer />
            <Analytics />
            <UmamiAnalytics />
            <SpeedInsights />
          </AppProviders>
        </Suspense>
      </body>
    </html>
  );
}
