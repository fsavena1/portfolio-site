import { useState, useEffect } from "react";

function About() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowAboutMe(true);
    } else {
      setShowAboutMe(false);
    }
  };

  return (
  <div id="about-me">

  </div>
  )
}

export default About;
