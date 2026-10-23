"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Compass, Play } from "lucide-react";
import FloatingLabels from "./floating-labels";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const symbolRef = useRef<SVGSVGElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            symbolRef.current,
            headingRef.current,
            paragraphRef.current,
            buttonsRef.current ? buttonsRef.current.children : null,
          ],
          { opacity: 1 }
        );
        return;
      }

      const tl = gsap.timeline();

      tl.fromTo(
        symbolRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      )
        .fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          paragraphRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.15 },
          "-=0.2"
        );

      gsap.to(symbolRef.current, {
        y: -6,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-10 pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 px-4 flex flex-col items-center justify-center min-h-[520px]"
    >
      {/* Floating Labels Desktop & Mobile */}
      <FloatingLabels />

      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Decorative Symbol - matching reference concentric elliptical icon */}
        <div className="relative mb-5 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#5D91F5]/20 blur-xl rounded-full" />
          <svg
            ref={symbolRef}
            width="52"
            height="52"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-symbol relative"
          >
            <ellipse
              cx="24"
              cy="24"
              rx="18"
              ry="21"
              stroke="#5D91F5"
              strokeWidth="1.75"
              fill="none"
            />
            <ellipse
              cx="24"
              cy="24"
              rx="9"
              ry="21"
              stroke="#5D91F5"
              strokeWidth="1.75"
              fill="none"
            />
            <line
              x1="24"
              y1="3"
              x2="24"
              y2="45"
              stroke="#5D91F5"
              strokeWidth="1.75"
            />
            <circle cx="24" cy="24" r="3.5" fill="#5D91F5" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#15254B] text-center tracking-tight leading-[1.08]"
        >
          Learning That Thinks About You.
        </h1>

        {/* Supporting Paragraph */}
        <p
          ref={paragraphRef}
          className="text-sm sm:text-base text-[#15254B]/60 text-center max-w-xl mx-auto mt-5 leading-relaxed font-normal"
        >
          Personalized quizzes, intelligent assessments, and AI-powered tutoring
          designed to help every student learn in their own way.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8"
        >
          {/* Primary Button with glowing gradient matching reference */}
          <a
            href="#features"
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-[#5D91F5] via-[#69E6F5] to-[#5D91F5] bg-[length:200%_auto] shadow-lg shadow-[#5D91F5]/30 hover:shadow-xl hover:shadow-[#5D91F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Start Learning</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* Secondary Button matching reference "Watch Video / Explore Features" */}
          <a
            href="#features"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#15254B] bg-white/70 hover:bg-white border border-[#15254B]/10 hover:border-[#15254B]/20 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <div className="w-5 h-5 rounded-full bg-[#15254B] flex items-center justify-center text-white">
              <Play size={10} className="fill-white translate-x-[1px]" />
            </div>
            <span>Explore Features</span>
          </a>
        </div>
      </div>
    </section>
  );
}
