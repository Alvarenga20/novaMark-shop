import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import illustration1 from "../../../../public/illustration1.svg";
import illustration2 from "../../../../public/illustration2.svg";
import illustration3 from "../../../../public/illustration3.svg";
import Image from "next/image";
import Transition from "../hooks/Transition";

import { FaBoltLightning } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";

interface Tab {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const tabData: Tab[] = [
  {
    id: 1,
    title: "Collaborative Shopping Made Easy",
    description:
      "Experience a seamless shopping ecosystem where you and your team can explore, decide, and manage purchases together—all in one place.",
    icon: (
      <FaBoltLightning className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    ),
    image: illustration2, // 3 people in a computer tab looking at a message
  },
  {
    id: 2,
    title: "Explore Global Opportunities",
    description:
      "Navigate a world of possibilities with a glance. Discover trending destinations, explore local deals, and connect with opportunities worldwide.",
    icon: <IoPaperPlane className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    image: illustration3, // Person looking at the world with locations marked
  },
  {
    id: 3,
    title: "Shop Smarter, Together",
    description:
      "Transform your shopping experience with our all-in-one tools. Browse, compare, and shop with ease—no matter the size of your haul.",
    icon: <BiSolidMoon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    image: illustration1, // 2 people holding shopping bags
  },
];

export const SolutionsSec: React.FC = () => {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current?.children[tab - 1]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].clientHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="absolute left-0 right-0 -top-12 m-auto w-px p-px h-20 bg-gray-200 dark:bg-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Discover Your Next Favorite Product
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Browse our wide selection of high-quality goods. From gadgets to
              fashion, we have something for everyone!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-6" data-aos="fade-right">
              <h3 className="text-3xl text-center md:text-left font-bold text-black dark:text-white mb-6">
                Your Ultimate Shopping Companion
              </h3>
              <p className="text-lg text-center md:text-left text-gray-600 dark:text-gray-300 mb-8">
                Unlock the power of advanced tools to streamline your shopping
                experience. Whether you&apos;re exploring new trends, managing
                purchases, or shopping together with friends, we&apos;ve got you
                covered!
              </p>
              <div className="space-y-4">
                {tabData.map((item) => (
                  <button
                    key={item.id}
                    className={`flex items-center text-left w-full p-6 rounded-xl transition-all duration-300 ease-in-out ${
                      tab === item.id
                        ? "bg-blue-600 shadow-lg transform -translate-y-1"
                        : "bg-white dark:bg-gray-700 shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => setTab(item.id)}
                  >
                    <div className="flex-1">
                      <div
                        className={`font-bold text-lg leading-snug tracking-tight mb-1 ${
                          tab === item.id
                            ? "text-white"
                            : "text-black dark:text-white"
                        }`}
                      >
                        {item.title}
                      </div>
                      <div
                        className={`text-sm ${
                          tab === item.id
                            ? "text-blue-100"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {item.description}
                      </div>
                    </div>
                    <div
                      className={`flex justify-center items-center w-10 h-10 rounded-full shadow flex-shrink-0 ml-4 ${
                        tab === item.id
                          ? "bg-blue-500"
                          : "bg-blue-50 dark:bg-gray-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div
              className="md:col-span-5 lg:col-span-6"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right h-full justify-center">
                {tabData.map((item) => (
                  <Transition
                    key={item.id}
                    show={tab === item.id}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 translate-y-16"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 -translate-y-16"
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        src={item.image}
                        alt={`${item.title} illustration`}
                        className="mx-auto rounded-lg"
                        width="500"
                        height="500"
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
