import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tools from "./components/Tools";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <About />
      <Services />
      <Tools />
      <WhyWorkWithMe />
      <Contact />
    </div>
  );
};

export default App;