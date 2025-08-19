import React from "react";

function HeroSection() {
  return (
    <>
      <section
        className={`
              relative w-full flex items-center justify-center text-white
              h-[100vh]
              transition-all duration-1000
            `}
        style={{
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
              //   transform: `translateY(${(currentSection - index) * 20}px)`,
              transition: "transform 0.8s ease-out",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6">
          <div
            className={`
                  transform transition-all duration-1000 ease-out
                  
                `}
          >
            {/* Glass content card */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl text-blue-200 font-semibold tracking-wide">
                      123
                    </h3>
                    <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                      123
                    </h2>
                  </div>

                  <p className="text-lg md:text-xl text-white font-normal leading-relaxed max-w-3xl mx-auto">
                    123
                  </p>
                </div>
              </div>
            </div>

            {/* Section-specific content */}
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div>
                    <button className="px-12 py-4 text-white font-medium text-lg hover:scale-105 transition-transform duration-300">
                      Explore Now
                      <span className="ml-2">→</span>
                    </button>
                  </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
