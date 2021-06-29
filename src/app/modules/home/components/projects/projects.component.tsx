import React, { useState, useCallback } from "react";
import classNames from "classnames";
import "./projects.component.scss";
import { ReactComponent as ArrowRightIcon } from "@/app/assets/svgs/arrow-right.svg";
import { ReactComponent as BackIcon } from "@/app/assets/svgs/back.svg";
import TempPlayer from "@/app/assets/images/temp-player.png";
import TempBlogLogo from "@/app/assets/images/temp-blog-logo.png";

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

const Projects: React.FC = () => {
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
    <div className="pw-home-project">
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
  );
};

export default Projects;
