import type { Metadata } from "next";
import "./globals.css";

import { roobert } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "YASPN Portfolio",
  description:
    "Modern infrastructure and global development company portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roobert.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#050816] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}