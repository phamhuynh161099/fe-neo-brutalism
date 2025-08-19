import React from "react";
import Demo from "./demo-scroll";

function MainSection() {
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
        <div className="absolute inset-0 overflow-hidden">
          <Demo />
        </div>
      </section>
    </>
  );
}

export default MainSection;
