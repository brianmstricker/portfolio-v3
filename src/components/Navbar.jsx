import { useState } from "react";
import { Link } from "react-scroll";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Contact"];
const variants = {
 open: {
  opacity: 1,
  x: 0,
  transition: { duration: 0.6, ease: "easeInOut" },
 },
 closed: {
  opacity: 0,
  x: "-100%",
  transition: { duration: 0.6, ease: "easeInOut" },
 },
};
const Navbar = () => {
 const [nav, setNav] = useState(false);
 return (
  <nav className="fixed w-full h-24 flex items-center justify-between px-4 sm:px-8 md:px-24 z-10 top-0 bg-main/95">
   <h1 className="text-5xl font-fancy z-20 cursor-pointer">
    <Link to={"home"} smooth duration={1000} onClick={() => setNav(false)}>
     Brian <span className="hidden md:inline">S</span>
    </Link>
   </h1>
   <ul className="hidden sm:flex text-xl gap-4 font-bold">
    {links.map((link) => (
     <li
      className="cursor-pointer hover:text-neutral-400 flex flex-col items-center relative group"
      key={`link-${link}`}
     >
      <Link to={link.toLowerCase()} smooth duration={1000}>
       {link}
      </Link>
      <div className="absolute h-1 -bottom-[2px] bg-red-500 w-0 group-hover:w-full transition-all duration-500 rounded-xl" />
     </li>
    ))}
   </ul>
   <motion.div
    className="sm:hidden z-20"
    onClick={() => setNav(!nav)}
    whileTap={{ scale: 1.1 }}
   >
    {nav ? <CgCloseO size={48} /> : <CgMenuRound size={48} />}
   </motion.div>
   <motion.ul
    className={
     "absolute sm:hidden top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-4xl gap-10 bg-main/95"
    }
    animate={nav ? "open" : "closed"}
    variants={variants}
    initial="closed"
   >
    {links.map((link) => (
     <li
      className="cursor-pointer hover:text-neutral-400 font-bold"
      key={`link-${link}`}
     >
      <Link
       to={link.toLowerCase()}
       smooth
       duration={1000}
       onClick={() => setNav(!nav)}
      >
       {link}
      </Link>
     </li>
    ))}
   </motion.ul>
  </nav>
 );
};
export default Navbar;
