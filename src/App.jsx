import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import HowWork from "./components/HowWork/HowWork";
import Portfolio from "./components/Portfolio/Portfolio";
import ParticlesComponent from "./components/Particles/Particles";

const App = () => {
  return (
    <BrowserRouter>
      <ParticlesComponent id="particles" />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutme" Component={AboutMe} />
        <Route path="/services" Component={Services} />
        <Route path="/howwork" Component={HowWork} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contacts" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
