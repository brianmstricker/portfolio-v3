import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full h-screen bg-main" name="about">
      <motion.div
        className="h-full md:h-[85%] flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-16 px-4 md:px-24"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeIn", duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div>
          <h1 className="text-5xl">About</h1>
          <div className="w-36 h-2 mt-1 bg-red-500 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 mt-4 items-center">
          <p className="text-4xl">
            <span className="bg-slate-950">
              Hi, I&apos;m Brian. Nice to meet you.
            </span>
          </p>
          <p className="inline-block mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            quaerat maiores vitae cumque ratione, in reprehenderit enim? Enim
            aperiam facere quod officia, ipsum non rerum ea voluptatem, mollitia
            necessitatibus odit!
          </p>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
