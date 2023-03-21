import React, { useState, useEffect } from "react";

function About() {
  // const [showAboutMe, setShowAboutMe] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 500) {
  //     setShowAboutMe(true);
  //   } else {
  //     setShowAboutMe(false);
  //   }
  // };

  return (
    <div
      id="about"
      // className={`flex flex-col justify-center items-left min-h-screen p-8 bg-gray-900 transition-opacity duration-500 ${
      //   showAboutMe ? "opacity-100" : "opacity-0"
      // } ml-12`}
    >
      <section>
      <h4 className="text-black text-4xl font-bold mb-4">About Me</h4>
      <p className="text-gray-400 text-lg mb-4">
        Highly motivated Software engineer, proficient with front and back-end
        languages such as Ruby, Rails, JavaScript and React. Over 5+ years of
        success in B2B and B2C sales including customer experience, marketing,
        and research while developing strong collaboration and creative problem
        solving skills. ( job specific) (why career transition) (unique
        trajexctory) Self-starter, with a passion to learn, expand skill sets
        and push comfort zone boundaries.
      </p>
      </section>
      <section> 
      <div className="flex flex-wrap items-center text-gray-400">
        <h6 className="text-yellow-500 text-lg font-bold w-2/3 pt-6 pb-2">
          Technologies:
        </h6>
        <div className="flex flex-wrap">
          <p className="mr-2">JavaScript,</p>
          <p className="mr-2">React,</p>
          <p className="mr-2">SQL,</p>
          <p className="mr-2">Ruby,</p>
          <p className="mr-2">Ruby on Rails</p>
          <p></p>
        </div>
      </div>
      </section>
    </div>
  );
}
export default About;
