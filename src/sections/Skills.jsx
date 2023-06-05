import HTML from "../assets/images/HTML.svg";
import REACT from "../assets/images/React.svg";
import JAVASCRIPT from "../assets/images/Javascript.svg";
import CSS from "../assets/images/CSS.svg";

const images = [
  { name: HTML, style: "shadow-orange-500", text: "HTML" },
  { name: CSS, style: "shadow-blue-600", text: "CSS" },
  { name: JAVASCRIPT, style: "shadow-yellow-400", text: "Javascript" },
  { name: REACT, style: "shadow-cyan-400", text: "React" },
  { name: REACT, style: "shadow-cyan-400", text: "React Native" },
];
const Skills = () => {
  return (
    <section className="w-full h-screen bg-main" name="skills">
      <div className="flex flex-col items-center pt-32 sm:pt-0 sm:justify-center h-full mx-auto gap-14">
        <h1 className="text-5xl">My Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              className={`bg-main px-4 pt-3 pb-[3px] flex flex-col gap-2 rounded-2xl shadow-md ${image.style}`}
              key={`key-${image.text}`}
            >
              <img
                className="w-[5.5rem] h-[5.5rem] md:w-40 md:h-40 object-contain"
                src={image.name}
              ></img>
              <p className="text-center text-lg">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
