import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import LovePoster from "./components/LovePoster";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Timeline />
      <LovePoster />
      <Footer />
    </div>
  );
};

export default App;
