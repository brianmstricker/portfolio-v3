import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Sidebar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
