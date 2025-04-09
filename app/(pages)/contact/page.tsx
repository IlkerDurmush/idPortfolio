import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="flex flex-col items-center space-y-8">
          {/* Contact Form */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
              Contact Me
            </h1>
            <form className="space-y-6 w-full sm:w-96 md:w-[500px]">
              <div>
                <label className="text-lg text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="text-lg text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-4 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="text-lg text-gray-300">Message</label>
                <textarea
                  placeholder="Your message"
                  className="w-full p-4 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-pink-500 h-32 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 rounded-lg mt-6 hover:opacity-80 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
