import React from "react";
import Image from "next/image";

export const TeamSec = () => {
  const teamArr = [
    {
      role: "Founder & CEO",
      name: "Marcel Alvarenga",
      instaLink: "https://www.instagram.com/marcel_alvarenga/",
      instaLabel: "@marcel_alvarenga",
      image: "/teamImages/Marcel.png",
    },
    {
      role: "Marketing Lead",
      name: "Fabiana Conceição",
      instaLink: "https://www.instagram.com/fabiayres.alva/",
      instaLabel: "@fabi_conceicao",
      image: "/teamImages/Fabiana.png",
    },
    {
      role: "Support Manager",
      name: "Laura Ayres",
      instaLink: "https://www.instagram.com/laura__alvarenga/",
      instaLabel: "@lauraayres",
      image: "/teamImages/Laura.png",
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-xl p-10"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamArr.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <p className="font-bold text-2xl text-gray-800 dark:text-gray-200 mb-2">
              {member.name}
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
              {member.role}
            </p>
            <a
              href={member.instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              {/* insta Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {member.instaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
