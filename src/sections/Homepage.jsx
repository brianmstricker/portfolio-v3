import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import { useScroll, motion, useSpring } from "framer-motion";
import Home from "./Home";

const Homepage = () => {
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
    className="fixed top-[80px] left-0 right-0 h-3 bg-blue-500 origin-[0%] z-[100]"
   />
   <Home />
   <Sidebar />
   <About />
   <Skills />
   <Projects />
   <Contact />
   <Footer />
  </>
 );
};
export default Homepage;
