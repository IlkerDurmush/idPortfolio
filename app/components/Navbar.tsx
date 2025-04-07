import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-950 bg-opacity-70 backdrop-blur-sm p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            Ilker
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              D.
            </span>
          </Link>
        </div>
        <ul className="flex space-x-4">
          {["about", "projects", "contact"].map((route) => (
            <li key={route}>
              <Link
                href={`/${route}`}
                className="text-gray-200 px-4 py-2 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white"
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
