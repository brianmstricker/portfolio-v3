import me from "../assets/images/me-small.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import TypewriterComponent from "../components/TypewriterComponent";

const Main = () => {
 return (
  <section className="bg-main w-full h-screen" name="home">
   <motion.div
    className="flex flex-col mx-auto justify-center max-w-[1200px] h-full px-4 md:px-24 items-center gap-8 mt-0 relative"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
   >
    <div className="flex flex-col items-center gap-8">
     <div className="rounded-full h-52 w-52 flex items-center justify-center overflow-hidden hover:scale-105 duration-300">
      <img
       className="object-cover w-full h-full"
       src={me}
       alt="A photo of myself"
      />
     </div>
     <div className="flex flex-col items-center">
      <TypewriterComponent />
      <p className="text-lg sm:text-3xl text-gray-200">
       Aspiring Full Stack Developer.
      </p>
      <motion.div
       whileHover={{ scale: 1.1 }}
       transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
       }}
      >
       <Link
        className="bg-sky-500 px-6 py-4 rounded-2xl flex items-center gap-3 cursor-pointer w-fit relative -bottom-12"
        to="projects"
        smooth
        duration={1000}
        delay={200}
       >
        View Projects <FaArrowRight />
       </Link>
      </motion.div>
     </div>
    </div>
   </motion.div>
  </section>
 );
};
export default Main;
