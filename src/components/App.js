import NavBar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import "../app.css"
import Contact from "./Contact";

function App() {
  return (
    <div>
      
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
