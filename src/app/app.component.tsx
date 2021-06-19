import React from "react";
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

const snapSliderData = [
  {
    icon: <JavascriptIcon className="icon" />,
    description:
      "First programming language that I actually studied for the longest. Mainly use for my frontend web development, I also use JS on the server for some NodeJS project too.",
  },
  {
    icon: <TypescriptIcon className="icon" />,
    description:
      "Just use this for a year now, really enjoy the type support. Have experience with converting some JS project to Typescript.",
  },
  {
    icon: <GitIcon className="icon" />,
    description:
      "Used a lot for for even my personal project. Have basic knowledge and some tricks to make developing more easy and saint.",
  },
  {
    icon: <ReactIcon className="icon" />,
    description:
      "First UI framework I learned. Understand basic concepts, have experience in building project base. Used for my university capstone project.",
  },
  {
    icon: <AngularIcon className="icon" />,
    description:
      "Get to use this framework when I got my first job. Have used in real production project, basic knowledge in RxJS and also have a chance to build an Angular project base.",
  },
  {
    icon: <NodeIcon className="icon" />,
    description:
      "Mostly used with Express for building APIs. Have experience in building project base, developing and deploying to docker as multiple service projects.",
  },
];

const App: React.FC = () => {
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
            <div className="pw-skill-title mb-4">
              <h2 className="text-center">Skills</h2>
            </div>
            <SnapSlider
              data={snapSliderData}
              preview={(item) => item.icon}
              content={(item) => (
                <p className="pw-skill-content">{item.description}</p>
              )}
            />
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
