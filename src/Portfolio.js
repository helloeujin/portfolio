import "./css/Portfolio.scss";

const Portfolio = () => {
  const data = require("./data/data.json");
  // console.log(data);
  return (
    <div className="portfolio">
      {data.map((project) => {
        return (
          <div className="project">
            <div className="project-content">
              <div className="tag">{project.tag}</div>
              <div className="hed">{project.hed}</div>
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
