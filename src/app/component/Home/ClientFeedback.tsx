import React, { useEffect } from "react";
import { appsLogoSvg } from "./dataArr/appsLogoSvg";
import { GrBlockQuote } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import User1 from "../../assets/img/User1.jpg";
import Circle from "../../assets/icons/Circle";

export const ClientFeedback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="relative">
        <div className="absolute z-20 left-0 right-0 -top-24 m-auto w-px p-px h-20 bg-gray-200 dark:bg-white"></div>
      </div>
      <div className="absolute inset-0 -z-0">
        <Circle
          className="absolute top-[40%] left-[5%] w-64 h-64 opacity-30 hidden sm:block"
          radius={100}
          fillLight="#A2DFF7"
          fillDark="#1E293B"
        />
        <Circle
          className="absolute bottom-0 right-[-130px] w-64 h-64 opacity-60"
          radius={70}
          fillLight="#bee9fb"
          fillDark="#334155"
        />
        <Circle
          className="absolute bottom-[50%] right-[7%] w-64 h-64 opacity-60 hidden sm:block"
          radius={67}
          fillLight="#ddf5ff"
          fillDark="#475569"
        />
        <Circle
          className="absolute top-[20%] left-[50%] w-64 h-64 opacity-80"
          radius={70}
          fillLight="#E1F6FF"
          fillDark="#64748B"
        />
        <Circle
          className="absolute top-[-80px] left-[-80px] w-64 h-64 opacity-80"
          radius={90}
          fillLight="#E1F6FF"
          fillDark="#94A3B8"
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center pb-12 z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          What Our Customers Say
        </h2>
        <p
          className="text-xl text-gray-600 dark:text-gray-300 mt-4"
          data-aos="fade-up"
        >
          Real feedback from our amazing customers who love using our platform!
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center px-6 z-10">
        {appsLogoSvg.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center col-span-1 md:col-auto transition-transform transform hover:scale-110"
            data-aos="zoom-in"
          >
            {item.logo}
          </div>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto mt-16 z-10" data-aos="fade-up">
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 border border-blue-500 rounded-2xl shadow-xl px-8 py-12 transition-transform transform hover:scale-105 hover:shadow-2xl relative">
          <GrBlockQuote className="absolute top-4 right-4 text-blue-500 text-3xl opacity-50" />

          <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
            <Image
              className="object-cover"
              src={User1}
              width={110}
              height={110}
              alt="Client1"
            />
          </div>

          <blockquote className="text-2xl text-gray-800 dark:text-gray-200 font-medium italic mt-6 text-center">
            “This app has completely transformed the way I shop! The products
            are top-notch, and the checkout process is seamless. I’ll definitely
            be back for more!”
          </blockquote>

          <div className="text-center mt-6">
            <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400">
              Mateus Nefi
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Verified Buyer •{" "}
              <a
                href="https://www.instagram.com/mateusnefi/"
                className="text-blue-500 hover:underline"
              >
                @mateusnefi
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
