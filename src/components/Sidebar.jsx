import { BsGithub, BsLinkedin } from "react-icons/bs";

const links = [
  {
    name: "Github",
    icon: <BsGithub size={40} />,
    link: "https://github.com/brianmstricker",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin size={40} />,
    link: "https://www.linkedin.com/in/brian-stricker-a1559b250/",
  },
];
const Sidebar = () => {
  return (
    <div className="hidden md:block fixed left-0 top-[40%] bg-light rounded-tr-2xl rounded-br-2xl pr-3 py-1">
      {links.map((link) => (
        <a
          className="flex items-center justify-between text-2xl py-2 w-[200px] ml-[-145px] hover:ml-0 pl-2 duration-500"
          href={link.link}
          key={`link-${link.name}`}
          target="_blank"
          rel="noreferrer"
        >
          {link.name} {link.icon}
        </a>
      ))}
    </div>
  );
};
export default Sidebar;
