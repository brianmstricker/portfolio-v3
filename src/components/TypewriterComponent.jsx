import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
 return (
  <h1 className="text-4xl sm:text-7xl lg:text-8xl bg-gradient-to-br from-sky-300 via-sky-500 to-sky-600 text-transparent bg-clip-text min-h-[45px] sm:min-h-[90px] lg:min-h-[120px]">
   <Typewriter
    words={["Brian Stricker", "Web Developer", "Software Engineer"]}
    loop
    typeSpeed={100}
    deleteSpeed={100}
    cursor
    cursorColor="white"
    cursorStyle="_"
   />
  </h1>
 );
};
export default TypewriterComponent;
