          
            
import { useEffect } from "react";
import "./Skill.css";
import TagCloud from "TagCloud";


const ReactCloud = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "Bootstrap",
        "JavaScript",
        "React",
        "Tailwind",
        "Express.js",
        "MongoDB",
        "Firebase",
        "React Router",
        "NodeJS",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      // let radius = 100;
      // if(window.innerWidth >= 620){
      //   radius = 250;
      // }

      const options = {
        radius: 150,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default ReactCloud;
          
        