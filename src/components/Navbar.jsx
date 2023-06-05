import { useState } from "react";
import { Link } from "react-scroll";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

const links = ["Home", "About", "Skills", "Projects", "Contact"];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="bg-main/95 fixed w-full h-24 flex items-center justify-between px-4 sm:px-8 md:px-24 z-10">
      <h1 className="text-5xl font-fancy z-20 cursor-pointer">
        <Link to={"home"} smooth duration={1000} onClick={() => setNav(false)}>
          Brian S
        </Link>
      </h1>
      <ul className="hidden sm:flex text-xl gap-4 font-bold">
        {links.map((link) => (
          <li
            className="cursor-pointer hover:text-neutral-400"
            key={`link-${link}`}
          >
            <Link to={link.toLowerCase()} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden z-20" onClick={() => setNav(!nav)}>
        {nav ? <CgCloseO size={48} /> : <CgMenuRound size={48} />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute sm:hidden top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-4xl gap-10 bg-main/95"
        }
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
      </ul>
    </nav>
  );
};
export default Navbar;
