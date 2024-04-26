import React, { useState } from "react";
import img1 from '../images/card1.png'
import img2 from '../images/card2.png'
import img3 from '../images/card3.png'
import img4 from '../images/card4.png'
import img5 from '../images/card5.png'
import img6 from '../images/card6.png'
import img7 from '../images/card7.png'
import img8 from '../images/card8.png'
import img9 from '../images/card9.png'
import img10 from '../images/card10.png'
import img11 from '../images/card11.png'

export default function Platform() {
    const [display,setDisplay] = useState(32)

    function handleDisplay(){
        setDisplay(display+8)
    }
    const cards=[
        {
            image:img1
        },
        {
            image:img2
        },
        {
            image:img3
        },
        {
            image:img4
        },
        {
            image:img5
        },
        {
            image:img6
        },
        {
            image:img7
        },
        {
            image:img8
        },
        {
            image:img9
        },
        {
            image:img10
        },
        {
            image:img11
        },
        {
            image:img1
        },
        {
            image:img2
        },
        {
            image:img3
        },
        {
            image:img4
        },
        {
            image:img5
        },
        {
            image:img6
        },
        {
            image:img7
        },
        {
            image:img8
        },
        {
            image:img9
        },
        {
            image:img10
        },
        {
            image:img11
        },
        {
            image:img1
        },
        {
            image:img2
        },
        {
            image:img3
        },
        {
            image:img4
        },
        {
            image:img5
        },
        {
            image:img1
        },
        {
            image:img2
        },
        {
            image:img3
        },
        {
            image:img4
        },
        {
            image:img5
        },
        {
            image:img6
        },
        {
            image:img7
        },
        {
            image:img8
        },
        {
            image:img9
        },
        {
            image:img10
        },
        {
            image:img11
        },
        {
            image:img6
        },
        {
            image:img7
        },
        {
            image:img8
        },
        {
            image:img9
        },
        {
            image:img10
        },
        {
            image:img11
        },


    ]
  return (
    <div>
      <div className="main-container ">
        <div className="text-center pt-16 pb-8">
          <h4 className="text-[#1361F5] text-[18px] inter600">
            WE'RE FRIENDS WITH EVERYONE
          </h4>
          <h2 className="inter600 text-[50px]">
            Works with all Ad Platforms and Apps you Use
          </h2>
        </div>
<div className="relative">
    <div className="h-72 w-full absolute bottom-0 flex flex-col  justify-end items-center text-center" style={{
      background: 'linear-gradient(rgba(231, 242, 249, .3) , #E3F1FA 100%)',
      
    }}>
        <h2 className="inter500 text-[30px] text-[#1d1d1d]">...and thousands of other integrations available via Zapier</h2>
        <button onClick={handleDisplay} className="flex items-center gap-3 px-5 py-2 rounded-full mt-4 bg-[#1361f5] text-white">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
<path d="M1 6.4H18M18 6.4L12.6 1M18 6.4L12.6 11.8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
    </div>

    <div className="flex flex-wrap ">
        
{cards.slice(0,display).map((item,index)=>(
    <img className="w-[100px] md:w-[165px] md:h-[165px]" src={item.image} alt="" />
))}
    </div>
</div>

      </div>
    </div>
  );
}
