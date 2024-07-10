
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



  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>

      
      <SectionHeading>My Latest projects</SectionHeading>
  
      <Link href='/'>
      
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
        
      
      <Link href='/'>
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
