import React from "react";
import img1 from "../images/brand1.png";
import img2 from "../images/brand2.png";
import img3 from "../images/brand3.png";

export default function Branded() {
  return (
    <div
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to top, rgb(168 237 234 / 34%) 0% , rgb(249 229 229 / 54%) 80%)",
      // }}
      class=""
    >
      <div className="main-container py-12">
        <div className="flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2">
            <div className="w-[90%]">
              <h2 className="inter600 text-[50px]">Branded Link Shortening</h2>
              <p className="inter400 text-[18px] mt-6">
                Use your own domain to create short tracking links with your
                branding.
              </p>
              <p className="mt-3">
                Redirect users by{" "}
                <span className="inter700 text-[#1361F5]">Country, Device</span>{" "}
                or use a{" "}
                <span className="inter700 text-[#1361F5]">Link Rotator.</span>
              </p>
              <p className="mt-3">
                Share{" "}
                <span className="inter700 text-[#1361F5]">
                  mailto links, tel links
                </span>{" "}
                and SMS links.
              </p>
              <p className="mt-5">
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
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" m-0 p-0 ">
            <img src={img2} alt="" />
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-[90%] ml-auto">
              <h2 className="inter600 text-[50px]">Branded Link Shortening</h2>
              <p className="inter400 text-[18px] mt-6">
                Use your own domain to create short tracking links with your
                branding.
              </p>
              <p className="mt-3">
                Redirect users by{" "}
                <span className="inter700 text-[#1361F5]">Country, Device</span>{" "}
                or use a{" "}
                <span className="inter700 text-[#1361F5]">Link Rotator.</span>
              </p>
              <p className="mt-3">
                Share{" "}
                <span className="inter700 text-[#1361F5]">
                  mailto links, tel links
                </span>{" "}
                and SMS links.
              </p>
              <p className="mt-5">
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
        </div>
        <div className="flex flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2">
            <div className="w-[90%]">
              <h2 className="inter600 text-[50px]">Branded Link Shortening</h2>
              <p className="inter400 text-[18px] mt-6">
                Use your own domain to create short tracking links with your
                branding.
              </p>
              <p className="mt-3">
                Redirect users by{" "}
                <span className="inter700 text-[#1361F5]">Country, Device</span>{" "}
                or use a{" "}
                <span className="inter700 text-[#1361F5]">Link Rotator.</span>
              </p>
              <p className="mt-3">
                Share{" "}
                <span className="inter700 text-[#1361F5]">
                  mailto links, tel links
                </span>{" "}
                and SMS links.
              </p>
              <p className="mt-5">
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
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
