import { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

function Projects() {
  // const [showProjects, setShowProjects] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 500) {
  //     setShowProjects(true);
  //   } else {
  //     setShowProjects(false);
  //   }
  // };

  return (
    <div id="projects">
      <h1> Projects</h1>
      <Card.Group itemsPerRow={2}>
        <Card>
          <h2> Travel App</h2>
          <img src="#" alt="screenshot" />
          <a href="https://travel-app-oqck.onrender.com"> Site </a>
          <a href="https://travel-app-oqck.onrender.com"> Demo </a>
          <p>
            Full Stack web app designed to help users plan and share memories
            created on their trips.
          </p>
        </Card>
        <Card>
          <h2> Nfty MarketPlace</h2>
          <img src="#" alt="screenshot" />
          <a href="#">Deployed Site</a>
          <a href="https://travel-app-oqck.onrender.com"> Demo </a>
          <p>
            Mock marketplace web app created to allow users to show off their
            NFTs to the world.
          </p>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Projects;
