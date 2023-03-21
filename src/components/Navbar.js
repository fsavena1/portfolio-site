import { Link } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <h1 className="text-3xl font-bold underline text-white">
          <Link to="home" smooth={true} duration={500}>
            Frank Savena
          </Link>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-white">
          <Nav.Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              style={{ margin: "0 10px" }}
            >
              About Me
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="Resume"
              smooth={true}
              duration={500}
              style={{ margin: "0 10px" }}
            >
              Resume
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              style={{ margin: "0 10px" }}
            >
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              style={{ margin: "0 10px" }}
            >
              Contact
            </Link>
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
