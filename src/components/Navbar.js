import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        zIndex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}
        className="text-3xl font-bold underline">
          <Link to="home" smooth={true} duration={500}>
            Frank Savena
          </Link>
        </h1>
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{ margin: "0 10px" }}
        >
          Home
        </Link>
        <Link
          to="about-me"
          smooth={true}
          duration={500}
          style={{ margin: "0 10px" }}
        >
          About Me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          style={{ margin: "0 10px" }}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
