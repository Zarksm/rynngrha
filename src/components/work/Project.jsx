"use client";
import { projects } from "@/lib/Constant";
import Image from "next/image";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";

const Project = () => {
  const [activeContent, setActiveContent] = useState(1);

  return (
    <div className="w-full h-auto bg-primary px-10 md:px-36 pb-20">
      <div className="pb-10 md:container">
        <h1 className="font-fairplay text-5xl text-greenls">Project</h1>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between gap-10 font-sans">
            {/* left | buttons */}
            <div className="flex flex-col gap-5 md:py-10 max-h-16 overflow-auto md:max-h-max md:min-w-80">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveContent(project.id)}
                  className={`cursor-pointer font-sans flex gap-3 items-center ${
                    activeContent === project.id
                      ? "text-greenl"
                      : "text-white hover:text-greenl"
                  }`}
                >
                  <div className="text-greenls">
                    <BsStars />
                  </div>
                  {project.title}
                </div>
              ))}
            </div>
            {/* right | content */}
            <div className="w-full  flex-1 py-5 md:p-5 border-t border-b justify-center border-greenl md:border-none ">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={activeContent === project.id ? "block" : "hidden"}
                >
                  {project.content.map((contentItem) => (
                    <div key={contentItem.id} className="space-y-5">
                      <h2 className="text-2xl md:text-3xl font-bold text-greenl">
                        {contentItem.title}
                      </h2>
                      <div className="flex flex-wrap gap-y-2">
                        {contentItem.tech.map((tech) => (
                          <div
                            key={tech}
                            className="inline-block mr-2 px-3 py-1 bg-greenls opacity-50 rounded-md text-xs md:text-sm text-white"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="w-full h-auto flex">
                        <Image
                          src={contentItem.img}
                          alt={contentItem.title}
                          className="w-full h-auto max-w-lg"
                          width={800}
                          height={450}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
