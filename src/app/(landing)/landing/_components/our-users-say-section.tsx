import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "motion/react";
import React from "react";

const testimonials = [
  {
    text: "HS Digital transformed our legacy systems with a modern, scalable solution. Their team delivered on time and within budget.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "CTO, TechVantage",
  },
  {
    text: "Their cybersecurity team identified critical vulnerabilities and fortified our infrastructure. Highly recommend their proactive approach!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Security Director",
  },
  {
    text: "The custom SaaS platform HS Digital built streamlined our workflow, reducing operational costs by 30%. A game-changer!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "COO, Finova",
  },
  {
    text: "From cloud migration to DevOps automation, HS Digital’s expertise was invaluable. Their support is responsive and knowledgeable.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "IT Director",
  },
  {
    text: "Their AI-powered analytics solution provided actionable insights, boosting our decision-making speed by 50%.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Data Strategist",
  },
  {
    text: "HS Digital’s mobile app development exceeded expectations—intuitive UI, flawless performance, and on-time delivery.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Product Manager",
  },
  {
    text: "Their 24/7 IT managed services ensured zero downtime for our e-commerce platform during peak seasons.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Tech Lead",
  },
  {
    text: "The ERP system they customized eliminated inefficiencies across our supply chain. A true partner in innovation.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Operations Director",
  },
  {
    text: "HS Digital’s IoT integration revolutionized our smart manufacturing process. Their engineers are top-notch.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Head of Innovation",
  },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function OurusersSaySection() {
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
        {/* <div className="absolute inset-0 bg-sky-500/85"></div> */}
        {/* Section background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <section className="my-20 relative">
            <div className="container z-10 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
              >
                <div className="flex justify-center">
                  {/* <div className="border py-1 px-4 rounded-lg text-black">Trusted</div> */}
                  <div className="glass border py-1 px-4 rounded-lg text-black">Trusted</div>
                </div>

                <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
                  Success Stories
                </h2>
                <p className="text-black text-center mt-5 opacity-75">
                  Discover how partnering with HS Digital transformed businesses
                  like yours.
                </p>
              </motion.div>

              <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                <TestimonialsColumn testimonials={firstColumn} duration={15} />
                <TestimonialsColumn
                  testimonials={secondColumn}
                  className="hidden md:block"
                  duration={19}
                />
                <TestimonialsColumn
                  testimonials={thirdColumn}
                  className="hidden lg:block"
                  duration={17}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default OurusersSaySection;
