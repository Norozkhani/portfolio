import "./index";
import HomePage from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
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
