import React from "react";
import img1 from "../images/brand1.png";
import img2 from "../images/brand2.png";
import img3 from "../images/brand3.png";
import img4 from "../images/2.png";

export default function Branded() {
  return (
    <div
      style={{
        boxShadow: "inset 0px 278px 178px 38px rgba(255,246,224,1)",
      }}
      class=""
    >
      <div className="main-container py-12 ">
        <div className="flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2 ">
            <div className="w-[90%]">
              <h2 className="inter600 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] w-9/12  text-[#1d1d1d]">
                Branded Link Shortening
              </h2>
              <p className="inter400 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d] mt-6">
                Use your own domain to create short tracking links with your
                branding.
              </p>
              <p className="mt-3 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Redirect users by{" "}
                <span className="inter700 text-[#1361F5]">Country, Device</span>{" "}
                or use a{" "}
                <span className="inter700 text-[#1361F5]">Link Rotator.</span>
              </p>
              <p className="mt-3 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Share{" "}
                <span className="inter700 text-[#1361F5]">
                  mailto links, tel links
                </span>{" "}
                and SMS links.
              </p>
              <p className="mt-5 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Add{" "}
                <span className="inter700 text-[#1361f5]">
                  Retargeting Pixels to Links
                </span>{" "}
                for <span className="inter700 text-[#1361f5]">Meta Pixel</span>{" "}
                or{" "}
                <span className="inter700 text-[#1361f5]">
                  X Custom Audiences.
                </span>
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full flex justify-between">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-6">
          <div className="sm:w-1/2 w-full flex justify-between ">
            <img src={img2} alt="" />
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-[90%] md:ml-auto">
              <h2 className="inter600 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px]  text-[#1d1d1d]">
                Beautiful, Visual, Shareable Click Tracking Reports, fully
                Integrated with Google Sheets
              </h2>

              <p className="mt-3 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                <span className="inter700 text-[#1361F5]">
                  Track the Number of Clicks
                </span>{" "}
                on a particular link.
              </p>
              <p className="mt-3 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Breakdowns by{" "}
                <span className="inter700 text-[#1361F5]">
                  Country, Device, ISP, Destination
                </span>{" "}
                and more.
              </p>
              <p className="mt-5 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Get all your data as{" "}
                <span className="inter700 text-[#1361f5]">Live Feeds</span>{" "}
                inside Google Sheets{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between  mt-6">
          <div className="w-full sm:w-1/2">
            <div className="w-[90%]">
              <h2 className="inter600 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] w-8/12 text-[#1d1d1d] mt-5">
                Bring your whole Team
              </h2>
              <p className="inter400 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d] mt-6 ">
                Add users to create links, collaborate on tracking reports, and
                share link data.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full flex justify-between mt-5">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
