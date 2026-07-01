import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ORCODIX | Creative Digital Agency",
  description: "We turn great ideas into brands people remember. Premium design and interactive digital experiences for modern brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
