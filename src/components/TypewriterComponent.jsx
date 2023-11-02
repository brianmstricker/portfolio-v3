import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
 return (
  <h1 className="text-3xl [@media(max-width:450px)]:text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-br from-sky-300 via-sky-500 to-sky-600 text-transparent bg-clip-text min-h-[45px] sm:min-h-[90px]">
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
