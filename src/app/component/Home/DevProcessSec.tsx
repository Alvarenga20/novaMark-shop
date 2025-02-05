import React from "react";
import { featureData } from "./dataArr/featureData";

export const DevProcessSec = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-10 z-10"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          How Simple Works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          From the first contact to the final product launch, we guide you every
          step of the way. Our streamlined process ensures a smooth experience
          from start to finish.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featureData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-gray-600 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {item.title}
            </h4>
            <p className="text-md text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
