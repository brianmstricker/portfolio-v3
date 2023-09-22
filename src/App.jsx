import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { useScroll, motion, useSpring } from "framer-motion";

function App() {
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
 });
 return (
  <>
   <Navbar />
   <motion.div
    style={{ scaleX }}
    className="fixed top-[10%] left-0 right-0 h-3 bg-sky-600 origin-[0%] z-[100]"
   />
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
