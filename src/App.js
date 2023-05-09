import "./index";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Particles from "./components/Particle";
import { useMemo } from "react";

function App() {
  const memoizedParticle = useMemo(() => <Particles />, []);
  return (
    <div className="">
      <div className="particlesContainer">{memoizedParticle}</div>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
