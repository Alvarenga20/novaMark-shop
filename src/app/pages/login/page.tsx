"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/app/component/Navbar";
import { Footer } from "@/app/component/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      <div className="flex flex-grow items-center justify-center px-6 h-full min-h-[80vh] mt-16">
        <div className="w-full max-w-xl p-8 bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-6">
            Login
          </h2>

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
                placeholder="Enter your password"
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
                Login
              </button>
            </Link>
          </form>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/pages/signup">
              <span className="text-blue-500 hover:underline dark:text-blue-400">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
