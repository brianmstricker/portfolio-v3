import me from "../assets/images/me.png";
import { FaArrowRight } from "react-icons/fa";

const Main = () => {
  return (
    <div className="bg-main w-full h-screen" name="home">
      <div className="flex flex-col md:flex-row mx-auto justify-center max-w-[1200px] h-full px-4 md:px-24 items-center gap-8">
        <div className="flex flex-col mx-auto justify-center text-center md:text-start items-center md:items-start mt-[-18px]">
          <p className="text-xl md:text-2xl text-gray-300">Hello, I&apos;m</p>
          <h1 className="text-6xl lg:text-8xl ml-[-4.5px]">
            Brian <span className="hidden sm:inline">Stricker</span>
          </h1>
          <p className="text-3xl text-gray-300">
            I&apos;m a Full Stack Developer.
          </p>
          <button className="mt-8 bg-light px-6 py-4 rounded-2xl flex items-center gap-3">
            View Projects <FaArrowRight />
          </button>
        </div>
        <div className="w-64 h-64">
          <img className="object-cover" src={me} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Main;
