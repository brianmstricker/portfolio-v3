import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImMail } from "react-icons/im";

const links = [
 {
  name: "Github",
  icon: <BsGithub />,
  link: "https://github.com/brianmstricker",
 },
 {
  name: "LinkedIn",
  icon: <BsLinkedin />,
  link: "https://www.linkedin.com/in/brian-stricker-a1559b250/",
 },
 {
  name: "Email",
  icon: <ImMail />,
  link: "mailto:brianmstricker@gmail.com",
 },
];

export const ContactLinks = ({ icons, small, index }) => {
 return (
  <div>
   {!icons ? (
    <div>
     {links.map((link) => (
      <a
       className="flex items-center justify-between text-2xl py-2 w-[150px] ml-[-110px] hover:ml-0 pl-2 duration-500"
       href={link.link}
       key={`link-${link.name}`}
       target="_blank"
       rel="noreferrer"
      >
       {link.name} <span className="text-[2rem]">{link.icon}</span>
      </a>
     ))}
    </div>
   ) : (
    <div
     className={
      "flex gap-5 items-center" + (index ? " sm:gap-6" : " sm:gap-12")
     }
    >
     {links.map((link) => (
      <a
       className={
        "hover:scale-110 duration-200 relative flex items-center justify-center group" +
        (small ? " text-xl" : " text-3xl")
       }
       href={link.link}
       key={`link-${link.name}`}
       target="_blank"
       rel="noreferrer"
      >
       <span
        className={
         "text-xs absolute opacity-0 group-hover:opacity-100 duration-300" +
         (index ? " -bottom-4" : " -top-4")
        }
       >
        {link.name}
       </span>
       <span>{link.icon}</span>
      </a>
     ))}
    </div>
   )}
  </div>
 );
};
