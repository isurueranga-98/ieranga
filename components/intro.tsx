"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return ( 
    <section ref={ref} id="home" className="mb-28 max-w-[100rem] text-center justify-center sm:mb-0 scroll-mt-[100rem] lg:w-[60rem]">
      <div className=" flex-col-reverse flex items-center justify-center lg:flex-row-reverse lg:justify-between">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2, }} >
            <Image
              src="/isuruimg.png"
              alt="Ricardo portrait"
              width="500"
              height="500"
              quality="100"
              priority={true}
              className="h-56 w-56 rounded-2xl object-cover shadow-xl lg:h-80 lg:w-80"
            />
          </motion.div>
        </div>

        <div className="mb-10 mt-4 px-4 lg:justify-start lg:items-start lg:text-left ">
          <motion.h1 className=" text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} >
            <span className="font-bold">Hello, I am <span className="">Isuru Eranga</span></span>
          </motion.h1>

          <div className=" mt-2 lg:flex gap-5">
            <motion.h1 className=" text-lg font-light !leading-[1.5] sm:text-2xl lg:text-lg " initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} >
              <span className="">Data Science Enthusiast</span>
            </motion.h1>
            <motion.h1 className=" text-lg font-light !leading-[1.5] sm:text-2xl lg:text-lg" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} >
              <span className="">Full Stack Developer</span>
            </motion.h1>
            <motion.h1 className=" text-lg font-light !leading-[1.5] sm:text-2xl lg:text-lg" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} >
              <span className="">UI UX Designer</span>
            </motion.h1>
          </div>

          <motion.div className=" mt-5 flex gap-3 items-center justify-center] " initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2, }}>
            <Image src='/icons8-figma.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-javascript.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-nextjs.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-node-js.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-python.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-react.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-tailwind-css.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
            <Image src='/icons8-typescript.svg' width={50} height={50} alt="figma" className=" w-[30px] h-[30px]"/>
          </motion.div>

          <motion.div className=" mt-5" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1, }} >
            <div className=" flex gap-5 items-center justify-center lg:items-start lg:justify-start">
              <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition text-sm"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me {" "}
                <BsArrowRight className=" hidden lg:flex opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-sm"
                href="/Isuru Eranga.pdf"
                download
              >
                Download CV{" "}
                <HiDownload className=" hidden lg:flex opacity-60 group-hover:translate-y-1 transition" />
              </a>
            </div>

            <div className=" mt-5 flex items-center justify-center gap-2 lg:items-start lg:justify-start">
                <a
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/isuru-eranga-230300110/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>

                <a
                  className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/isurueranga-98"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.facebook.com/?_rdc=1&_rdr"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
            </div>
          </motion.div>

        </div>
      </div>

      

      
    </section>
  );
}
