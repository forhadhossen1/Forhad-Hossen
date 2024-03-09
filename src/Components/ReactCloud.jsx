          
            
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

      const options = {
        radius: 250,
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
          
        