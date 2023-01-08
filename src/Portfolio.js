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
              <img src={process.env.PUBLIC_URL + "/" + project.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
