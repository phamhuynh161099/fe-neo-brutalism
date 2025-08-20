import React, { useState } from "react";
// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: "Vision",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mission",
    imageUrl:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Core",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop",
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: any;
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x450/2d3748/ffffff?text=Image+Error";
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {isActive && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-fade-in">
          <div className="text-center p-2">
            <p className="text-xl text-gray-200 text-left">
              Hwaseung Enterprise is a global enterprise, headquartered in South
              Korea, comprising 24 companies across 4 Verticals
            </p>
          </div>
        </div>
      )}

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        <p className={`${isActive ? "text-3xl font-bold" : ""}`}>
          {item.title}
        </p>
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-[100vh] font-sans flex items-center">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              About Us
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Hwaseung Enterprise is a global enterprise, headquartered in South
              Korea, comprising 24 companies across 4 Verticals. With an aim to
              improve the quality of life of the communities globally, by
              creating value among our stakeholders and end customers based on
              innovation & technology. Hwaseung Enterprise is the principal
              investment holding company and promoter of all Hwaseung companies
              making it worth more than a billion dollar.
            </p>
            <div className="mt-8">
              {/* <a
                href="#contact"
                className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Us
              </a> */}

              {/* <button className=" inline-flex items-center justify-center  align-middle select-none font-sans text-center px-4 py-2  text-sm font-medium rounded-lg bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none text-black antialiased">
                Contact Us
              </button> */}
              <button className="glass text-center px-4 py-2 text-black/80 ">Contact Us</button>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
