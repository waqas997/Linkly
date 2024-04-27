import React, { useEffect, useState } from "react";
import timeline3 from "../images/timeline3.png";
import timeline1 from "../images/timeline1.png";
import timeline2 from "../images/timeline2.png";
import timeline4 from "../images/timeline4.png";
import timeline5 from "../images/timeline5.png";

export default function Timeline() {
  const [scrollIndex, setScrollIndex] = useState(0);
  useEffect(() => {
    setTimeout(function () {
      if (scrollIndex < 4 || scrollIndex === 0) {
        setScrollIndex(scrollIndex + 1);
      } else if (scrollIndex === 4) {
        setScrollIndex(0);
      }
    }, 5000);
  }, [scrollIndex]);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-blue-200 py-12  ">
      <div className="main-container">
        <div className="text-center">
          <h2 className="inter600 text-[20px] md:text-[30px] land:text-[50px]">
            How Linkly Works
          </h2>
          <p className="inter400 text-[12px] md:text-[15px] land:text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-evenly  md:mt-16 h-[55vh] land:h-[50vh]">
          {scrollIndex === 0 && (
            <div className="w-full sm:w-1/3 text h-20 land:h-auto">
              <h2 className="inter600 leading-[20px] land:leading-[48px] mb-3 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] xl:text-[50px] text-[#1d1d1d]">
                Redirect by Country or Device
              </h2>
              <p className="text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Redirect users to URLs based on their country or device, or use
                a link rotator. Change the destination even after the link is
                created.
              </p>
            </div>
          )}
          {scrollIndex === 1 && (
            <div className="w-full sm:w-1/3 text h-20 land:h-auto">
              <h2 className="inter600 leading-[20px] land:leading-[48px] mb-3 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] xl:text-[50px] text-[#1d1d1d]">
                Use your Domain to Brand your links
              </h2>
              <p className="inter400 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Attach your domain so your tracking short links have your
                branding.
              </p>
            </div>
          )}
          {scrollIndex === 2 && (
            <div className="w-full sm:w-1/3 text h-20 land:h-auto">
              <h2 className="inter600 leading-[20px] land:leading-[48px] mb-3 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] xl:text-[50px] text-[#1d1d1d]">
                Redirect by Country or Device
              </h2>
              <p className="inter400 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Redirect users to URLs based on their country or device, or use
                a link rotator. Change the destination even after the link is
                created.
              </p>
            </div>
          )}
          {scrollIndex === 3 && (
            <div className="w-full sm:w-1/3 text h-20 land:h-auto">
              <h2 className="inter600 leading-[20px] land:leading-[48px] mb-3 text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] xl:text-[50px] text-[#1d1d1d]">
                Attach Retargeting Pixels
              </h2>
              <p className="inter400 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Build custom audiences on Google and Meta from clickers on your
                short links.{" "}
              </p>
            </div>
          )}
          {scrollIndex === 4 && (
            <div className="w-full sm:w-1/3 text h-20 land:h-auto">
              <h2 className="inter600 leading-[20px] land:leading-[48px] mb-3  text-[18px] md:text-[25px] land:text-[35px] lg:text-[40px] xl:text-[50px] text-[#1d1d1d]">
                Invite your Team Members to Collaborate
              </h2>
              <p className="inter400 text-[12px] md:text-[15px] land:text-[16px] text-[#6d6d6d]">
                Invite as many users as you need to your account. Users are
                always free to add.{" "}
              </p>
            </div>
          )}
          <div
            className={`timeline w-full  rounded-full   items-center justify-center  flex md:hidden`}
          >
            <svg className="text-[#1361F5]"
              xmlns="http://www.w3.org/2000/svg"
              width="386"
              height="34"
              viewBox="0 0 386 34"
              fill="none"
            >
              <rect
                x="105"
                y="14"
                width="6"
                height="75"
                rx="3"
                transform="rotate(90 105 14)"
                fill={scrollIndex<5?'currentColor':'#dddddd'}
              style={{
                  transition: "fill 2s ease",
                }}
              />
              <rect
                x="195"
                y="14"
                width="6"
                height="75"
                rx="3"
                transform="rotate(90 195 14)"
                fill={
                  scrollIndex < 5 && scrollIndex > 0
                    ? "currentColor"
                    : "#dddddd"
                }
                style={{
                  transition: "fill 2s ease",
                }}
              />
              <rect
                x="275"
                y="14"
                width="6"
                height="75"
                rx="3"
                transform="rotate(90 275 14)"
                fill={
                  scrollIndex < 5 && scrollIndex > 1
                    ? "currentColor"
                    : "#dddddd"
                }
                style={{
                  transition: "fill 2s ease",
                }}
              />
                <rect
                x="365"
                y="14"
                width="6"
                height="75"
                rx="3"
                transform="rotate(90 365 14)"
                fill={
                  scrollIndex < 5 && scrollIndex > 2
                    ? "currentColor"
                    : "#dddddd"
                }
                style={{
                  transition: "fill 2s ease",
                }}
              />
              <g filter="url(#filter0_d_363_496)">
                <rect
                  x="3"
                  y="31"
                  width="28"
                  height="28"
                  rx="14"
                  transform="rotate(-90 3 31)"
                  fill={scrollIndex<5?'currentColor':'#fffff'}
                  shape-rendering="crispEdges"
                  
                />
                <rect
                  x="2"
                  y="32"
                  width="30"
                  height="30"
                  rx="15"
                  transform="rotate(-90 2 32)"
                  stroke="#F1F3F6"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M14.5018 22.9338C14.3486 22.934 14.1969 22.9039 14.0553 22.8452C13.9138 22.7865 13.7852 22.7005 13.677 22.592L9.19699 18.112C9.08556 18.0044 8.99668 17.8756 8.93554 17.7333C8.87439 17.591 8.84221 17.4379 8.84086 17.283C8.83952 17.1281 8.86904 16.9744 8.9277 16.831C8.98636 16.6877 9.07299 16.5574 9.18253 16.4479C9.29207 16.3383 9.42233 16.2517 9.56571 16.193C9.70909 16.1344 9.86272 16.1049 10.0176 16.1062C10.1725 16.1076 10.3256 16.1397 10.468 16.2009C10.6103 16.262 10.739 16.3509 10.8467 16.4623L14.5018 20.1175L23.197 11.4223C23.417 11.2098 23.7117 11.0922 24.0176 11.0949C24.3235 11.0975 24.6161 11.2202 24.8324 11.4365C25.0488 11.6529 25.1715 11.9455 25.1741 12.2514C25.1768 12.5573 25.0592 12.852 24.8467 13.072L15.3267 22.592C15.2185 22.7005 15.0899 22.7865 14.9483 22.8452C14.8068 22.9039 14.655 22.934 14.5018 22.9338Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter1_d_363_496)">
                <rect
                  x="91"
                  y="31"
                  width="28"
                  height="28"
                  rx="14"
                  transform="rotate(-90 91 31)"
                  fill={scrollIndex<5&&scrollIndex>0?'currentColor':'white'}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="90"
                  y="32"
                  width="30"
                  height="30"
                  rx="15"
                  transform="rotate(-90 90 32)"
                  stroke="#F1F3F6"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M102.502 22.9338C102.349 22.934 102.197 22.9039 102.055 22.8452C101.914 22.7865 101.785 22.7005 101.677 22.592L97.197 18.112C97.0856 18.0044 96.9967 17.8756 96.9355 17.7333C96.8744 17.591 96.8422 17.4379 96.8409 17.283C96.8395 17.1281 96.869 16.9744 96.9277 16.831C96.9864 16.6877 97.073 16.5574 97.1825 16.4479C97.2921 16.3383 97.4223 16.2517 97.5657 16.193C97.7091 16.1344 97.8627 16.1049 98.0176 16.1062C98.1725 16.1076 98.3256 16.1397 98.468 16.2009C98.6103 16.262 98.739 16.3509 98.8467 16.4623L102.502 20.1175L111.197 11.4223C111.417 11.2098 111.712 11.0922 112.018 11.0949C112.324 11.0975 112.616 11.2202 112.832 11.4365C113.049 11.6529 113.171 11.9455 113.174 12.2514C113.177 12.5573 113.059 12.852 112.847 13.072L103.327 22.592C103.218 22.7005 103.09 22.7865 102.948 22.8452C102.807 22.9039 102.655 22.934 102.502 22.9338Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter2_d_363_496)">
                <rect
                  x="179"
                  y="31"
                  width="28"
                  height="28"
                  rx="14"
                  transform="rotate(-90 179 31)"
                  fill={scrollIndex<5&&scrollIndex>1?'currentColor':'white'}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="178"
                  y="32"
                  width="30"
                  height="30"
                  rx="15"
                  transform="rotate(-90 178 32)"
                  stroke="#F1F3F6"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M190.502 22.9338C190.349 22.934 190.197 22.9039 190.055 22.8452C189.914 22.7865 189.785 22.7005 189.677 22.592L185.197 18.112C185.086 18.0044 184.997 17.8756 184.936 17.7333C184.874 17.591 184.842 17.4379 184.841 17.283C184.84 17.1281 184.869 16.9744 184.928 16.831C184.986 16.6877 185.073 16.5574 185.183 16.4479C185.292 16.3383 185.422 16.2517 185.566 16.193C185.709 16.1344 185.863 16.1049 186.018 16.1062C186.173 16.1076 186.326 16.1397 186.468 16.2009C186.61 16.262 186.739 16.3509 186.847 16.4623L190.502 20.1175L199.197 11.4223C199.417 11.2098 199.712 11.0922 200.018 11.0949C200.324 11.0975 200.616 11.2202 200.832 11.4365C201.049 11.6529 201.171 11.9455 201.174 12.2514C201.177 12.5573 201.059 12.852 200.847 13.072L191.327 22.592C191.218 22.7005 191.09 22.7865 190.948 22.8452C190.807 22.9039 190.655 22.934 190.502 22.9338Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter3_d_363_496)">
                <rect
                  x="267"
                  y="31"
                  width="28"
                  height="28"
                  rx="14"
                  transform="rotate(-90 267 31)"
                  fill={scrollIndex<5&&scrollIndex>2?'currentColor':'white'}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="266"
                  y="32"
                  width="30"
                  height="30"
                  rx="15"
                  transform="rotate(-90 266 32)"
                  stroke="#F1F3F6"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M278.502 22.9338C278.349 22.934 278.197 22.9039 278.055 22.8452C277.914 22.7865 277.785 22.7005 277.677 22.592L273.197 18.112C273.086 18.0044 272.997 17.8756 272.936 17.7333C272.874 17.591 272.842 17.4379 272.841 17.283C272.84 17.1281 272.869 16.9744 272.928 16.831C272.986 16.6877 273.073 16.5574 273.183 16.4479C273.292 16.3383 273.422 16.2517 273.566 16.193C273.709 16.1344 273.863 16.1049 274.018 16.1062C274.173 16.1076 274.326 16.1397 274.468 16.2009C274.61 16.262 274.739 16.3509 274.847 16.4623L278.502 20.1175L287.197 11.4223C287.417 11.2098 287.712 11.0922 288.018 11.0949C288.324 11.0975 288.616 11.2202 288.832 11.4365C289.049 11.6529 289.171 11.9455 289.174 12.2514C289.177 12.5573 289.059 12.852 288.847 13.072L279.327 22.592C279.218 22.7005 279.09 22.7865 278.948 22.8452C278.807 22.9039 278.655 22.934 278.502 22.9338Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter4_d_363_496)">
                <rect
                  x="355"
                  y="31"
                  width="28"
                  height="28"
                  rx="14"
                  transform="rotate(-90 355 31)"
                  fill={scrollIndex<5&&scrollIndex>3?'currentColor':'white'}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="354"
                  y="32"
                  width="30"
                  height="30"
                  rx="15"
                  transform="rotate(-90 354 32)"
                  stroke="#F1F3F6"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M366.502 22.9338C366.349 22.934 366.197 22.9039 366.055 22.8452C365.914 22.7865 365.785 22.7005 365.677 22.592L361.197 18.112C361.086 18.0044 360.997 17.8756 360.936 17.7333C360.874 17.591 360.842 17.4379 360.841 17.283C360.84 17.1281 360.869 16.9744 360.928 16.831C360.986 16.6877 361.073 16.5574 361.183 16.4479C361.292 16.3383 361.422 16.2517 361.566 16.193C361.709 16.1344 361.863 16.1049 362.018 16.1062C362.173 16.1076 362.326 16.1397 362.468 16.2009C362.61 16.262 362.739 16.3509 362.847 16.4623L366.502 20.1175L375.197 11.4223C375.417 11.2098 375.712 11.0922 376.018 11.0949C376.324 11.0975 376.616 11.2202 376.832 11.4365C377.049 11.6529 377.171 11.9455 377.174 12.2514C377.177 12.5573 377.059 12.852 376.847 13.072L367.327 22.592C367.218 22.7005 367.09 22.7865 366.948 22.8452C366.807 22.9039 366.655 22.934 366.502 22.9338Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_363_496"
                  x="0"
                  y="0"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_363_496"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_363_496"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_363_496"
                  x="88"
                  y="0"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_363_496"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_363_496"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_363_496"
                  x="176"
                  y="0"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_363_496"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_363_496"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_363_496"
                  x="264"
                  y="0"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_363_496"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_363_496"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_363_496"
                  x="352"
                  y="0"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_363_496"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_363_496"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div
            className={`timeline md:w-7 lg:w-auto  h-5 rounded-full   items-center justify-center mb-12 hidden md:flex`}
          >
            <svg
              className="text-[#1361F5] "
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="386"
              viewBox="0 0 34 386"
              fill="none"
            >
              <rect
                x="14"
                y="10"
                width="6"
                height="97"
                rx="3"
                fill={scrollIndex < 5 ? "currentColor" : "#dddddd"}
                style={{
                  transition: "fill 2s ease",
                }}
              />
              <rect
                x="14"
                y="107"
                width="6"
                height="86"
                rx="3"
                fill={
                  scrollIndex < 5 && scrollIndex > 0
                    ? "currentColor"
                    : "#dddddd"
                }
                style={{
                  transition: "fill 2s ease",
                }}
              />
              <rect
                x="14"
                y="193"
                width="6"
                height="87"
                rx="3"
                fill={
                  scrollIndex < 5 && scrollIndex > 1
                    ? "currentColor"
                    : "#dddddd"
                }
                style={{
                  transition: "fill 2s ease",
                }}
              />
              <rect
                x="14"
                y="280"
                width="6"
                height="95"
                rx="3"
                fill={
                  scrollIndex < 5 && scrollIndex > 2
                    ? "currentColor"
                    : "#dddddd"
                }
                style={{
                  transition: "fill 2s ease",
                }}
              />
              <g filter="url(#filter0_d_341_323)">
                <rect
                  x="3"
                  y="3"
                  width="28"
                  height="28"
                  rx="14"
                  fill="currentColor"
                  shape-rendering="crispEdges"
                />
                <rect
                  x="2"
                  y="2"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="white"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M14.4803 22.9267C14.3271 22.9268 14.1754 22.8967 14.0338 22.8381C13.8923 22.7794 13.7637 22.6933 13.6555 22.5848L9.17551 18.1048C9.06408 17.9972 8.9752 17.8685 8.91405 17.7261C8.85291 17.5838 8.82073 17.4307 8.81938 17.2758C8.81803 17.1209 8.84755 16.9673 8.90621 16.8239C8.96487 16.6805 9.0515 16.5503 9.16104 16.4407C9.27059 16.3312 9.40085 16.2445 9.54423 16.1859C9.6876 16.1272 9.84123 16.0977 9.99614 16.099C10.151 16.1004 10.3041 16.1326 10.4465 16.1937C10.5888 16.2549 10.7176 16.3437 10.8252 16.4552L14.4803 20.1103L23.1755 11.4152C23.3955 11.2027 23.6902 11.0851 23.9961 11.0877C24.302 11.0904 24.5947 11.2131 24.811 11.4294C25.0273 11.6457 25.15 11.9383 25.1526 12.2442C25.1553 12.5501 25.0377 12.8448 24.8252 13.0648L15.3052 22.5848C15.197 22.6933 15.0684 22.7794 14.9269 22.8381C14.7853 22.8967 14.6336 22.9268 14.4803 22.9267Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter1_d_341_323)">
                <rect
                  x="3"
                  y="91"
                  width="28"
                  height="28"
                  rx="14"
                  fill={scrollIndex > 0 ? "currentColor" : "white"}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="2"
                  y="90"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="white"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M14.4803 110.927C14.3271 110.927 14.1754 110.897 14.0338 110.838C13.8923 110.779 13.7637 110.693 13.6555 110.585L9.17551 106.105C9.06408 105.997 8.9752 105.868 8.91405 105.726C8.85291 105.584 8.82073 105.431 8.81938 105.276C8.81803 105.121 8.84755 104.967 8.90621 104.824C8.96487 104.681 9.0515 104.55 9.16104 104.441C9.27059 104.331 9.40085 104.245 9.54423 104.186C9.6876 104.127 9.84123 104.098 9.99614 104.099C10.151 104.1 10.3041 104.133 10.4465 104.194C10.5888 104.255 10.7176 104.344 10.8252 104.455L14.4803 108.11L23.1755 99.4152C23.3955 99.2026 23.6902 99.0851 23.9961 99.0877C24.302 99.0904 24.5947 99.2131 24.811 99.4294C25.0273 99.6457 25.15 99.9383 25.1526 100.244C25.1553 100.55 25.0377 100.845 24.8252 101.065L15.3052 110.585C15.197 110.693 15.0684 110.779 14.9269 110.838C14.7853 110.897 14.6336 110.927 14.4803 110.927Z"
                  fill={scrollIndex > 0 ? "white" : "none"}
                />
              </g>
              <g filter="url(#filter2_d_341_323)">
                <rect
                  x="3"
                  y="179"
                  width="28"
                  height="28"
                  rx="14"
                  fill={scrollIndex > 1 ? "currentColor" : "white"}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="2"
                  y="178"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="white"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M14.4803 198.927C14.3271 198.927 14.1754 198.897 14.0338 198.838C13.8923 198.779 13.7637 198.693 13.6555 198.585L9.17551 194.105C9.06408 193.997 8.9752 193.868 8.91405 193.726C8.85291 193.584 8.82073 193.431 8.81938 193.276C8.81803 193.121 8.84755 192.967 8.90621 192.824C8.96487 192.681 9.0515 192.55 9.16104 192.441C9.27059 192.331 9.40085 192.245 9.54423 192.186C9.6876 192.127 9.84123 192.098 9.99614 192.099C10.151 192.1 10.3041 192.133 10.4465 192.194C10.5888 192.255 10.7176 192.344 10.8252 192.455L14.4803 196.11L23.1755 187.415C23.3955 187.203 23.6902 187.085 23.9961 187.088C24.302 187.09 24.5947 187.213 24.811 187.429C25.0273 187.646 25.15 187.938 25.1526 188.244C25.1553 188.55 25.0377 188.845 24.8252 189.065L15.3052 198.585C15.197 198.693 15.0684 198.779 14.9269 198.838C14.7853 198.897 14.6336 198.927 14.4803 198.927Z"
                  fill={scrollIndex > 1 ? "white" : "none"}
                />
              </g>
              <g filter="url(#filter3_d_341_323)">
                <rect
                  x="3"
                  y="267"
                  width="28"
                  height="28"
                  rx="14"
                  fill={scrollIndex > 2 ? "currentColor" : "white"}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="2"
                  y="266"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="white"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M14.4803 286.927C14.3271 286.927 14.1754 286.897 14.0338 286.838C13.8923 286.779 13.7637 286.693 13.6555 286.585L9.17551 282.105C9.06408 281.997 8.9752 281.868 8.91405 281.726C8.85291 281.584 8.82073 281.431 8.81938 281.276C8.81803 281.121 8.84755 280.967 8.90621 280.824C8.96487 280.681 9.0515 280.55 9.16104 280.441C9.27059 280.331 9.40085 280.245 9.54423 280.186C9.6876 280.127 9.84123 280.098 9.99614 280.099C10.151 280.1 10.3041 280.133 10.4465 280.194C10.5888 280.255 10.7176 280.344 10.8252 280.455L14.4803 284.11L23.1755 275.415C23.3955 275.203 23.6902 275.085 23.9961 275.088C24.302 275.09 24.5947 275.213 24.811 275.429C25.0273 275.646 25.15 275.938 25.1526 276.244C25.1553 276.55 25.0377 276.845 24.8252 277.065L15.3052 286.585C15.197 286.693 15.0684 286.779 14.9269 286.838C14.7853 286.897 14.6336 286.927 14.4803 286.927Z"
                  fill={scrollIndex > 2 ? "white" : "none"}
                />
              </g>
              <g filter="url(#filter4_d_341_323)">
                <rect
                  x="3"
                  y="355"
                  width="28"
                  height="28"
                  rx="14"
                  fill={scrollIndex > 3 ? "currentColor" : "white"}
                  shape-rendering="crispEdges"
                  style={{
                    transition: "fill 2s ease",
                  }}
                />
                <rect
                  x="2"
                  y="354"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="white"
                  stroke-width="2"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M14.4803 374.927C14.3271 374.927 14.1754 374.897 14.0338 374.838C13.8923 374.779 13.7637 374.693 13.6555 374.585L9.17551 370.105C9.06408 369.997 8.9752 369.868 8.91405 369.726C8.85291 369.584 8.82073 369.431 8.81938 369.276C8.81803 369.121 8.84755 368.967 8.90621 368.824C8.96487 368.681 9.0515 368.55 9.16104 368.441C9.27059 368.331 9.40085 368.245 9.54423 368.186C9.6876 368.127 9.84123 368.098 9.99614 368.099C10.151 368.1 10.3041 368.133 10.4465 368.194C10.5888 368.255 10.7176 368.344 10.8252 368.455L14.4803 372.11L23.1755 363.415C23.3955 363.203 23.6902 363.085 23.9961 363.088C24.302 363.09 24.5947 363.213 24.811 363.429C25.0273 363.646 25.15 363.938 25.1526 364.244C25.1553 364.55 25.0377 364.845 24.8252 365.065L15.3052 374.585C15.197 374.693 15.0684 374.779 14.9269 374.838C14.7853 374.897 14.6336 374.927 14.4803 374.927Z"
                  fill={scrollIndex > 3 ? "white" : "none"}
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_341_323"
                  x="0"
                  y="0"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_341_323"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_341_323"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_341_323"
                  x="0"
                  y="88"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_341_323"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_341_323"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_341_323"
                  x="0"
                  y="176"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_341_323"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_341_323"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_341_323"
                  x="0"
                  y="264"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_341_323"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_341_323"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_341_323"
                  x="0"
                  y="352"
                  width="34"
                  height="34"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_341_323"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_341_323"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          {scrollIndex === 0 && (
            <div className=" sm:w-1/3 w-fit image h-20 land:h-auto">
              <div className="slider-content">
                <img src={timeline1} alt="" />
              </div>
            </div>
          )}
          {scrollIndex === 1 && (
            <div className=" sm:w-1/3 w-fit image h-20 land:h-auto">
              <div className="slider-content">
                <img src={timeline2} alt="" />
              </div>
            </div>
          )}
          {scrollIndex === 2 && (
            <div className=" sm:w-1/3 w-fit image h-20 land:h-auto">
              <div className="slider-content">
                <img src={timeline3} alt="" />
              </div>
            </div>
          )}
          {scrollIndex === 3 && (
            <div className=" sm:w-1/3 w-fit image h-20 land:h-auto">
              <div className="slider-content">
                <img src={timeline4} alt="" />
              </div>
            </div>
          )}
          {scrollIndex === 4 && (
            <div className=" sm:w-1/3 w-fit image h-20 land:h-auto">
              <div className="slider-content">
                <img src={timeline5} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
