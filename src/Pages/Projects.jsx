import React from "react";
import { ProjectData } from "../Data/ProjectData";
import ProjectCard from "../Components/ProjectComponents/ProjectCard";

const Projects = () => {
  return (
    <div className="lg:mx-20 md:mx-20 sm:mx-8 lg:mb-8 md:mb-8 home">
      <h1 className="font-semibold text-2xl lg:mb-12 md:mb-12">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-4 sm:gap-4">
        {ProjectData.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
