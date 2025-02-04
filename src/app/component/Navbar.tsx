import React, { useState } from "react";
import Link from "next/link";
import { LogIn, UserPlus, Moon, Sun, Menu, Rocket } from "lucide-react"; // Use icons for a cleaner look

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinksArr = [
    { to: "/", label: "Home" },
    { to: "/pages/products", label: "Products" },
    { to: "/pages/about", label: "About" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 text-grayshade-500 dark:text-white shadow-lg fixed w-full top-0 left-0 z-50 max-w-screen">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4 ">
        {/* Logo */}
        <div className="flex text-md md:text-xl items-center gap-2">
          <Rocket className="text-blue-400 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          <Link href="/" className="font-bold text-grayshade-500 dark:text-white">
            NovaMart<span className="text-blue-400">.</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinksArr.map((el, key) => (
            <li key={key}>
              <Link
                href={el.to}
                className="text-xl font-medium hover:text-blue-400 transition"
              >
                {el.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/pages/login"
            className="text-sm md:text-lg hover:text-blue-400 transition flex items-center gap-2"
          >
            <LogIn size={20} />
            Login
          </Link>

          <Link
            href="/pages/signup"
            className="text-sm md:text-lg px-1 md:px-4 py-2 rounded-md hover:bg-blue-400 dark:hover:bg-blue-600 transition flex items-center gap-2"
          >
            <UserPlus size={20} />
            Sign Up
          </Link>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition hidden md:block"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden p-2 text-blue-400"
            aria-label="Open Mobile Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden dark:bg-gray-800 dark:text-white px-6 py-4 w-full">
          <ul className="space-y-4">
            {navLinksArr.map((el, key) => (
              <li key={key}>
                <Link href={el.to} className="block hover:text-blue-400">
                  {el.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="hover:text-blue-400" onClick={toggleDarkMode}>
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
