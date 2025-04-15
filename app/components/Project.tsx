import React from "react";
import Image from "next/image";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-gray-800 p-6 rounded-lg shadow-lg">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-6">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 px-6 rounded-lg hover:opacity-80 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
