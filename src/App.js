import "./css/App.scss";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <div className="intro-text">
        Hello! I'm <span>Youjin</span>.
        <br />I am a data visualization practitioner and visual storyteller.
      </div>

      <Portfolio />

      <Footer />
    </>
  );
}

export default App;
