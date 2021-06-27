import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import classNames from "classnames";
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
import { ReactComponent as ArrowRightIcon } from "@/app/assets/svgs/arrow-right.svg";
import { ReactComponent as BackIcon } from "@/app/assets/svgs/back.svg";
import TempPlayer from "@/app/assets/images/temp-player.png";
import TempBlogLogo from "@/app/assets/images/temp-blog-logo.png";

const snapSliderData = [
  {
    icon: <JavascriptIcon className="icon" />,
    title: "Javascript",
    description:
      "First programming language that I actually studied for the longest. Mainly use for my frontend web development, I also use JS on the server for some NodeJS project too.",
  },
  {
    icon: <TypescriptIcon className="icon" />,
    title: "Typescript",
    description:
      "Just use this for a year now, really enjoy the type support. Have experience with converting some JS project to Typescript.",
  },
  {
    icon: <GitIcon className="icon" />,
    title: "Git",
    description:
      "Used a lot for for even my personal project. Have basic knowledge and some tricks to make developing more easy and saint.",
  },
  {
    icon: <ReactIcon className="icon" />,
    title: "ReactJS",
    description:
      "First UI framework I learned. Understand basic concepts, have experience in building project base. Used for my university capstone project.",
  },
  {
    icon: <AngularIcon className="icon" />,
    title: "Angular",
    description:
      "Get to use this framework when I got my first job. Have used in real production project, basic knowledge in RxJS and also have a chance to build an Angular project base.",
  },
  {
    icon: <NodeIcon className="icon" />,
    title: "NodeJS",
    description:
      "Mostly used with Express for building APIs. Have experience in building project base, developing and deploying to docker as multiple service projects.",
  },
];

const projects = [
  {
    image: TempPlayer,
    title: "Indie Vibe",
    description:
      "The front-end client for our online music streaming service, implement with Stripe paying service. Include end-user UI and admin dasboard.",
    tags: ["Javascript", "ReactJS", "Java", "Spring"],
    createdAt: "Jun 12th, 2018",
  },
  {
    image: TempBlogLogo,
    title: "Blog Me",
    description:
      "A blogging site similar to Medium, with full-stack development using ReactJS and NestJS. The idea comes from the real-world project.",
    tags: ["ReactJS", "Typescript", "NestJS"],
    createdAt: "Mar 15th, 2019",
  },
];

const App: React.FC = () => {
  const [viewingIndexes, setViewingIndexes] = useState<number[]>([]);
  const handleViewDetail = useCallback(
    (index: number) => {
      if (viewingIndexes.indexOf(index) >= 0) {
        setViewingIndexes((indexes) => indexes.filter((i) => i !== index));
      } else {
        setViewingIndexes((indexes) => [...indexes, index]);
      }
    },
    [viewingIndexes],
  );

  return (
    <div className="app">
      <Router>
        <Navbar bg="light">
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Navbar>
        <div className="pw-header"></div>

        <div className="pw-body">
          <div className="pw-body-intro mb-8">
            <div className="pw-body-intro-inner"></div>
          </div>
          <div className="pw-body-skill mb-8">
            <div className="mb-8 px-4">
              <h3 className="text-center text-uppercase">Skills</h3>
            </div>
            <SnapSlider
              data={snapSliderData}
              preview={(item) => item.icon}
              content={(item) => (
                <div className="pw-skill-content">
                  <h5 className="mb-2">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              )}
            />
          </div>
          <div className="pw-body-project pb-6">
            <div className="mb-8 text-white pt-6 px-4">
              <h3 className="text-center text-uppercase">
                Projects &amp; Experience
              </h3>
            </div>
            <div className="pw-project-container">
              {projects.map((project, projectIndex) => {
                const isViewing = viewingIndexes.includes(projectIndex);

                return (
                  <div className="pw-project-card" key={projectIndex}>
                    <div
                      className={classNames({
                        "pw-project-card-inner": true,
                        "active": isViewing,
                      })}
                    >
                      <div
                        className={classNames({
                          "pw-project-card-image": true,
                          "active": isViewing,
                        })}
                      >
                        <img src={project.image} />
                      </div>
                      <div className="pw-project-card-content">
                        <h5 className="text-ellipsis mb-1">{project.title}</h5>
                        <div className="pw-project-card-desc mb-4">
                          <p> {project.description}</p>
                        </div>
                        <div className="pw-project-card-tags">
                          {project.tags.map((tag, tagIndex) => (
                            <div className="pw-project-card-tag" key={tagIndex}>
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={classNames({
                          "pw-project-card-footer": true,
                          "active": isViewing,
                        })}
                      >
                        <span>{project.createdAt}</span>
                        <button onClick={() => handleViewDetail(projectIndex)}>
                          <ArrowRightIcon />
                        </button>
                      </div>
                    </div>
                    <div
                      className={classNames({
                        "pw-project-card-detail": true,
                        "active": isViewing,
                      })}
                    >
                      <div className="pw-project-card-detail-content">
                        <h5 className="mb-1">{project.title}</h5>
                        <p className="mb-8">{project.description}</p>
                        <div className="pw-project-card-detail-tags">
                          {project.tags.map((tag, tagIndex) => (
                            <div className="pw-project-card-tag" key={tagIndex}>
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        className="reset flex-center"
                        onClick={() => handleViewDetail(projectIndex)}
                      >
                        <BackIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
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
