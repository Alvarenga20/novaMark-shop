"use client"

import { SolutionsSec } from "../component/Home/SolutionsSec";
import { HeaderHome } from "../component/Home/HeaderHome";
import { DevProcessSec } from "../component/Home/DevProcessSec";
import { Navbar } from "../component/Navbar";
import { ClientFeedback } from "../component/Home/ClientFeedback";
import { Newsletter } from "../component/Home/Newsletter";
import { Footer } from "../component/Footer";

export const Home = () => {
  return (
    <div className="dark:bg-gray-800">
      <Navbar />
      <HeaderHome />
      <SolutionsSec />
      <DevProcessSec />
      <ClientFeedback />
      <Newsletter />
      <Footer />
    </div>
  );
};
