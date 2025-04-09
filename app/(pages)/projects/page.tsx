import React from "react";
import Project from "@/app/components/Project";

const ProjectsPage = () => {
  const projects = [
    {
      image: "/question.jpg",
      title: "Project One",
      description:
        "A description of Project One. It’s a web app that solves XYZ.",
      link: "https://projectone.com",
    },
    {
      image: "/question.jpg",
      title: "Project Two",
      description:
        "A description of Project Two. It’s a mobile app that does ABC.",
      link: "https://projecttwo.com",
    },
    {
      image: "/question.jpg",
      title: "Project Three",
      description:
        "A description of Project Three. A tool that helps with DEF.",
      link: "https://projectthree.com",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-12 text-center">
          My Projects
        </h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
