import React from "react";
import Image from "next/image";

export const MissionSec = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      data-aos="fade-right"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Our mission is to bring high-quality, affordable products to everyone,
          ensuring that shopping is not only convenient but also enjoyable. We
          believe that every customer deserves access to premium products at
          fair prices, without compromising on quality or service.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Our commitment extends beyond just selling products—we strive to
          create a seamless and stress-free shopping experience, backed by
          exceptional customer support, innovative solutions, and a dedication
          to meeting the unique needs of every shopper. Whether you&apos;re
          looking for the latest trends or everyday essentials, we are here to
          make your journey effortless, rewarding, and satisfying.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:mr-8">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/shoppingOnline.svg"
            alt="Shopping Illustration"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};