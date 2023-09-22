import me from "../assets/images/me.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Main = () => {
 return (
  <section className="bg-main w-full h-screen" name="home">
   <motion.div
    className="flex flex-col md:flex-row mx-auto justify-center max-w-[1200px] h-full px-4 md:px-24 items-center gap-8 mt-0 relative"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
   >
    <div className="flex flex-col mx-auto mt-[-18px] items-center text-center md:items-start md:text-start">
     <p className="text-xl md:text-2xl text-gray-300">Hello, I&apos;m</p>
     <h1 className="text-6xl sm:text-7xl lg:text-8xl relative left-[-6px] bg-gradient-to-br from-blue-300 via-blue-600 to-blue-600 text-transparent bg-clip-text">
      Brian{" "}
      <span className="inline">
       <br />
       Stricker
      </span>
     </h1>
     <p className="text-3xl text-gray-300">Aspiring Full Stack Developer.</p>
     <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
     >
      <Link
       className="bg-sky-600 px-6 py-4 rounded-2xl flex items-center gap-3 cursor-pointer w-fit relative -bottom-12"
       to="projects"
       smooth
       duration={1000}
       delay={200}
      >
       View Projects <FaArrowRight />
      </Link>
     </motion.div>
    </div>
    <img
     className="object-contain hidden md:block md:w-[400px] md:h-[400px] mt-10 md:mt-0"
     src={me}
     alt="me"
    />
   </motion.div>
  </section>
 );
};
export default Main;
