import React from "react";
import "./academic.component.scss";

const data = [
  {
    time: "10/2013 - 10/2016",
    location: "THPT Chuyen Ngoai Ngu",
    description:
      "Vao hoc chi vi hoc phi re, the thoi, ko de lam gi ca. Nha bo may ngheo, eo co du gia, co van de gi khong?",
  },
  {
    time: "10/2016 - 10/2020",
    location: "DH FPT",
    description:
      " Vao hoc chi vi khong phai dong hoc phi, hoc bong toan phan nho xet hoc ba, khong co gi dac biet noi troi. Tao khong co tien, nha tao cung khong nhieu tien.",
  },
];

const Academic: React.FC = () => {
  return (
    <div className="pw-home-academic">
      <div className="pw-academic-title py-4">
        <h3 className="text-center text-uppercase mx-4">Academic Background</h3>
      </div>
      <div className="pw-academic-timeline mx-4 mr-6">
        <div className="pw-academic-timeline-inner py-6">
          {data.map((item, index) => (
            <div className="pw-timeline-item" key={index}>
              <div className="pw-timeline-item-pin"></div>
              <div className="pw-timeline-item-content">
                <div className="pw-timeline-time">{item.time}</div>
                <div className="pw-timeline-detail">
                  <div className="font-medium mb-1">{item.location}</div>
                  <div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
