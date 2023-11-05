import { PuffLoader } from "react-spinners";

const Loader = () => {
 return (
  <div className="fixed w-screen h-screen bg-main flex items-center justify-center z-[500]">
   <PuffLoader color="white" size={100} />
  </div>
 );
};
export default Loader;
