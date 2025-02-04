import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import Link from "next/link";

export const HeaderHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative pt-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 text-black dark:text-white p-6 min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <circle cx="50%" cy="50%" r="70" fill="#A2DFF7" />
        <circle cx="25%" cy="25%" r="40" fill="#E1F6FF" />
        <circle cx="75%" cy="75%" r="50" fill="#A2DFF7" />
      </svg>

      <h1
        className="text-5xl md:text-6xl font-bold text-black dark:text-white z-10 text-center"
        data-aos="fade-up"
      >
        Discover Your Inner{" "}
        <span className="text-blue-600 dark:text-blue-400 fade-out">
          Potential
        </span>
      </h1>

      <h3
        className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300 z-10 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Start your journey with us today.
      </h3>

      <div
        className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 z-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <Link href="/pages/products">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
          <ArrowRightIcon className="w-5 h-5 text-white" />
          <span>Start Shopping</span>
        </button>
        </Link>
        <Link href="/pages/about" className="flex items-center justify-center">
        <button className="bg-transparent border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300  space-x-2">
          <span>Learn More</span>
        </button></Link>
      </div>

      <style jsx>{`
        .fade-out {
          position: relative;
          display: inline-block;
        }

        .fade-out::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            var(--gradient-color)
          );
          pointer-events: none;
        }

        .dark .fade-out::after {
          background: linear-gradient(
            to right,
            rgba(17, 24, 39, 0),
            var(--gradient-color-dark)
          );
        }

        :root {
          --gradient-color: white;
          --gradient-color-dark: #1f2937; /* Adjust to match your dark mode background */
        }
      `}</style>
    </div>
  );
};