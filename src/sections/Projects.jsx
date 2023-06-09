import icongen from "../assets/images/icon-generator.png";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import { motion } from "framer-motion";

const images = [
  {
    name: "Icon Generator",
    image: icongen,
    text: "React, T3 Stack(Typescript, Prisma, TRPC)",
    site: "https://icons.brianstricker.com/",
    code: "https://github.com/brianmstricker/icon-generator",
  },
  {
    name: "Icon Generator1",
    image: icongen,
    text: "React, T3 Stack(Typescript, Prisma, TRPC)",
  },
  {
    name: "Icon Generator2",
    image: icongen,
    text: "React, T3 Stack(Typescript, Prisma, TRPC)",
  },
  {
    name: "Icon Generator3",
    image: icongen,
    text: "React, T3 Stack(Typescript, Prisma, TRPC)",
  },
];
const Projects = () => {
  return (
    <section className="w-full bg-main" name="projects">
      <motion.div
        className="flex flex-col items-center justify-center gap-6 px-4 md:px-20 h-full w-full mx-auto max-w-[1200px] pt-32 py-10 sm:py-36"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeIn", duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div>
          <h1 className="text-6xl">Projects</h1>
          <div className="w-60 h-2 mt-1 bg-red-500 rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 justify-center items-center">
          {images.map((image) => (
            <div
              className="flex flex-col items-center"
              key={`project-${image.name}`}
            >
              <h2 className="text-xl pb-4">{image.name}</h2>
              <div className="relative">
                <img
                  className="w-full h-full lg:w-[44rem] lg:h-[16rem] object-contain"
                  src={image.image}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-black/90 transition-all duration-500">
                  <div className="flex flex-col justify-between text-lg sm:text-lg lg:text-2xl text-center h-full items-center p-3">
                    <h3>This was built using:</h3>
                    <p className="text-red-300">{image.text}</p>
                    <div className="flex gap-4 text-base">
                      <div>
                        <a
                          className="flex gap-1 cursor-pointer items-center"
                          href={image.site}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p>View site</p>
                          <RiExternalLinkFill size={28} />
                        </a>
                      </div>
                      <div>
                        <a
                          className="flex gap-1 cursor-pointer items-center"
                          href={image.code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View code
                          <RiGithubFill size={28} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Projects;
