import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cron Expression Generator - Build & Explain Cron Schedules | cron-generator",
  description:
    "Free online cron expression generator and explainer. Build cron schedules visually, get human-readable explanations, and see next run times. Supports crontab syntax.",
  keywords: [
    "cron expression generator",
    "crontab generator",
    "cron schedule generator",
    "cron expression explained",
    "cron job generator",
    "crontab maker",
    "cron syntax",
  ],
  openGraph: {
    title: "Cron Expression Generator - Build & Explain Cron Schedules",
    description:
      "Free online cron expression generator and explainer. Build cron schedules visually, get human-readable explanations, and see next run times.",
    type: "website",
    locale: "en_US",
    siteName: "Cron Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cron Expression Generator - Build & Explain Cron Schedules",
    description:
      "Free online cron expression generator and explainer. Build cron schedules visually and get human-readable explanations.",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cron Expression Generator",
    description:
      "Free online cron expression generator and explainer. Build cron schedules visually, get human-readable explanations, and see next run times.",
    url: "https://cron-generator.vercel.app",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Visual cron expression builder",
      "Human-readable cron explanations",
      "Next 5 scheduled run times",
      "Common cron presets",
      "24-hour visual timeline",
      "Reverse cron expression parser",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50">{children}</body>
    </html>
  );
}
