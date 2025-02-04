"use client";
import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/app/component/Footer";
import { Navbar } from "@/app/component/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "An error occurred");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      <div className="flex flex-grow items-center justify-center px-6 mt-16 h-full min-h-[80vh]">
        <div className="w-full max-w-xl p-8 bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6">
            Create an Account
          </h2>

          {message && (
            <p className="text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400 px-4 py-2 rounded-lg mb-4 text-center">
              {message}
            </p>
          )}

          {error && (
            <p className="text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-400 px-4 py-2 rounded-lg mb-4 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-md font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-1 dark:text-white dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-md font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-1 dark:text-white dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-all"
                required
              />
            </div>
            {/* mongods disabled for now */}
            <Link href="/">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 mt-4"
              >
                Sign Up
              </button>
            </Link>
          </form>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/pages/login">
              <span className="text-blue-500 hover:underline dark:text-blue-400">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
