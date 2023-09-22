import { motion } from "framer-motion";

const About = () => {
 return (
  <section className="w-full h-screen bg-main" name="about">
   <motion.div
    className="h-full flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-16 px-4 md:px-24"
    initial={{ opacity: 0, scale: 0.3 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ ease: "circIn", duration: 1.5 }}
    viewport={{ once: true }}
   >
    <div>
     <h1 className="text-5xl">About</h1>
     <div className="w-36 h-2 mt-1 bg-red-500 rounded-full" />
    </div>
    <div className="grid md:grid-cols-2 mt-4 items-center">
     <p className="text-4xl">Hi, I&apos;m Brian. Nice to meet you.</p>
     <p className="inline-block mt-4">
      My name is Brian Stricker, and I&apos;m an aspiring fullstack web
      developer. I primarily focus on using the MERN stack, but I&apos;ve
      dabbled with several other frameworks and languages, and I&apos;m never
      writing anything off. I&apos;m currently working on a few projects,
      including updating my fullstack blog, making an Airbnb clone, and a few
      other things.
     </p>
    </div>
   </motion.div>
  </section>
 );
};
export default About;
