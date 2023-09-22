import { motion } from "framer-motion";

const Contact = () => {
 return (
  <section className="bg-main w-full h-screen" name="contact">
   <motion.div
    className="h-full flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-16 px-4 md:px-24"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ ease: "anticipate", duration: 1.5 }}
    viewport={{ once: true }}
   >
    <div>
     <h1 className="text-5xl">Contact</h1>
     <div className="w-48 h-2 mt-1 bg-red-500 rounded-full" />
    </div>
    <div>form</div>
   </motion.div>
  </section>
 );
};
export default Contact;
