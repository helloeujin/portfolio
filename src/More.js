import "./css/More.scss";

const More = () => {
  const honorsData = require("./data/honors.json");
  const teachingData = require("./data/teaching.json");
  console.log(teachingData);

  return (
    <div className="more">
      {/* SKILLS */}
      <div className="moreHed">
        Skills <span className="arrow">&#x2192;</span>
      </div>
      <div className="moreDesc moreDescMore">
        <div className="descHed">
          <ul>
            <li>
              Front-end dev: <span className="tags">JavsCript</span>
              <span className="tags">CSS</span>
              <span className="tags">Sass</span>{" "}
              <span className="tags">React</span>
            </li>
            <li>
              Data Visualization: <span className="tags">D3.js</span>
              <span className="tags">Three.js</span>
              <span className="tags">p5.js</span>
            </li>
            <li>
              Data Analysis: <span className="tags">Python</span>
            </li>
            <li>
              Design: <span className="tags">Figma</span>
              <span className="tags">Illustrator</span>
            </li>
          </ul>
        </div>
      </div>

      {/* HONORS */}
      <div className="moreHed">
        Honors <span className="arrow">&#x2192;</span>
      </div>
      <div className="moreDesc">
        {" "}
        {honorsData.map((honor) => {
          return (
            <div className="honor">
              <span className="date">{honor.date} </span>
              {honor.org}, {honor.award}
              {honor.story ? (
                <span className="story">, '{honor.story}'</span>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* TALKS */}
      <div className="moreHed">
        Talks and Teaching <span className="arrow">&#x2192;</span>
      </div>
      <div className="moreDesc">
        {" "}
        {teachingData.map((teaching) => {
          return (
            <div className="honor">
              <span className="date">{teaching.date} </span>
              {teaching.school}
              {teaching.desc ? (
                <span className="story">, {teaching.desc}</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
