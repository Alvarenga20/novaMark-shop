import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Circle from "../../assets/icons/Circle";

export const Newsletter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="relative p-4 text-center mb-12 z-10" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Stay updated with the latest news, product updates, and exclusive offers delivered straight to your inbox.
          </p>
        </div>

        <div 
          className="relative max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-auto flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <Circle 
            className="absolute top-[50%] left-[-20%] w-64 h-64 opacity-30"
            radius={90} 
            fillLight="#A2DFF7" 
            fillDark="#1E293B" 
          />
          <Circle 
            className="absolute bottom-0 right-[-25%] w-64 h-64 opacity-60 hidden sm:block"
            radius={90} 
            fillLight="#bee9fb" 
            fillDark="#334155" 
          />
          <Circle 
            className="absolute bottom-20 right-[-21%] w-64 h-64 opacity-60"
            radius={67} 
            fillLight="#ddf5ff" 
            fillDark="#475569" 
          />
          <Circle 
            className="absolute bottom-[50%] right-[50%] w-64 h-64 opacity-80 hidden sm:block"
            radius={50} 
            fillLight="#E1F6FF" 
            fillDark="#64748B" 
          />
          <Circle 
            className="absolute top-[-30%] left-[20%] w-64 h-64 opacity-60 md:hidden"
            radius={67} 
            fillLight="#ddf5ff" 
            fillDark="#475569" 
          />
        </div>
      </div>
    </section>
  );
};
