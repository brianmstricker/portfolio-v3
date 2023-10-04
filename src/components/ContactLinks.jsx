import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

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
  icon: <IoMailOutline />,
  link: "mailto:brianmstricker@gmail.com",
 },
];

export const ContactLinks = ({ contactPage }) => {
 return (
  <div>
   {!contactPage ? (
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
    <div className="flex gap-5 sm:gap-12 items-center">
     {links.map((link) => (
      <a
       className="text-3xl last:text-4xl hover:scale-110 duration-200"
       href={link.link}
       key={`link-${link.name}`}
       target="_blank"
       rel="noreferrer"
      >
       {link.icon}
      </a>
     ))}
    </div>
   )}
  </div>
 );
};
