"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";


export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 flex flex-col  items-center justify-center">
      <motion.div 
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ type: "tween", duration: 0.2 }}
        >
      
      <SectionHeading>My experience</SectionHeading>
      {/* {isVisible && (
        <VerticalTimeline lineColor="" >
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      )} */}


          

      <div className="flex flex-col gap-10">

        <div className=" flex flex-col gap-3">
          <p className=" text-xl font-bold">Freelancer</p>
          <p>2023 – Present</p>
          <p>Fullstack Developer (React JS, Next JS, Typescript, Tailwind CSS, Node JS)</p>
        </div>


        <div className="flex flex-col gap-3">
          <p className=" text-xl font-bold">Graphic Designer   </p>
          <p>May 2023 - Present </p>
          <p>Remote Graphic Designer at Asiri Trading, Singapore </p>
        </div>

      </div>

        </motion.div>

      
    </section>

    // 
  );
}



// className="scroll-mt-28 mb-28 sm:mb-40" this is the correct classname