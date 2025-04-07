import TypeWriter from "./components/TypeWriter";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to My Portfolio
          </h1>
          <TypeWriter />
          <p className="text-lg text-gray-400 mt-4">
            This is the home page. Let's build something awesome!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
