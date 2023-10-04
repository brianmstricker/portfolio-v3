import { ContactLinks } from "./ContactLinks";

const Footer = () => {
 return (
  <div className="bg-main border-t border-t-gray-400 px-8 py-6 text-xs sm:text-sm flex justify-between items-center">
   <ContactLinks icons={true} small={true} />
   <span>Created by Brian Stricker</span>
  </div>
 );
};
export default Footer;
