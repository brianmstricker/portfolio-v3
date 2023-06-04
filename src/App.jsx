import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Main from "./sections/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Sidebar />
      <About />
    </>
  );
}

export default App;
