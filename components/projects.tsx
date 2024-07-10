
"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectsData3 } from "@/lib/data";
import { projectsData2 } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";



export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const [isWebDataVisible, setIsWebDataVisible] = useState(true);
  const [isUiDataVisible, setIsUiDataVisible] = useState(false);
  const [isDataDataVisible, setIsDataDataVisible] = useState(false);
  const [isWebActive, setisWebActive] = useState(true);
  const [isUiActive, setisUiActive] = useState(false);
  const [isDataActive, setisDataActive] = useState(false);

  const webhandleClick = () => {
    setisWebActive(true);
    setisUiActive(false);
    setisDataActive(false);
    setIsUiDataVisible(false);
    setIsDataDataVisible(false);
    setIsWebDataVisible(true); 
  };
  const UihandleClick = () => {
    setisWebActive(false);
    setisUiActive(true);
    setisDataActive(false);
    setIsWebDataVisible(false);
    setIsDataDataVisible(false);
    setIsUiDataVisible(true); 

  };
  const datahandleClick = () => {
    setisWebActive(false);
    setisUiActive(false);
    setisDataActive(true);
    setIsWebDataVisible(false);
    setIsUiDataVisible(false);
    setIsDataDataVisible(true); 

  };

  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>

      
      <SectionHeading>My projects</SectionHeading>
      <div className=" mb-5 flex justify-center items-center gap-10 text-sm  md:text-lg lg:text-xl">
        <button onClick={webhandleClick} className={`${isWebActive ? ' bg-black/70 text-white dark:bg-white/10 dark:text-white/60' : ' '} p-3 rounded-full `}>
          Web Project
        </button>
        <button onClick={UihandleClick} className={`${isUiActive ? ' bg-black/70 text-white dark:bg-white/10 dark:text-white/60' : ' '} p-3 rounded-full `}>
          UI UX Project
        </button>
        {/* <button onClick={datahandleClick} className={`${isDataActive ? ' bg-black/70 text-white dark:bg-white/10 dark:text-white/60' : ' '} p-3 rounded-full `}>
          Data Science Project
        </button> */}
      </div>
      
      
      
  
      <Link href='http://www.facebook.com'>
      
        {isWebDataVisible && (
          <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        )}
      </Link>
        
      
      <Link href='http://www.google.com'>
      {isUiDataVisible && (
        <div>
          {projectsData2.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      )}
      </Link>
    

      {isDataDataVisible && (
        <div>
          {projectsData3.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      )}

      

    </motion.div>
    </section>
  );
}
