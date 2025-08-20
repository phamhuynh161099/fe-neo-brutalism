"use client";
import HeroSection from "@/app/(landing)/landing/_components/hero-section";
import React, { useRef, useEffect, useState } from "react";

const SnapScrollingSections = () => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    {
      id: "hero",
      title: "Welcome to the Future",
      subtitle: "Experience seamless design",
      content: "Discover innovation at its finest with cutting-edge technology",
      height: "100vh",
      bgColor: "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900",
    },
    {
      id: "about",
      title: "About Innovation",
      subtitle: "Crafting digital experiences",
      content:
        "We blend creativity with technology to create extraordinary solutions",
      height: "100vh",
      bgColor: "bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900",
    },
    {
      id: "services",
      title: "Premium Services",
      subtitle: "Excellence in every detail",
      content: "From concept to completion, we deliver world-class solutions",
      height: "100vh",
      bgColor: "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900",
    },
    {
      id: "portfolio",
      title: "Our Portfolio",
      subtitle: "Showcasing excellence",
      content: "A collection of our finest work and achievements",
      height: "100vh",
      bgColor:
        "bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900",
    },
    {
      id: "contact",
      title: "Get In Touch",
      subtitle: "Start your journey",
      content: "Ready to transform your vision into reality?",
      height: "100vh",
      bgColor: "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900",
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

  // Parallax và scroll tracking
  useEffect(() => {
    const container: any = containerRef.current;
    if (!container) return;

    let scrollTimeout: any;

    const handleScroll = () => {
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
      }, 150);
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
      ${blur} bg-white/20 
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
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
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation glass panel */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <GlassCard className="p-4 flex flex-col gap-4 min-w-[60px]">
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
        <GlassCard className="p-4 w-[60px] h-[60px] flex items-center justify-center">
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
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {sections.map((section, index) => (
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
                  {section.id === "hero" && (
                    <div className="space-y-8">
                      <div className="flex justify-center">
                        <GlassCard>
                          <button className="px-12 py-4 text-white font-medium text-lg hover:scale-105 transition-transform duration-300">
                            Explore Now
                            <span className="ml-2">→</span>
                          </button>
                        </GlassCard>
                      </div>
                      <div className="animate-bounce flex justify-center">
                        <svg
                          className="w-8 h-8 text-white/60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {section.id === "about" && (
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                      {["Innovation", "Quality", "Excellence"].map(
                        (item, i) => (
                          <GlassCard
                            key={item}
                            className="p-8 hover:scale-105 transition-transform duration-500 text-center"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            <div className="text-6xl mb-4">✨</div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                              {item}
                            </h3>
                            <p className="text-white/90 leading-relaxed font-medium">
                              Delivering exceptional results through
                              cutting-edge solutions
                            </p>
                          </GlassCard>
                        )
                      )}
                    </div>
                  )}

                  {section.id === "services" && (
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-wrap justify-center gap-4">
                        {[
                          "Web Design",
                          "Mobile Apps",
                          "AI Solutions",
                          "Cloud Services",
                          "Consulting",
                        ].map((service, i) => (
                          <GlassCard
                            key={service}
                            className="px-6 py-3 hover:scale-110 transition-all duration-300"
                          >
                            <span className="text-white font-semibold">
                              {service}
                            </span>
                          </GlassCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.id === "portfolio" && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <GlassCard
                          key={item}
                          className="aspect-square p-6 hover:scale-105 transition-transform duration-500 group"
                        >
                          <div className="h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                🎨
                              </div>
                              <h3 className="text-lg font-bold text-white">
                                Project {item}
                              </h3>
                            </div>
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  )}

                  {section.id === "contact" && (
                    <div className="max-w-2xl mx-auto">
                      <GlassCard className="p-8">
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 transition-all outline-none"
                            />
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 transition-all outline-none"
                            />
                          </div>
                          <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 transition-all outline-none resize-none"
                          />
                          <div className="flex justify-center">
                            <GlassCard>
                              <button className="px-10 py-4 text-white font-medium hover:scale-105 transition-transform duration-300">
                                Send Message ✨
                              </button>
                            </GlassCard>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  )}

                  {section.id === "footer" && (
                    // <div className="space-y-8 max-w-2xl mx-auto">
                    //   <GlassCard className="p-6">
                    //     <div className="flex justify-center gap-8 text-lg">
                    //       {["Privacy", "Terms", "Support"].map((item) => (
                    //         <a
                    //           key={item}
                    //           href="#"
                    //           className="hover:text-blue-300 transition-colors duration-300 font-light"
                    //         >
                    //           {item}
                    //         </a>
                    //       ))}
                    //     </div>
                    //   </GlassCard>
                    //   <div className="space-y-3 text-white/60 text-center">
                    //     <p className="text-sm font-light">
                    //       © 2024 Premium Design Studio
                    //     </p>
                    //     <p className="text-xs opacity-50">
                    //       Crafted with ❤️ using Apple Glass Design
                    //     </p>
                    //   </div>
                    // </div>
                    <>
                      {/* Footer Section */}
                      <footer className="bg-gray-900 text-white relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                        <div className="container mx-auto px-6 py-16">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                            <div className="lg:col-span-2">
                              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                YourCompany
                              </h3>
                              <p className="text-gray-300 mb-6 leading-relaxed">
                                Chúng tôi tạo ra những trải nghiệm web tuyệt vời
                                với công nghệ hiện đại và thiết kế sáng tạo. Đội
                                ngũ chuyên nghiệp của chúng tôi luôn sẵn sàng
                                biến ý tưởng của bạn thành hiện thực.
                              </p>

                              <div className="flex space-x-4">
                                {[
                                  "Facebook",
                                  "Twitter",
                                  "LinkedIn",
                                  "Instagram",
                                ].map((social, idx) => (
                                  <button
                                    key={social}
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
                                    title={social}
                                  >
                                    <span className="text-sm font-bold">
                                      {social[0]}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {[].map((column: any, index) => (
                              <div key={index} className="space-y-4">
                                <h4 className="text-xl font-semibold mb-4 text-white">
                                  {column.title}
                                </h4>
                                <ul className="space-y-3">
                                  {column.links.map(
                                    (link: any, linkIndex: any) => (
                                      <li key={linkIndex}>
                                        <button className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                                          {link}
                                        </button>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-gray-800 pt-12 mb-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                              <div>
                                <h4 className="text-2xl font-bold mb-4">
                                  Đăng ký nhận tin tức
                                </h4>
                                <p className="text-gray-300">
                                  Nhận những cập nhật mới nhất và ưu đãi đặc
                                  biệt từ chúng tôi.
                                </p>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                  type="email"
                                  placeholder="Nhập email của bạn..."
                                  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                                />
                                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                                  Đăng ký
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-6 bg-gray-800 rounded-xl">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">📧</span>
                              </div>
                              <h5 className="font-semibold mb-2">Email</h5>
                              <p className="text-gray-300">
                                contact@yourcompany.com
                              </p>
                            </div>

                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">📞</span>
                              </div>
                              <h5 className="font-semibold mb-2">Điện thoại</h5>
                              <p className="text-gray-300">+84 123 456 789</p>
                            </div>

                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">📍</span>
                              </div>
                              <h5 className="font-semibold mb-2">Địa chỉ</h5>
                              <p className="text-gray-300">
                                123 Đường ABC, Quận XYZ, TP.HCM
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-800">
                          <div className="container mx-auto px-6 py-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                              <p className="text-gray-400 text-sm">
                                © 2025 YourCompany. Tất cả quyền được bảo lưu.
                              </p>
                              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                                <button className="hover:text-white transition-colors duration-300">
                                  Chính sách bảo mật
                                </button>
                                <button className="hover:text-white transition-colors duration-300">
                                  Điều khoản sử dụng
                                </button>
                                <button className="hover:text-white transition-colors duration-300">
                                  Sitemap
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => scrollToSection(0)}
                          className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          title="Về đầu trang"
                        >
                          ↑
                        </button>
                      </footer>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Floating section indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <GlassCard
          className={`px-6 py-3 transition-all duration-300 ${
            isScrolling ? "opacity-100" : "opacity-70"
          }`}
        >
          <div className="flex items-center gap-3 text-white/90 whitespace-nowrap">
            <span className="text-sm font-light">
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
