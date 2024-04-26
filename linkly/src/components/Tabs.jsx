import React, { useEffect, useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    console.log("my tab is :", active);
  }, [active]);
  return (
    <div>
      <div className="main-container">
        <div className="text-center my-16">
          <h2 className="inter600 text-[50px]">Linkliy Feature</h2>
        </div>
        <div className="relative ">
          <div className=" absolute top-[-30px] w-full hidden">
        <div className="tabs flex items-center border-[1px] rounded-full border-black justify-between bg-[#1361F5] w-full  md:w-5/12 m-auto px-4 py-3   ">
          <h2
            className={`px-8 py-2 cursor-pointer ${
              active === 0 ? "bg-[#fff]  rounded-full" : "text-white "
            }`}
            // onclick={() => setActive(0)}
            onClick={() => setActive(0)}
          >
            Links
          </h2>
          <h2
            className={`px-8 py-2 cursor-pointer ${
              active === 1 ? "bg-[#fff]  rounded-full" : "text-white "
            }`}
            onClick={() => setActive(1)}
          >
            Traffic Rounting
          </h2>
          <h2
            className={`px-8 py-2 cursor-pointer ${
              active === 2 ? "bg-[#fff]  rounded-full" : "text-white "
            }`}
            onClick={() => setActive(2)}
          >
            Analytic
          </h2>
        </div>
        </div>
        <div className="tabs-content border-[1px] border-black rounded-[20px] text-center pt-20 pb-8">
          <div className={`${active === 0 ? "block" : "hidden"}`}>
            <div className="flex flex-wrap gap-6 justify-center w-9/12 m-auto mb-8">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div className="border-2 border-black  px-5 py-2 rounded-full text-[20px]">
                  {(item === 0 && <p>Customize Social Media Previews</p>) ||
                    (item === 1 && <p>Add Retargeting Pixels</p>) ||
                    (item === 2 && <p>Custom domains & Vanity URLs</p>) ||
                    (item === 3 && <p>HTTP & HTTPS secure links</p>) ||
                    (item === 4 && (
                      <p>Make QR codes with dynamic destinations</p>
                    )) ||
                    (item === 5 && <p>Make UTM tags for your links</p>) ||
                    (item === 6 && <p>Expiring links</p>) ||
                    (item === 7 && <p>Zapier integration</p>) ||
                    (item === 8 && <p>Fast link creation API</p>) ||
                    (item === 9 && <p>Plugins for Chrome & Firefox</p>) ||
                    (item === 10 && (
                      <p>Shorten & track mailto, tel & sms links</p>
                    ))}
                </div>
              ))}
            </div>
<p className="text-[#6D6D6D] inter400">Track 1000 monthly clicks with all features included</p>
<button className="inter400 bg-[#1361F5] rounded-full px-7 py-2 text-[18px] text-white mt-5">Get Started for Free</button>
<p className="inter400 text-[#6d6d6d] text-center mt-3">No credit card required</p>
          </div>
          <div className={`${active === 1 ? "block" : "hidden"}`}>dsn</div>
          <div className={`${active === 2 ? "block" : "hidden"}`}>sjnjdsn</div>
        </div>
        </div>
      </div>
    </div>
  );
}
