import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

 function App() {
  return (
    <div>
    {/* // <h1 className="text-3xl font-bold underline font-signature">
    //   Hello world!
    // </h1> */}
    <Navbar />/
    <Home />
    <About/>
    <Project />
    <Experience />
    <Skills />
    <Contact />
    <SocialLinks />
  </div>
  )
}
export default App;