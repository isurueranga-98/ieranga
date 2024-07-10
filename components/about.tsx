"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[75rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className=" flex flex-col lg:flex-row-reverse items-center justify-center lg:gap-10 lg:text-justify">
        <p className="mb-3 w-1/2">
          Hello there! I'm Isuru Eranga, currently immersed in the world of technology as I pursue a BSc (Hons) in Computing & Information Systems at Sabaragmuwa University of Sri Lanka. With a passion for harnessing the power of data, I proudly identify as a Data Science Enthusiast. As a Full Stack Developer, I revel in the intricate dance between front-end and back-end technologies, bringing ideas to life through seamless, user-centric interfaces. My creative flair extends to UI/UX design, where I strive to marry aesthetics with functionality. Join me on my journey as I explore the ever-evolving landscape of computing and contribute to the exciting intersection of data science, development, and design.
        </p>
          <motion.div className=" flex items-center justify-center" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} >
          <Image src='/photo2.jpg' width={300} height={300} className=" rounded-2xl shadow-xl" alt="image"/>
        </motion.div>
      </div>
      
    </motion.section>
  );
}
