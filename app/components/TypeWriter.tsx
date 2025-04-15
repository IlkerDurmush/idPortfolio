"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="text-center mt-7">
      <h1 className="text-4xl md:text-6xl font-extrabold">
        I'm a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <Typewriter
            words={["Developer", "CS Student", "Entrepreneur"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={150}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
