import React from "react";
import Intro from "./components/intro/intro.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Academic from "./components/academic/academic.component";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <a className="pw-anchor" id="intro"></a>
      <div className="pw-body-intro">
        <Intro />
      </div>
      <a className="pw-anchor" id="skills"></a>
      <div className="pw-body-skill pb-6">
        <Skills />
      </div>
      <a className="pw-anchor" id="projects"></a>
      <div className="pw-body-project pb-6">
        <Projects />
      </div>
      <div className="pw-body-academic">
        <Academic />
      </div>
    </div>
  );
};

export default HomePage;
