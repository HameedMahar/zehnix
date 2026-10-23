"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface LabelItem {
  text: string;
  className: string;
  prefix?: string;
}

const labels: LabelItem[] = [
  { text: "Personalized Quizzes", className: "top-[18%] left-[6%] -rotate-6", prefix: "#" },
  { text: "AI Tutor", className: "top-[40%] left-[3%] rotate-3", prefix: "#" },
  { text: "Smart Assessment", className: "top-[62%] left-[8%] -rotate-3", prefix: "#" },
  { text: "Learn Your Way", className: "top-[18%] right-[6%] rotate-[6deg]", prefix: "#" },
  { text: "Local Languages", className: "top-[42%] right-[4%] -rotate-[5deg]", prefix: "#" },
  { text: "Student Success", className: "top-[64%] right-[8%] rotate-[4deg]", prefix: "#" },
];

export default function FloatingLabels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileLabelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        return;
      }

      // Desktop labels entrance and floating animation
      const validLabels = labelsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      if (validLabels.length > 0) {
        gsap.fromTo(
          validLabels,
          { opacity: 0, y: 25, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.7)",
            delay: 0.8,
            onComplete: () => {
              validLabels.forEach((label, i) => {
                gsap.to(label, {
                  y: `+=${5 + (i % 3) * 3}`,
                  duration: 2.2 + i * 0.25,
                  ease: "sine.inOut",
                  yoyo: true,
                  repeat: -1,
                  delay: i * 0.2,
                });
              });
            },
          }
        );
      }

      // Mobile labels entrance
      const validMobileLabels = mobileLabelsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      if (validMobileLabels.length > 0) {
        gsap.fromTo(
          validMobileLabels,
          { opacity: 0, y: 15, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(1.5)",
            delay: 0.8,
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      {/* Desktop layout: floating pills arranged symmetrically around hero heading like reference image */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {labels.map((label, index) => (
          <div
            key={label.text}
            ref={(el) => {
              labelsRef.current[index] = el;
            }}
            className={`pointer-events-auto absolute ${label.className} rounded-full bg-white/95 px-5 py-2.5 text-xs lg:text-sm font-semibold text-[#15254B] shadow-md shadow-[#15254B]/5 border border-white/80 backdrop-blur-md select-none whitespace-nowrap transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <span className="text-[#5D91F5] font-medium mr-1">{label.prefix}</span>
            {label.text}
          </div>
        ))}
      </div>

      {/* Mobile layout: responsive row of pills below hero buttons */}
      <div className="block md:hidden w-full mt-6">
        <div className="flex flex-wrap items-center justify-center gap-2 px-2">
          {labels.map((label, index) => (
            <div
              key={label.text}
              ref={(el) => {
                mobileLabelsRef.current[index] = el;
              }}
              className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#15254B] shadow-xs border border-white/60 backdrop-blur-sm whitespace-nowrap"
            >
              <span className="text-[#5D91F5] font-medium mr-0.5">{label.prefix}</span>
              {label.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
