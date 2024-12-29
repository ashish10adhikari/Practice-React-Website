import React from "react";
import Header from "./components/Header";
import About from "./components/about";
import Projects from "./components/Projects";
import Testimonials from "./components/testimonials";
import Contact from "./components/Contact";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden w-full">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
