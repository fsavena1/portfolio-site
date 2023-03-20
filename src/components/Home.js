import { useState, useEffect } from "react";

function Home(){

    const [showHome, setShowHome] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowHome(true);
      } else {
        setShowHome(false);
      }
    };

    
    return(
        <div id="home">

        </div>
    )
}

export default Home