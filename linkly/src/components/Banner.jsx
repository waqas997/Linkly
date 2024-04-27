import React from "react";
import Hero from '../images/Hero.png';
import circle from '../images/circle.png'

export default function Banner() {
  return (
    
    <div className="main-container reltive" >
      
      <div className="flex items-center flex-col sm:flex-row mt-8 text-center md:text-left land:mt-20">
        <div className="land:w-1/2">
          <h2 className="inter400 text-[10px] land:text-[16px] mb-3 bg-[#BBFF47] px-2 py-1 w-fit text-[black] m-auto md:mx-0">
            Track 1000 monthly clicks with all features included
          </h2>
          <h2 className="mb-3 inter700 land:text-[50px] md:text-[38px] lg:text-[70px] leading-none">Tracking Links Solved</h2>
          <p className="inter400 text-[12px] land:text-[18px] md:w-[88%] land:w-[78%]">Create simple, beautiful and branded link trackers with smart redirects, retargeting pixels, QR codes and more.</p>
          <div className="mt-8 land:mt-16 w-fit m-auto md:mx-0">
            <button className="bg-[#1361F5] z-50 relative inter500 text-[12px] land:text-[18px] px-5 py-2 rounded-full text-white">Get Started for Free</button>
            <p className="inter400 text-[#6d6d6d] text-[12px] land:text-[16px] text-center mt-3">No credit card required</p>
          </div>
        </div>
        {/* <div className="absolute "><img src={shadow} alt="" className="w" /></div> */}

        <div className="land:w-1/2 mt-5 ">
          <div className="absolute top-0 z-[0]">
          <img className="" src={circle} alt="" />
          
          </div>
          
          
          <div className="relative" >
          <img  src={Hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
