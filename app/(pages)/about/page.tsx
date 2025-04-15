import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Bio */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">Ilker Durmush</span>, a
              passionate web developer with a love for creating interactive and
              visually stunning websites. I specialize in both front-end and
              back-end development, with a strong focus on
              <span className="text-white font-semibold"> JavaScript </span> and
              <span className="text-white font-semibold"> TypeScript</span>.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I graduated from{" "}
              <span className="text-white font-semibold">PGEE Plovdiv</span> as
              a Computer Developer, where I built a solid foundation in software
              engineering. Currently, I&apos;m continuing my journey by studying{" "}
              <span className="text-white font-semibold">Computer Science</span>{" "}
              at{" "}
              <span className="text-white font-semibold">
                Sofia Technical University
              </span>
              .
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I have a deep interest in UI/UX design and enjoy building
              responsive, user-friendly applications that provide great
              experiences. Currently, I am focused on mastering modern web
              frameworks like{" "}
              <span className="text-white font-semibold">Next.js</span> and
              <span className="text-white font-semibold"> React</span> while
              exploring new technologies in web development.
            </p>
            <p className="text-lg text-gray-300">
              When I&apos;m not coding, I love learning new things, reading tech
              blogs, and working on personal projects. Feel free to check out my
              work on the Projects page and get in touch if you&apos;d like to
              collaborate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
