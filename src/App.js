import React from "react";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#212121] font-rubik  text-[#F8F8F8] scroll-smooth	">
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
