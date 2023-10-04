import icongen from "../assets/images/icon-generator.png";
import blogimg from "../assets/images/myblog.png";
import airbnbclone from "../assets/images/airbnb-clone.png";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";

const images = [
 {
  name: "Fullstack Blog",
  image: blogimg,
  text: "MERN stack(MongoDB, Express, React, Node)",
  site: "https://blog.brianstricker.com/",
  code: "https://github.com/brianmstricker/blog-app",
 },
 {
  name: "Airbnb Clone",
  image: airbnbclone,
  text: "React, Next.js, Tailwind, Prisma, Typescript",
 },
 {
  name: "Icon Generator",
  image: icongen,
  text: "React, T3 Stack(Typescript, Prisma, TRPC)",
  site: "https://icons.brianstricker.com/",
  code: "https://github.com/brianmstricker/icon-generator",
 },
];
const Projects = () => {
 return (
  <section className="w-full bg-main" name="projects">
   <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-20 h-full w-full mx-auto max-w-[1200px] pt-28 sm:pt-32 py-10 sm:py-36">
    <div>
     <h2 className="text-4xl sm:text-5xl">Projects</h2>
     <div className="w-36 sm:w-48 h-2 mt-1 bg-red-500 rounded-full" />
    </div>
    <div className="grid sm:grid-cols-2 gap-4 justify-center items-center">
     {images.map((image) => (
      <div className="flex flex-col items-center" key={`project-${image.name}`}>
       <h2 className="text-xl pb-4">{image.name}</h2>
       <div className="relative">
        <img
         className="w-full h-full lg:w-[40rem] lg:h-[14rem] xlgg:w-[44rem] xlg:h-[16rem] object-contain"
         src={image.image}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 hover:bg-black/90 transition-all duration-500">
         <div className="flex flex-col justify-between text-lg sm:text-lg lg:text-2xl text-center h-full items-center p-3">
          <h3>This was built using:</h3>
          <p className="text-red-300">{image.text}</p>
          {image.site && image.code ? (
           <div className="flex gap-4 text-base">
            <div>
             <a
              className="flex gap-1 cursor-pointer items-center hover:underline"
              href={image.site}
              target="_blank"
              rel="noreferrer"
             >
              <p>View site</p>
              <RiExternalLinkFill size={28} />
             </a>
            </div>
            <div>
             <a
              className="flex gap-1 cursor-pointer items-center hover:underline"
              href={image.code}
              target="_blank"
              rel="noreferrer"
             >
              View code
              <RiGithubFill size={28} />
             </a>
            </div>
           </div>
          ) : (
           <div className="text-sm">Work In Progress</div>
          )}
         </div>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};
export default Projects;
