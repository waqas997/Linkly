import React, { useState } from "react";
import timeline from "../images/timeline.png";

export default function Timeline() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (index) => {
    setScrollIndex(index);
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-blue-200 py-12 ">
      <div className="main-container">
        <div className="text-center">
          <h2 className="inter600 text-[20px] md:text-[30px] land:text-[50px]">How Linkly Works</h2>
          <p className="inter400 text-[12px] md:text-[15px] land:text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
       
          <div className="flex flex-col sm:flex-row items-start justify-evenly mt-12 ">
            <div className="w-full sm:w-1/3">
              <h2 className="inter600 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] xl:text-[50px]">
                Redirect by Country or Device
              </h2>
              <p className="text-[12px] md:text-[15px] land:text-[16px]">
                Redirect users to URLs based on their country or device, or use
                a link rotator. Change the destination even after the link is
                created.
              </p>
            </div>
            <div className="w-full sm:w-auto flex flex-col justify-center items-center">
              <div className="timeline-container">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`timeline w-5 h-5 bg-[#1361F5] rounded-full relative flex items-center justify-center mb-12 ${
                      scrollIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleScroll(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className=" sm:w-1/3 w-fit">
              <div className="slider-content">
                <img src={timeline} alt="" />
              </div>
            </div>
          </div>
      
      </div>
    </div>
  );
}
