import me from "../assets/images/me.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="bg-main w-full h-screen" name="home">
      <motion.div
        className="flex flex-col md:flex-row mx-auto justify-center max-w-[1200px] h-full px-4 md:px-24 items-center gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeIn", duration: 2.5 }}
      >
        <div className="flex flex-col mx-auto justify-center text-center sm:text-start items-center md:items-start mt-[-18px]">
          <p className="text-xl md:text-2xl text-gray-300">Hello, I&apos;m</p>
          <h1 className="text-6xl lg:text-8xl ml-[-5.5px]">
            Brian <span className="hidden sm:inline">Stricker</span>
          </h1>
          <p className="text-3xl text-gray-300">
            I&apos;m a Full Stack Developer.
          </p>
          <Link
            className="mt-8 bg-sky-600 px-6 py-4 rounded-2xl flex items-center gap-3 cursor-pointer"
            to="projects"
            smooth
            duration={1000}
            delay={200}
          >
            View Projects <FaArrowRight />
          </Link>
        </div>
        <div className="w-60 h-60 sm:w-72 sm:h-72">
          <img className="object-cover" src={me} alt="me" />
        </div>
      </motion.div>
    </section>
  );
};
export default Main;
