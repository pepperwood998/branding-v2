import React from "react";
import "./intro.component.scss";
import TempMC from "@/app/assets/images/temp-mc.png";
import { ReactComponent as FbIcon } from "@/app/assets/svgs/fb.svg";
import { ReactComponent as GmailIcon } from "@/app/assets/svgs/gmail.svg";

const Intro: React.FC = () => {
  return (
    <div className="pw-home-intro">
      <div className="pw-home-intro-inner">
        <div className="pw-intro-bio">
          <div className="pw-intro-image mb-4">
            <img src={TempMC} />
          </div>
          <div className="flex-between flex-wrap mb-2 leading-4">
            <span className="text-sm">Tên:</span>
            <span className="font-medium">Đào Thiện Tuấn</span>
          </div>
          <div className="flex-between flex-wrap mb-2 leading-4">
            <span className="text-sm">Ngày sinh:</span>
            <span className="font-medium">10/1998</span>
          </div>
          <div className="flex-between flex-wrap mb-2 leading-4">
            <span className="text-sm">Vị trí:</span>
            <span className="font-medium">Developer</span>
          </div>
          <div className="flex-between flex-wrap mb-2 leading-4">
            <span className="text-sm">Kinh nghiệm:</span>
            <span className="font-medium">1 năm</span>
          </div>
          <div className="flex-between flex-wrap">
            <span className="text-sm">Email:</span>
            <span className="font-medium">tuandt66742@gmail.com</span>
          </div>
          <div className="pw-intro-social mt-4">
            <FbIcon />
            <GmailIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
