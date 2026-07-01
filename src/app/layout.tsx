import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

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
        className="antialiased bg-background text-foreground font-sans"
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
