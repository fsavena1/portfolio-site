import { useState, useEffect } from "react";

function Projects(){

    const [showProjects, setShowProjects] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
    };

    
    return(
        <div id="projects">

        </div>
    )
}

export default Projects