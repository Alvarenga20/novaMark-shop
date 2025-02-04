import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  const itemsArr = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog"],
    },
    {
      title: "Support",
      links: ["Contact Us", "Help Center", "FAQs", "Terms of Service"],
    },
    {
      title: "Discover",
      links: ["Features", "Pricing", "Integrations", "Partners"],
    },
    {
      title: "Follow Us",
      links: ["Twitter", "Facebook", "LinkedIn", "Instagram"],
    },
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 px-6">
      <div className="max-w-6xl mx-auto pt-10 border-t border-gray-300 dark:border-gray-700 w-3/4"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto text-center border-b border-gray-300 dark:border-gray-700 w-3/4 pb-10 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {itemsArr.map((block, index) => (
            <div key={index}>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-lg mb-4">
                {block.title}
              </h4>
              <ul className="space-y-3">
                {block.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
                      onClick={(e) => e.preventDefault()} // Disabled links
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto pt-6 text-center w-3/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Made by Moroni. All rights reserved.  
        </p>
        <Link
          href="https://github.com/Alvarenga20"
          target="_blank"
          className="mt-4 md:mt-0 flex items-center space-x-2 text-white bg-gray-500 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
          <span className="text-sm font-semibold">View on GitHub</span>
        </Link>
      </div>
    </footer>
  );
};
