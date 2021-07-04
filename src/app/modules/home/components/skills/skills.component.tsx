import React from "react";
import { SnapSlider } from "@/app/components/snap-slider";
import "./skills.component.scss";
import { ReactComponent as JavascriptIcon } from "@/app/assets/svgs/javascript.svg";
import { ReactComponent as TypescriptIcon } from "@/app/assets/svgs/typescript.svg";
import { ReactComponent as GitIcon } from "@/app/assets/svgs/git.svg";
import { ReactComponent as ReactIcon } from "@/app/assets/svgs/react.svg";
import { ReactComponent as AngularIcon } from "@/app/assets/svgs/angular.svg";
import { ReactComponent as NodeIcon } from "@/app/assets/svgs/nodejs.svg";

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

const Skills: React.FC = () => {
  return (
    <div className="pw-home-skills">
      <div className="pw-skill-title py-4 mb-4">
        <h3 className="text-center text-uppercase mx-4">Skills</h3>
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
  );
};

export default Skills;
