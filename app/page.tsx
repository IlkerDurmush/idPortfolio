import TypeWriter from "./components/TypeWriter";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start p-8">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center items-center w-full md:min-w-[600px]">
            <img
              src="/profile.png"
              alt="Profile"
              className="rounded-full w-fit h-fit"
            />
          </div>

          {/* Right Column - TypeWriter and Text */}
          <div className=" md:text-left space-y-4 pt-14  mt-8 md:mt-0 md:ml-24 w-full md:min-w-[600px]">
            <h1 className="text-4xl text-center font-bold mb-4 text-white">
              Hello, I am{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Ilker
              </span>{" "}
              and
            </h1>
            <TypeWriter />
            <p className="text-center text-lg text-gray-400 mt-4">
              This is my portfolio in which you can learn more about me.
            </p>
            <a
              download
              href="/cv.png"
              className="w-fit mx-auto block bg-cyan-950 p-4 rounded-xl border-2 border-cyan-700 font-bold"
            >
              Download my CV
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
