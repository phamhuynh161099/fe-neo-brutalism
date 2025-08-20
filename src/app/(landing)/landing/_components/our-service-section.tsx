import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/animated-slideshow";
import React from "react";

const SLIDES = [
  {
    id: "slide-1",
    title: "ERP",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "DIGITAL",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "INFRA",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
];

function OurServiceSection() {
  return (
    <>
      <section
        className={`
              relative w-full flex items-center justify-center text-white
              h-[100vh]
              bg-[url('https://www.hsenterprise.co.kr/img/business-bg.webp')] bg-cover bg-center bg-no-repeat
              transition-all duration-1000
            `}
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
        }}
      >
        {/* Section background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* min-h-svh  */}
          <HoverSlider className="h-[100%] place-content-center p-6 md:px-12  text-[#3d3929]">
            <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10">
              {/* <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                Our Services
              </h2> */}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
                Our Services
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
              <div className="flex  flex-col space-y-2 md:space-y-4   ">
                {SLIDES.map((slide, index) => (
                  <TextStaggerHover
                    key={slide.title}
                    index={index}
                    className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
                    text={slide.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap>
                {SLIDES.map((slide, index) => (
                  <div key={slide.id} className="md:flex md:gap-2">
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="size-full max-h-96 w-[400px] object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
        </div>
      </section>
    </>
  );
}

export default OurServiceSection;
