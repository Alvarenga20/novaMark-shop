import React from "react";
import Image from "next/image";

export const ContactSec = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      data-aos="fade-left"
    >

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Have questions or need assistance? We&apos;re here to help! Reach out to us
          anytime, and our team will get back to you promptly.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={(e) => e.preventDefault()} // no functionality for the link yet
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="md:mr-8">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/contactus.svg"
            alt="Contact Us Illustration"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};