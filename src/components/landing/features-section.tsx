"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Brain, ClipboardCheck, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Brain,
    title: "Personalized Learning",
    description:
      "Practice with quizzes designed around individual learning needs and progress.",
    shape: "flower", // distinctive organic cloud/star shape like the reference
  },
  {
    icon: ClipboardCheck,
    title: "Smart Assessment",
    description:
      "Evaluate short answers automatically and provide meaningful feedback.",
    shape: "badge",
  },
  {
    icon: HeartHandshake,
    title: "Student Support",
    description:
      "Identify early signs of learning difficulties so educators can offer timely support.",
    shape: "star",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          paragraphRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          cardsRef.current ? Array.from(cardsRef.current.children) : [],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-10 pt-10 pb-16 md:pt-14 md:pb-24 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Responsive layout: on desktop 4 columns (1 col for heading, 3 cols for features horizontally like reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column / Heading side */}
          <div className="lg:col-span-4">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl font-extrabold text-[#15254B] tracking-tight leading-[1.15]"
            >
              Why choose
              <span className="block text-[#15254B]/50 font-normal">
                Zehnix?
              </span>
            </h2>
            <p
              ref={paragraphRef}
              className="text-xs sm:text-sm text-[#15254B]/60 mt-4 leading-relaxed max-w-sm"
            >
              Every student learns differently. Zehnix uses intelligent learning
              tools to make education more personalized, accessible, and
              supportive.
            </p>
          </div>

          {/* Right Columns: 3 feature items horizontally on desktop (lg:col-span-8 grid-cols-3) */}
          <div
            ref={cardsRef}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left group"
                >
                  {/* Decorative 3D-feeling Soft Gradient Shape like reference */}
                  <div className="relative mb-5 flex items-center justify-center">
                    {idx === 0 && (
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#5D91F5] via-[#69E6F5] to-[#B9B5FF] shadow-lg shadow-[#5D91F5]/25 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#69E6F5] to-[#5D91F5] shadow-lg shadow-[#69E6F5]/30 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="w-14 h-14 rounded-2xl rotate-45 bg-gradient-to-tr from-[#5D91F5] to-[#B9B5FF] shadow-lg shadow-[#B9B5FF]/40 flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-white -rotate-45" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#15254B] mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#15254B]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
