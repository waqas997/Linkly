import React from "react";
import img1 from "../images/image5.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import img4 from "../images/image6.png";
import img5 from "../images/image4.png";

export default function PartnerSec() {
  return (
    <div className="main-container py-8">
      <div>
        <h2 className="inter600 text-[16px] md:text-[20px] land:text-[34px] text-center">
          160,000+ Organizations, Big and Small, Trust Linkly
        </h2>
        <div className="mt-6 flex items-center justify-between">
          <span>
            <img src={img1} alt="" />
          </span>
          <span>
            <img src={img2} alt="" />
          </span>
          <span>
            <img src={img3} alt="" />
          </span>
          <span>
            <img src={img4} alt="" />
          </span>
          <span>
            <img src={img5} alt="" />
          </span>
        </div>
        <div className="text-center mt-12 land:mt-20">
            <p className="mb-4 text-[12px] md:text-[15px] land:text-[16px]">Track 1000 monthly clicks with all features included</p>
            <button className="bg-[#1361F5] inter500 text-[12px] md:text-[16px] land:text-[18px] px-5 py-2 rounded-full">Get Started for Free</button>
            <p className="inter400 text-[#6d6d6d] text-[12px] land:text-[16px] text-center mt-3">No credit card required</p>

        </div>
      </div>
    </div>
  );
}
