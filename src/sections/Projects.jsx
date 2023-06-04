import icongen from "../assets/images/icon-generator.png";

const images = [
  { name: "Icon Generator", image: icongen },
  { name: "Icon Generator1", image: icongen },
  { name: "Icon Generator2", image: icongen },
  { name: "Icon Generator3", image: icongen },
];
const Projects = () => {
  return (
    <section className="w-full bg-main" name="projects">
      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-20 h-full w-full mx-auto max-w-[1200px] pt-32 py-10 sm:py-36">
        <div>
          <h1 className="text-6xl">Projects</h1>
          <div className="w-60 h-2 mt-1 bg-red-500 rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 justify-center items-center">
          {images.map((image) => (
            <div
              className="flex flex-col items-center"
              key={`project-${image.name}`}
            >
              <h2 className="text-xl pb-4">{image.name}</h2>
              <div>
                <img
                  className="w-full h-full lg:w-[44rem] lg:h-[16rem] object-contain"
                  src={image.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
