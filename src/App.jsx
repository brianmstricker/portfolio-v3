import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Main from "./sections/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./sections/Homepage";

const router = createBrowserRouter([
 {
  path: "/",
  element: <Main />,
 },
 {
  path: "home",
  element: <Homepage />,
 },
]);

function App() {
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  setLoading(false);
 }, []);
 return (
  <>
   {loading && <Loader />}
   <RouterProvider router={router} />
  </>
 );
}

export default App;
