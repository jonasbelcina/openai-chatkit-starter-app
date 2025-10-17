import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "LucasFather | AI & Automation Developer",
  description: "The personal website of Jonas Belcina (LucasFather) — Web Developer & AI Automation Consultant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased bg-[var(--background)]">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
