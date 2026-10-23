import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zehnix — Learning That Thinks About You",
  description:
    "AI-powered education platform designed to make learning personalized, accessible, and intelligent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} antialiased min-h-screen text-[#15254B] bg-white`}>
        {children}
      </body>
    </html>
  );
}
