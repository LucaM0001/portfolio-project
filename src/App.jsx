import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ParticlesComponent from "./components/Particles/Particles";

const App = (props) => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <NavBar />
      <Header />
    </>
  );
};

export default App;
