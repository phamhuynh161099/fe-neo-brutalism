"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: any;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                (
                  { text, image, name, role }: { [key: string]: string },
                  i: number
                ) => (
                  <div
                    className="p-10 rounded-3xl border shadow-md shadow-sky-300/50 shadow-primary/10 max-w-xs w-full cursor-pointer"
                    key={i}
                  >
                    <div className="text-black">{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="text-black font-medium tracking-tight leading-5">
                          {name}
                        </div>
                        <div className="text-black leading-5 opacity-60 tracking-tight">
                          {role}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
