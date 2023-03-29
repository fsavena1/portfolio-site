import NavBar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import "../app.css"
import Contact from "./Contact";
import Resume from "./Resume"


function App() {
  return (
    <div>
      
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
