import HTML from "../assets/images/HTML.svg";
import REACT from "../assets/images/React.svg";
import JAVASCRIPT from "../assets/images/Javascript.svg";
import CSS from "../assets/images/CSS.svg";
import TAILWIND from "../assets/images/tailwind.png";
import TYPESCRIPT from "../assets/images/typescript.png";
import { motion } from "framer-motion";

const images = [
 { name: HTML, style: "shadow-orange-500", text: "HTML" },
 { name: CSS, style: "shadow-blue-600", text: "CSS" },
 { name: JAVASCRIPT, style: "shadow-yellow-400", text: "Javascript" },
 { name: REACT, style: "shadow-cyan-400", text: "React" },
 { name: REACT, style: "shadow-cyan-400", text: "React Native" },
 { name: TAILWIND, style: "shadow-blue-400", text: "TailwindCSS" },
 { name: TYPESCRIPT, style: "shadow-blue-400", text: "Typescript" },
];
const Skills = () => {
 return (
  <section className="w-full h-screen bg-main" name="skills">
   <div className="flex flex-col items-center pt-32 sm:pt-0 sm:justify-center h-full mx-auto gap-6">
    <div>
     <h2 className="text-4xl sm:text-5xl">Skills</h2>
     <div className="w-24 sm:w-32 h-2 mt-1 bg-red-500 rounded-full" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
     {images.map((image) => (
      <motion.div
       className={`bg-main px-4 pt-3 pb-[3px] flex flex-col gap-2 rounded-2xl shadow-md ${image.style}`}
       key={`key-${image.text}`}
       drag
       dragElastic={0.7}
       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ ease: "easeIn", duration: 1.5 }}
       viewport={{ once: true }}
      >
       <img
        className="w-[5.5rem] h-[3rem] sm:w-16 sm:h-16 lg:w-32 lg:h-32 object-contain mx-auto"
        src={image.name}
        alt={image.text}
        loading="lazy"
        draggable="false"
       ></img>
       <p className="text-center text-sm sm:text-lg">{image.text}</p>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};
export default Skills;
