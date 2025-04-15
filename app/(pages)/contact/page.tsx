"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResponseMessage(data.error || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
              Contact Me
            </h1>
            {responseMessage && (
              <p className="text-center text-xl text-green-600 mt-4">
                {responseMessage}
              </p>
            )}
            <form
              className="space-y-6 w-full sm:w-96 md:w-[500px]"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="text-lg text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-4 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-lg text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-4 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-lg text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full p-4 rounded-lg border border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-pink-500 h-32 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 rounded-lg mt-6 hover:opacity-80 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {responseMessage && (
                <p className="text-center text-sm text-white mt-4">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
