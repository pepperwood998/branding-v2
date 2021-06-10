import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu, Input } from "antd";
import HomePage from "./modules/home";
import NotFoundPage from "./modules/not-found";
import { SnapSlider } from "@/app/components/snap-slider";
import "./styles/app.scss";
import { ReactComponent as JavascriptIcon } from "@/app/assets/svgs/javascript.svg";
import { ReactComponent as TypescriptIcon } from "@/app/assets/svgs/typescript.svg";
import { ReactComponent as GitIcon } from "@/app/assets/svgs/git.svg";
import { ReactComponent as ReactIcon } from "@/app/assets/svgs/react.svg";
import { ReactComponent as AngularIcon } from "@/app/assets/svgs/angular.svg";
import { ReactComponent as NodeIcon } from "@/app/assets/svgs/nodejs.svg";

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="app">
      <Router>
        <div className="pw-header">
          <Input.Search allowClear className="pw-header-search-bar" />
          <Menu mode="horizontal" className="pw-header-menu">
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu>
        </div>

        <div className="pw-body">
          <div className="pw-body-intro">
            <div className="pw-body-intro-inner"></div>
          </div>
          <div className="pw-body-skill">
            <div className="pw-skill-title mb-8">
              <h2 className="text-center">Skills</h2>
            </div>
            <button
              onClick={() =>
                setCurrent((current) => (current >= 5 ? 0 : current + 1))
              }
            >
              Next
            </button>
            <SnapSlider
              activeIndex={current}
              onChangeIndex={(activeIndex) => setCurrent(activeIndex)}
            >
              <JavascriptIcon className="icon" />
              <TypescriptIcon className="icon" />
              <GitIcon className="icon" />
              <ReactIcon className="icon" />
              <AngularIcon className="icon" />
              <NodeIcon className="icon" />
            </SnapSlider>
          </div>
        </div>
        <Switch>
          <Route path={["/home", "/"]} exact>
            <HomePage />
          </Route>
          <Route path={["/not-found", "*"]}>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
