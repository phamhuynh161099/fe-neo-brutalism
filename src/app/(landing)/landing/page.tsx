"use client";

import { useEffect, useRef, useState } from "react";
import MainSection from "./_components/main-section";

import "../../../../public/css/lading.css";
import "../../../../public/css/liquid-glass.css";

import AboutUsSection from "./_components/about-us-section";
import OurusersSaySection from "./_components/our-users-say-section";
import TimelineSection from "./_components/timeline-section";
import OurServiceSection from "./_components/our-service-section";
import LeadershipSection from "./_components/leadership-section";

const SnapScrollingSections = () => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    {
      id: "main",
      title: "Welcome to the Future",
      subtitle: "",
      content: "",
      height: "100vh",
      bgColor: "",
    },
    {
      id: "about-us",
      title: "Welcome to the Future",
      subtitle: "",
      content: "",
      height: "100vh",
      bgColor: "",
    },
    {
      id: "our-service",
      title: "Welcome to the Future",
      subtitle: "",
      content: "",
      height: "100vh",
      bgColor: "",
    },
    {
      id: "timeline",
      title: "Welcome to the Future",
      subtitle: "",
      content: "",
      height: "100vh",
      bgColor: "",
    },
    {
      id: "leadership",
      title: "Welcome to the Future",
      subtitle: "",
      content: "",
      height: "100vh",
      bgColor: "",
    },
    {
      id: "our-users-say",
      title: "Welcome to the Future",
      subtitle: "",
      content: "",
      height: "100vh",
      bgColor: "",
    },
    {
      id: "footer",
      title: "Thank You",
      subtitle: "Stay connected",
      content: "Follow us for more incredible experiences",
      height: "50vh",
      bgColor: "bg-gradient-to-br from-black via-gray-900 to-slate-900",
    },
  ];

  const sections_need_render = [
    {
      id: "footer",
      title: "Thank You",
      subtitle: "Stay connected",
      content: "Follow us for more incredible experiences",
      height: "50vh",
      bgColor: "bg-gradient-to-br from-black via-gray-900 to-slate-900",
    },
  ];

  // Parallax và scroll tracking
  useEffect(() => {
    const container: any = containerRef.current;
    if (!container) return;

    let scrollTimeout: any;

    const handleScroll = () => {
      console.log("run function main scroll");
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);

      const containerHeight = container.clientHeight;

      let currentIdx = 0;
      let accumulatedHeight = 0;

      for (let i = 0; i < sections.length; i++) {
        const sectionHeight =
          sections[i].height === "100vh"
            ? containerHeight
            : containerHeight * 0.5;

        if (scrollTop < accumulatedHeight + sectionHeight / 2) {
          currentIdx = i;
          break;
        }
        accumulatedHeight += sectionHeight;
        currentIdx = i + 1;
      }

      setCurrentSection(Math.min(currentIdx, sections.length - 1));

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 0);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToSection = (index: any) => {
    const container: any = containerRef.current;
    if (!container) return;

    const containerHeight = container.clientHeight;
    let targetScrollTop = 0;

    for (let i = 0; i < index; i++) {
      const sectionHeight =
        sections[i].height === "100vh"
          ? containerHeight
          : containerHeight * 0.5;
      targetScrollTop += sectionHeight;
    }

    container.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  };

  // Apple-style glassmorphism component
  const GlassCard = ({
    children,
    className = "",
    blur = "backdrop-blur-sm",
  }: any) => (
    <div
      className={`
      ${blur} bg-gray-400/30 
      border border-white/30 
      rounded-2xl shadow-xl
      relative overflow-hidden
      ${className}
    `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated background particles */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div> */}

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation glass panel */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <GlassCard className="!px-2 py-4 flex flex-col gap-4 min-w-[50px] !border-1 !border-black/40 !shadow-md">
          {sections.map((section, index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => scrollToSection(index)}
                className={`
                  group relative w-4 h-4 rounded-full transition-all duration-500
                  ${
                    currentSection === index
                      ? "bg-gradient-to-r from-blue-400 to-purple-400 scale-150 shadow-lg shadow-purple-500/50"
                      : "bg-white/40 hover:bg-white/60 hover:scale-125"
                  }
                `}
                aria-label={`Go to ${section.title}`}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          ))}
        </GlassCard>
      </div>

      {/* Floating menu button */}
      <div className="fixed top-6 left-6 z-50">
        <GlassCard className="p-4 w-[60px] h-[60px] flex items-center justify-center !border-1 !border-black/40 !shadow-md">
          <button className="text-white/90 hover:text-white transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </GlassCard>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto"
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <MainSection />
        <AboutUsSection />
        <OurServiceSection />
        <TimelineSection />
        <LeadershipSection />
        <OurusersSaySection />
        {sections_need_render.map((section, index) => (
          <section
            key={section.id}
            className={`
              relative w-full flex items-center justify-center text-white ${section.bgColor}
              transition-all duration-1000
            `}
            style={{
              height: section.height,
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
          >
            {/* Section background effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                style={{
                  transform: `translateY(${(currentSection - index) * 20}px)`,
                  transition: "transform 0.8s ease-out",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-6xl px-6">
              <div
                className={`
                  transform transition-all duration-1000 ease-out
                  ${
                    currentSection === index
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-10 opacity-60 scale-95"
                  }
                `}
              >
                {/* Glass content card */}
                <div className="max-w-5xl mx-auto mb-8">
                  <GlassCard className="p-8 md:p-12">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl text-blue-200 font-semibold tracking-wide">
                          {section.subtitle}
                        </h3>
                        <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                          {section.title}
                        </h2>
                      </div>

                      <p className="text-lg md:text-xl text-white font-normal leading-relaxed max-w-3xl mx-auto">
                        {section.content}
                      </p>
                    </div>
                  </GlassCard>
                </div>

                {/* Section-specific content */}
                <div className="space-y-8">
                  {/* {section.id === "footer" && (
                    <div className="space-y-8 max-w-2xl mx-auto">
                      <GlassCard className="p-6">
                        <div className="flex justify-center gap-8 text-lg">
                          {["Privacy", "Terms", "Support"].map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="hover:text-blue-300 transition-colors duration-300 font-light"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </GlassCard>
                      <div className="space-y-3 text-white/60 text-center">
                        <p className="text-sm font-light">
                          © 2024 Premium Design Studio
                        </p>
                        <p className="text-xs opacity-50">
                          Crafted with ❤️ using Apple Glass Design
                        </p>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Floating section indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <GlassCard
          className={`!border-1 !border-black/40 !shadow-md px-6 py-3 transition-all duration-300 ${
            isScrolling ? "opacity-100" : "opacity-70"
          }`}
        >
          <div className="flex items-center gap-3 text-white/90 whitespace-nowrap">
            <span className="text-sm text-black font-bold">
              {sections[currentSection]?.title}
            </span>
            <div className="flex gap-1 ml-2">
              {sections.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSection ? "bg-blue-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SnapScrollingSections;
