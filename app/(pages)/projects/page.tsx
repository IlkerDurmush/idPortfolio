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
    {
      image: "/project2.png",
      title: "UnUnemployed",
      description:
        "UnUnemployed is a dynamic web application designed to connect job seekers with employers. It provides an easy-to-use platform for employers to post job opportunities and for job seekers to browse, apply, and manage their applications. The app features a clean, modern interface and powerful filtering tools that help users quickly find relevant job listings based on categories, location, and other criteria. With a focus on user experience, UnUnemployed ensures a seamless process for both employers and candidates, enabling efficient job searches and streamlining the recruitment process. Built with TypeScript and Next.js, UnUnemployed leverages modern web technologies to ensure fast performance and a responsive design, making it accessible across all devices.",
      link: "https://github.com/IlkerDurmush/UnUnemployed",
    },
    {
      image: "/project3.png",
      title: "ID Portfolio",
      description:
        "idPortfolio is a sleek and responsive personal portfolio built with Next.js 15, showcasing the skills, projects, and experience of a web and game developer. This project is designed with a mobile-friendly UI using Tailwind CSS and includes features like a contact form with validation, and SEO optimization. Hosted on Vercel, the app also integrates the Next.js App Router for improved routing and flexibility. Check out the live demo to explore the project further!",
      link: "https://github.com/IlkerDurmush/idPortfolio",
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
