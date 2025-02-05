"use client";

import React, { useEffect } from "react";
import { Navbar } from "../../component/Navbar";
import { Footer } from "../../component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { TeamSec } from "@/app/component/AboutComponents/TeamSec";
import { ContactSec } from "@/app/component/AboutComponents/ContactSec";
import { MissionSec } from "@/app/component/AboutComponents/MissionSec";

export default function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div>
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:pt-20 space-y-10 text-gray-800 dark:text-gray-200">
        <section className="text-center py-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are committed to providing the best products and services to our
            customers while ensuring a seamless shopping experience. Our mission
            is to make your journey effortless, rewarding, and satisfying.
          </p>
        </section>

        <MissionSec />

        <TeamSec />

        <ContactSec />
      </main>

      <Footer />
    </div>
  );
}
