import { useState } from "react";
import "./css/Portfolio.scss";

const Portfolio = () => {
  const [toggle, setToggle] = useState(false);

  const data = require("./data/data.json");
  // console.log(data);

  const toggleDesc = (event) => {
    setToggle((current) => !current);
  };

  return (
    <div className="portfolio">
      {data.map((project, i) => {
        return (
          <div className="project" key={"project" + i}>
            <div className="project-content">
              <div className="tag">{project.tag}</div>
              <div className="hed" onClick={toggleDesc}>
                {project.hed}{" "}
                <div className={toggle ? "rotateArrow arrow" : "arrow"}>
                  &#x2192;{" "}
                </div>{" "}
              </div>
              <div className={toggle ? "showDesc desc" : "desc"}>
                {project.desc}
              </div>
              <a href={project.url} target="_blank">
                <img src={process.env.PUBLIC_URL + "/" + project.img} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
