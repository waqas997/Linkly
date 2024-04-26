import React from "react";

export default function Reviews() {
  return (
    <div>
      <div className="main-container ">
        <div className="text-center pt-20 pb-5">
          <h2 className="inter600 text-[50px]">Linkliy Feature</h2>
          <p className="text-[#6d6d6d] text-[18px] w-6/12 m-auto">
            You’re in good company. Thousands of businesses use Linkly to create
            tracking links, retarget visitors, make QR codes and more.
          </p>
        </div>
        <div className="cards pb-20">
          <div className="flex flex-col md:flex-row gap-9">
            <div className="flex-[.4]  bg-[#fff] rounded-xl h-max px-6 py-3">
              <div className=" ">
                <p className="text-[#6D6D6D]">
                  “Very nice product, was our favorite among several we tried.
                  The developer/owner of Linkly is very responsive and developed
                  helpful features quickly, following our request. Very cool.”
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                  <h2 className="text-[#1d1d1d] text-[20px] inter500">
                    ROBERT W.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-[.7] rounded-xl bg-[#fff] px-6 py-5">
              <div>
                <p className="text-[#1d1d1d] text-[18px] inter500">
                  “We were looking for a tool that allowed us to track link
                  clicks from across many different sources to a 3rd party site
                  we didn’t have access to and pixel all of them centrally.
                  Linkly is a clean, easy way of doing that quickly and
                  cheaply.”
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                  <h2 className="text-[#1d1d1d] text-[20px] inter500">
                    ROBERT W.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-[.4] bg-[#fff] h-max rounded-xl px-6 py-3">
              <div>
                <p className="text-[#6D6D6D]">
                  “Very nice product, was our favorite among several we tried.
                  The developer/owner of Linkly is very responsive and developed
                  helpful features quickly, following our request. Very cool.”
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                  <h2 className="text-[#1d1d1d] text-[20px] inter500">
                    ROBERT W.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-9 mt-5">
            <div className="flex-[.7] flex  flex-col gap-5">
              <div className="  bg-[#fff] rounded-xl h-max p-4">
                <div className=" ">
                  <p className="text-[#6D6D6D]">
                    “Very easy to use - great customer help - clear data”
                  </p>
                  <hr className="my-4" />
                  <div className="flex items-center gap-4">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                    <h2 className="text-[#1d1d1d] text-[20px] inter500">
                      ALEKSANDRA R
                    </h2>
                  </div>
                </div>
              </div>
              <div className="  bg-[#fff] rounded-xl h-max p-4">
                <div className=" ">
                  <p className="text-[#6D6D6D]">
                    “Good features, relatively easy to use and got great
                    results”
                  </p>
                  <hr className="my-4" />
                  <div className="flex items-center gap-4">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                    <h2 className="text-[#1d1d1d] text-[20px] inter500">
                      NIALL H.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[.5] p-4 rounded-xl h-max bg-[#fff] mt-3">
              <div>
                <p className="text-[#6D6D6D]">
                  “Love the geo targeting feature whereby it auto detects user’s
                  location and redirects to appropriate local URL, also happy
                  with the mailto link shortening which isn’t offered by most
                  link shorteners.”
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                  <h2 className="text-[#1d1d1d] text-[20px] inter500">
                    SAGAR J
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-[.5] p-4 bg-[#fff] h-max rounded-xl ">
              <div>
                <p className="text-[#6D6D6D]">
                  “This software it remarkably easy to use and would be a great
                  choice for any marketer who wants to be able to track link
                  metrics without losing brand integrity.”
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#7562e0]"></div>
                  <h2 className="text-[#1d1d1d] text-[20px] inter500">
                    Shanda E.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
