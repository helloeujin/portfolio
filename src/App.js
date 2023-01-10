import About from "./About";
import "./css/App.scss";
import Footer from "./Footer";
import More from "./More";
import Portfolio from "./Portfolio";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  const TRACKING_ID = process.env.STREAM_ID;

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <div className="intro-text">
        Hello! I'm <span>Youjin Shin</span>.
        <br />I am a data visualization specialist and visual storyteller.
      </div>

      <Portfolio />

      <About />

      <More />

      <Footer />
    </>
  );
}

export default App;
