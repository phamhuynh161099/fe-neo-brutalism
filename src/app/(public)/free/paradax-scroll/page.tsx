"use client";
import React, { useState, useEffect, useRef } from "react";

const ScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  // Theo dõi vị trí scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        //@ts-ignore
        const scrollPosition = containerRef.current.scrollTop;
        setScrollY(scrollPosition);

        // Xác định section hiện tại
        const windowHeight = window.innerHeight;
        // const currentSectionIndex = Math.floor(scrollPosition / windowHeight);
        // setCurrentSection(currentSectionIndex);
      }
    };

    const container: any = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Smooth scroll đến section
  const scrollToSection = (sectionIndex: number) => {
    const container: any = containerRef.current;
    if (container) {
      container.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Dữ liệu các section
  const sections = [
    {
      id: 1,
      title: "Welcome",
      subtitle: "Hiệu ứng Parallax",
      bgColor: "from-blue-600 to-purple-700",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "About",
      subtitle: "Fade In Animation",
      bgColor: "from-green-500 to-teal-600",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Services",
      subtitle: "Scale Transform",
      bgColor: "from-orange-500 to-red-600",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Portfolio",
      subtitle: "Slide Animation",
      bgColor: "from-pink-500 to-rose-600",
      textColor: "text-white",
    },
    {
      id: 5,
      title: "Contact",
      subtitle: "Rotate Effect",
      bgColor: "from-indigo-600 to-blue-700",
      textColor: "text-white",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            title={section.title}
          />
        ))}
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-50">
        <div
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{
            width: `${Math.min(
              100,
              (scrollY / (sections.length - 1) / window.innerHeight) * 100
            )}%`,
          }}
        />
      </div>

      {/* Main Container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {sections.map((section, index) => {
          // Tính toán hiệu ứng dựa trên vị trí scroll
          const sectionOffset = scrollY - index * window.innerHeight;
          const progress = Math.max(
            0,
            Math.min(1, -sectionOffset / window.innerHeight)
          );

          // Các hiệu ứng khác nhau cho mỗi section
          const getTransform = () => {
            switch (index) {
              case 0: // Parallax
                return `translateY(${sectionOffset * 0.5}px)`;
              case 1: // Fade & Scale
                return `scale(${0.8 + progress * 0.2}) translateY(${
                  sectionOffset * 0.1
                }px)`;
              case 2: // Rotate & Scale
                return `rotate(${sectionOffset * 0.05}deg) scale(${
                  0.9 + progress * 0.1
                })`;
              case 3: // Slide
                return `translateX(${sectionOffset * 0.3}px) translateY(${
                  sectionOffset * 0.2
                }px)`;
              case 4: // 3D Rotate
                return `perspective(1000px) rotateX(${
                  sectionOffset * 0.1
                }deg) rotateY(${sectionOffset * 0.05}deg)`;
              default:
                return "none";
            }
          };

          const getOpacity = () => {
            const distance = Math.abs(sectionOffset);
            return Math.max(0.3, 1 - distance / (window.innerHeight * 0.8));
          };

          return (
            <div
              key={section.id}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`relative w-full h-screen flex items-center justify-center snap-start bg-gradient-to-br ${section.bgColor}`}
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                  backgroundSize: "50px 50px",
                  transform: `translate(${-scrollY * 0.1}px, ${
                    -scrollY * 0.05
                  }px)`,
                }}
              />

              {/* Content */}
              <div
                className={`text-center z-10 ${section.textColor}`}
                style={{
                  transform: getTransform(),
                  opacity: getOpacity(),
                  transition: "all 0.1s ease-out",
                }}
              >
                <h1
                  className="text-6xl md:text-8xl font-bold mb-6"
                  style={{
                    transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`,
                  }}
                >
                  {section.title}
                </h1>
                <p
                  className="text-2xl md:text-3xl font-light opacity-90"
                  style={{
                    transform: `translateY(${Math.cos(scrollY * 0.01) * 15}px)`,
                  }}
                >
                  {section.subtitle}
                </p>

                {/* Floating Elements */}
                <div
                  className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"
                  style={{
                    transform: `rotate(${scrollY * 0.1}deg) scale(${
                      1 + Math.sin(scrollY * 0.02) * 0.1
                    })`,
                  }}
                />
                <div
                  className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/5 rounded-full"
                  style={{
                    transform: `rotate(${-scrollY * 0.15}deg) scale(${
                      1 + Math.cos(scrollY * 0.03) * 0.1
                    })`,
                  }}
                />
              </div>

              {/* Section Number */}
              <div className="absolute top-8 left-8 text-white/50 text-xl font-mono">
                0{section.id}
              </div>

              {/* Scroll Indicator (chỉ hiển thị ở section đầu) */}
              {index === 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
                  <div className="flex flex-col items-center">
                    <span className="text-sm mb-2">Scroll xuống</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                      <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="h-[300px] w-full">
          <p>This is footer</p>
        </div>
      </div>

      {/* Current Section Info */}
      {/* <div className="fixed bottom-8 left-8 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
        <div className="text-sm">
          Section: {currentSection + 1}/{sections.length}
        </div>
        <div className="text-xs opacity-70">
          Scroll: {Math.round(scrollY)}px
        </div>
      </div> */}
    </div>
  );
};

export default ScrollEffects;
