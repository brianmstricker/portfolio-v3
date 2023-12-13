import { motion } from "framer-motion";

const About = () => {
 return (
  <section className="w-full h-screen bg-main" name="about">
   <div className="h-full flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-4 md:gap-8 px-4 md:px-24">
    <div>
     <h2 className="text-4xl sm:text-5xl">About</h2>
     <div className="w-28 sm:w-36 h-2 mt-1 bg-red-500 rounded-full" />
    </div>
    <div className="flex mt-4 items-center">
     <motion.p
      className="inline-block mt-8 lg:mt-4 w-full sm:w-[75%] mx-auto"
      initial={{ opacity: 0, scale: 0.2, y: 200 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ease: "circIn", duration: 1 }}
      viewport={{ once: true }}
     >
      My name is Brian Stricker, and I&apos;m a fullstack web developer. I
      primarily focus on using the MERN stack, but I&apos;ve dabbled with
      several other frameworks and languages, and I&apos;m never writing
      anything off. My coding journey started a few years ago, but it really
      took off when I started Nucamp (coding bootcamp), in which I completed the
      full stack web and mobile development course, as well as the backend
      course which included python and an intro to devops.
     </motion.p>
    </div>
   </div>
  </section>
 );
};
export default About;
