import { useState, useEffect } from "react";

function Contact(){

    const [showContact, setShowContact] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    };
  
    return(
        <div>

        </div>
    )
}

export default Contact