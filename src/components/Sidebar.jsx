import { ContactLinks } from "./ContactLinks";

const Sidebar = () => {
 return (
  <div className="hidden md:block fixed left-0 top-[40%] bg-blue-500 rounded-tr-2xl rounded-br-2xl pr-3 py-1 z-50">
   <ContactLinks />
  </div>
 );
};
export default Sidebar;
