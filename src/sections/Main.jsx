import me from "../assets/images/me-small.jpg";
import HTML from "../assets/images/HTML.svg";
import REACT from "../assets/images/React.svg";
import JAVASCRIPT from "../assets/images/Javascript.svg";
import CSS from "../assets/images/CSS.svg";
import TAILWIND from "../assets/images/tailwind.png";
import TYPESCRIPT from "../assets/images/typescript.png";
import VUE from "../assets/images/vue.png";
import NUXT from "../assets/images/nuxt.png";
import { ContactLinks } from "../components/ContactLinks";
import { Link } from "react-router-dom";

const images = [
 { name: HTML, style: "shadow-orange-500", text: "HTML" },
 { name: CSS, style: "shadow-blue-600", text: "CSS" },
 { name: JAVASCRIPT, style: "shadow-yellow-400", text: "Javascript" },
 { name: REACT, style: "shadow-cyan-400", text: "React" },
 { name: REACT, style: "shadow-cyan-400", text: "React Native" },
 { name: TAILWIND, style: "shadow-blue-400", text: "Tailwind" },
 { name: TYPESCRIPT, style: "shadow-blue-400", text: "Typescript" },
 { name: VUE, style: "shadow-green-400", text: "Vue" },
 { name: NUXT, style: "shadow-lime-700", text: "Nuxt" },
];

const Main = () => {
 return (
  <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-y-hidden">
   <div className="flex flex-col items-center justify-center relative">
    <img
     className="object-cover rounded-full w-28 h-28 sm:w-[168px] sm:h-[168px]"
     src={me}
     alt="A photo of myself"
    />
    <h1 className="text-2xl sm:text-4xl mt-2">Brian Stricker</h1>
    <p className="opacity-80 text-sm sm:text-base">Full stack developer</p>
    <div className="mt-2 md:mt-4 flex flex-col items-center">
     <h2 className="text-center font-bold mb-2 sm:mb-4">contact</h2>
     <ContactLinks icons={true} index={true} />
    </div>
    <h2 className="text-center font-bold mt-4 sm:mt-6 mb-2 sm:mb-4">skills</h2>
    <div className="grid grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-4 items-center justify-start">
     {images.map((image) => (
      <div key={`key-${image.text}`} className="group">
       <div
        className={`bg-main px-4 pt-1 pb-[1px] flex flex-col gap-2 rounded-2xl shadow-md w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] ${image.style}`}
       >
        <img
         className="object-contain mx-auto w-full h-full"
         src={image.name}
         alt={image.text}
        />
       </div>
       <p className="text-center text-xs lg:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 lg:opacity-100">
        {image.text}
       </p>
      </div>
     ))}
    </div>
   </div>
   <Link
    to="/home"
    className="mt-2 sm:mt-4 lg:mt-8 absolute bottom-2 sm:static"
   >
    view full site
    <span className="relative bottom-[2px] -right-2">&rarr;</span>
   </Link>
  </div>
 );
};
export default Main;
