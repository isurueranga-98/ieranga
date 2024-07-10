"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skil } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ type: "tween", duration: 0.2 }}
        >
          <p>My Skills</p>
        </motion.div>
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skil.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex flex-col items-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image width={50} height={50} src={skill.imageUrl} alt={skill.title} className="w-16 h-16 mb-2 rounded-full" />
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
