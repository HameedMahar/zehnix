"use client";

import Navbar from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden selection:bg-[#5D91F5]/20 selection:text-[#15254B]">
      {/* Sky Gradient Background at the top of the full page */}
      <div className="absolute top-0 left-0 right-0 h-[750px] md:h-[820px] bg-gradient-to-b from-[#7CB2FE] via-[#B4D7FE] via-55% to-white pointer-events-none z-0" />

      {/* Realistic Organic Cumulus Cloud Formations */}
      <div className="absolute top-0 left-0 right-0 h-[700px] pointer-events-none overflow-hidden z-0">
        {/* Left Cloud Cluster */}
        <div className="absolute -top-16 -left-16 sm:-left-8 w-[420px] sm:w-[540px] md:w-[640px] h-[380px] opacity-90">
          <svg viewBox="0 0 500 350" className="w-full h-full fill-white drop-shadow-sm filter blur-[0.5px]">
            <ellipse cx="180" cy="220" rx="170" ry="85" />
            <circle cx="160" cy="140" r="105" />
            <circle cx="280" cy="160" r="115" />
            <circle cx="360" cy="220" r="80" />
            <ellipse cx="250" cy="260" rx="190" ry="75" />
          </svg>
        </div>

        {/* Right Cloud Cluster */}
        <div className="absolute -top-20 -right-20 sm:-right-10 w-[440px] sm:w-[560px] md:w-[680px] h-[400px] opacity-90">
          <svg viewBox="0 0 500 350" className="w-full h-full fill-white drop-shadow-sm filter blur-[0.5px]">
            <ellipse cx="320" cy="220" rx="170" ry="85" />
            <circle cx="340" cy="140" r="105" />
            <circle cx="220" cy="160" r="120" />
            <circle cx="130" cy="210" r="85" />
            <ellipse cx="260" cy="260" rx="190" ry="75" />
          </svg>
        </div>

        {/* Soft Ambient Horizon Cloud Blend */}
        <div className="absolute top-[550px] left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/80 to-white" />
      </div>

      {/* Main Page Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Floating Pills */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />
      </main>

      {/* Standard Full-width Footer */}
      <footer className="relative z-10 w-full py-10 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#15254B]/50 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#5D91F5]" />
            <span className="font-bold text-[#15254B] text-sm">Zehnix</span>
            <span>&mdash; AI-Powered Education Platform</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Zehnix Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
