import React from "react";
import Hero from '../images/Hero.png'

export default function Banner() {
  return (
    <div className="main-container ">
      <div className="flex items-center flex-col sm:flex-row  mt-20 ">
        <div className="w-1/2">
          <h2 className="inter400 text-[16px] bg-[#BBFF47] px-2 py-1 w-fit text-[black]">
            Track 1000 monthly clicks with all features included
          </h2>
          <h2 className="inter700 text-[70px]">Tracking Links Solved</h2>
          <p className="inter400 text-[18px] w-[78%]">Create simple, beautiful and branded link trackers with smart redirects, retargeting pixels, QR codes and more.</p>
          <div className="mt-16 w-fit">
            <button className="bg-[#1361F5] inter500 text-[18px] px-5 py-2 rounded-full">Get Started for Free</button>
            <p className="inter400 text-[#6d6d6d] text-center mt-3">No credit card required</p>
          </div>
        </div>
        <div className="w-1/2">
          <div>
          <img  src={Hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
