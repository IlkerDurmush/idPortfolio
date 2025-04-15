import React from "react";
import Project from "@/app/components/Project";

const ProjectsPage = () => {
  const projects = [
    {
      image: "/project1.png",
      title: "Fashion Orbit",
      description:
        "FashionOrbit is a modern eCommerce web application built with Next.js and MongoDB, developed as my high school diploma project. The platform allows users to browse, search, and purchase fashion products through a clean and responsive interface. FashionOrbit includes features like dynamic product listings, secure user authentication, and a streamlined shopping cart experience. This project showcases my skills in full-stack web development, particularly in building robust applications using the MERN stack (MongoDB, Express, React/Next.js, Node.js).",
      link: "https://github.com/IlkerDurmush/FashionOrbit.git",
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
