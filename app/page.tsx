import TypeWriter from "./components/TypeWriter";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex items-center p-8">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center items-center">
            <img
              src="/profile.png" // Replace with your actual image path
              alt="Profile"
              className="rounded-full w-fit h-fit" // Large profile image (w-2xl)
            />
          </div>

          {/* Right Column - TypeWriter and Text */}
          <div className="text-center space-y-4 ml-24 min-w-[600px]">
            {" "}
            {/* Set a fixed width here */}
            <h1 className="text-4xl font-bold mb-4 text-white">
              Hello, I am{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Ilker
              </span>{" "}
              and
            </h1>
            <TypeWriter />
            <p className="text-lg text-gray-400 mt-4">
              This is my portfolio in which you can learn more about me.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
