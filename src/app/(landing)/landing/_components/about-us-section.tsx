import { LandingAccordionItem } from "@/components/interactive-image-accordion";
import React from "react";

function AboutUsSection() {
  return (
    <>
      <section
        className={`
              relative w-full flex items-center justify-center text-white
              h-[100vh]
              transition-all duration-1000
              bg-[url('https://www.hsenterprise.co.kr/img/business-bg.webp')] bg-cover bg-center bg-no-repeat
            `}
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
        }}
      >
        {/* Section background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <LandingAccordionItem />
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
