"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";

const Project = () => {
  const [activeContent, setActiveContent] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Fully Responsive Public Complaint Website",
      content: [
        {
          id: 1,
          title: "Fully Responsive Public Complaint Website",
          tech: ["HTML", "CSS", "JS", "Tailwind CSS"],
          img: "/Assets/images/project1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Online Course Website",
      content: [
        {
          id: 1,
          title: "Online Course Website",
          tech: ["HTML", "CSS", "JS", "Tailwind CSS", "React JS"],
          img: "/Assets/images/project1.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blog website",
      content: [
        {
          id: 1,
          title: "Blog website",
          tech: ["HTML", "CSS", "JS", "Tailwind CSS"],
          img: "/Assets/images/project1.png",
        },
      ],
    },
    {
      id: 4,
      title: "Portfolio",
      content: [
        {
          id: 1,
          title: "Portfolio",
          tech: ["HTML", "CSS", "JS", "Tailwind CSS"],
          img: "/Assets/images/project1.png",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-auto bg-primary px-10 md:container">
      <div className="py-10">
        <h1 className="font-fairplay text-5xl text-greenls">Project</h1>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* left | buttons */}
            <div className="flex flex-col gap-5 md:py-10 max-h-16 overflow-auto md:max-h-max">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveContent(project.id)}
                  className="cursor-pointer font-poppins text-white hover:text-greenl flex gap-3 items-center"
                >
                  <div className="text-greenls">
                    <BsStars />
                  </div>
                  {project.title}
                </div>
              ))}
            </div>
            {/* right | content */}
            <div className="flex-1 py-5 md:p-5 border-t border-b border-greenl md:border-none">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={activeContent === project.id ? "block" : "hidden"}
                >
                  {project.content.map((contentItem) => (
                    <div key={contentItem.id} className="space-y-5 ">
                      <h2 className="text-2xl md:text-3xl font-bold text-greenl">
                        {contentItem.title}
                      </h2>
                      <div className="flex flex-wrap gap-y-2">
                        {contentItem.tech.map((tech) => (
                          <div
                            key={tech}
                            className="inline-block mr-2 px-3 py-1 bg-greenls opacity-50 rounded-md text-xs md:text-sm font-thin text-white"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="w-full h-auto py-5 flex">
                        <Image
                          src={contentItem.img}
                          alt={contentItem.title}
                          className="w-full h-auto max-w-lg" // Add max-width to control the size
                          width={800} // Adjusted width
                          height={450} // Adjusted height
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
