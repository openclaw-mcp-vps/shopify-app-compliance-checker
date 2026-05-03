import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify App Compliance Checker — Scan Apps for Policy Violations",
  description: "Audit your installed Shopify apps against store policies. Flag compliance issues, get recommendations, and keep your store safe. Starting at $12/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ef842d09-1b26-4395-ae6c-e660f0e08ec3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
