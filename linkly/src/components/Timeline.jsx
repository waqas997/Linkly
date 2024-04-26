import React, { useEffect, useState } from "react";
import timeline3 from "../images/timeline3.png";
import timeline1 from "../images/timeline1.png";
import timeline2 from "../images/timeline2.png";
import timeline4 from "../images/timeline4.png";
import timeline5 from "../images/timeline5.png";

export default function Timeline() {
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    setTimeout(function () {
      if (scrollIndex < 4 || scrollIndex === 0) {
        setScrollIndex(scrollIndex + 1)
      } else if (scrollIndex === 4) {
        setScrollIndex(0)
      }
    }, 3000)
  }, [scrollIndex])


  return (
    <div className="bg-gradient-to-b from-purple-100 to-blue-200 py-12 h-[80vh] ">
      <div className="main-container">
        <div className="text-center">
          <h2 className="inter600 text-[50px] mb-2">How Linkly Works</h2>
          <p className="inter400 text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-evenly mt-16 ">
          {scrollIndex === 0 &&
            <div className="w-full sm:w-1/3">
              <h2 className="inter600 land:text-[50px] text-[#1d1d1d]">
                Create Tracking Links
              </h2>
              <p>
                Take any existing link you use, and paste it into Linkly.
                Linkly will give you a unique, short tracking link to use in its place.
              </p>
            </div>
          }
          {scrollIndex === 1 &&

            <div className="w-full sm:w-1/3">
              <h2 className="inter600 land:text-[50px] text-[#1d1d1d]">
                Use your Domain to Brand your links
              </h2>
              <p className="inter400 land:text-[16px] text-[#6d6d6d]">
                Attach your domain so your tracking short links have your branding.
              </p>
            </div>}
          {scrollIndex === 2 &&
            <div className="w-full sm:w-1/3">
              <h2 className="inter600 land:text-[50px] text-[#1d1d1d]">
                Redirect by Country or Device
              </h2>
              <p className="inter400 land:text-[16px] text-[#6d6d6d]">
                Redirect users to URLs based on their country or device, or use a link rotator. Change the destination even after the link is created.
              </p>
            </div>
          }
          {scrollIndex === 3 &&
            <div className="w-full sm:w-1/3">
              <h2 className="inter600 land:text-[50px] text-[#1d1d1d]">
                Attach Retargeting Pixels
              </h2>
              <p className="inter400 land:text-[16px] text-[#6d6d6d]">
                Build custom audiences on Google and Meta from clickers on your short links.          </p>
            </div>
          }
          {scrollIndex === 4 &&
            <div className="w-full sm:w-1/3">
              <h2 className="inter600 land:text-[50px] text-[#1d1d1d]">
                Invite your Team Members to Collaborate
              </h2>
              <p className="inter400 land:text-[16px] text-[#6d6d6d]">
                Invite as many users as you need to your account. Users are always free to add.         </p>
            </div>
          }


          <div

            className={`timeline w-5 h-5 rounded-full  flex items-center justify-center mb-12 `}

          >
            <svg className="text-[#1361F5]" xmlns="http://www.w3.org/2000/svg" width="34" height="383" viewBox="0 0 34 383" fill="none">
              <rect x="14" y="10" width="6" height="97" rx="3" fill={scrollIndex < 5 ? 'currentColor' : '#DDDDDD'} />
              <rect x="14" y="107" width="6" height="86" rx="3" fill={scrollIndex < 5 && scrollIndex > 0 ? 'currentColor' : '#dddddd'} />
              <rect x="14" y="193" width="6" height="87" rx="3" fill={scrollIndex < 5 && scrollIndex > 1 ? 'currentColor' : '#dddddd'} />
              <rect x="14" y="280" width="6" height="95" rx="3" fill={scrollIndex < 5 && scrollIndex > 2 ? 'currentColor' : '#dddddd'} />
              <g filter="url(#filter0_d_41_27)">
                <rect x="3" y="3" width="28" height="28" rx="14" fill={scrollIndex < 5 ? 'currentColor' : 'white'} shape-rendering="crispEdges" />
                <rect x="2" y="2" width="30" height="30" rx="15" stroke="#F1F3F6" stroke-width="2" shape-rendering="crispEdges" />
                <path d="M14.48 22.9266C14.3268 22.9268 14.175 22.8967 14.0335 22.838C13.8919 22.7794 13.7634 22.6933 13.6552 22.5848L9.17517 18.1048C9.06374 17.9972 8.97486 17.8685 8.91372 17.7261C8.85257 17.5838 8.82039 17.4307 8.81904 17.2758C8.8177 17.1209 8.84721 16.9672 8.90588 16.8239C8.96454 16.6805 9.05117 16.5502 9.16071 16.4407C9.27025 16.3311 9.40051 16.2445 9.54389 16.1859C9.68727 16.1272 9.84089 16.0977 9.9958 16.099C10.1507 16.1004 10.3038 16.1325 10.4461 16.1937C10.5885 16.2548 10.7172 16.3437 10.8248 16.4551L14.48 20.1103L23.1752 11.4151C23.3952 11.2026 23.6899 11.085 23.9958 11.0877C24.3017 11.0903 24.5943 11.213 24.8106 11.4294C25.0269 11.6457 25.1496 11.9383 25.1523 12.2442C25.1549 12.5501 25.0374 12.8448 24.8248 13.0648L15.3048 22.5848C15.1966 22.6933 15.0681 22.7794 14.9265 22.838C14.785 22.8967 14.6332 22.9268 14.48 22.9266Z" fill={scrollIndex < 5 ? 'white' : 'none'} />
              </g>
              <g filter="url(#filter1_d_41_27)">
                <rect x="3" y="91" width="28" height="28" rx="14" fill={scrollIndex < 5 && scrollIndex > 0 ? 'currentColor' : 'white'} shape-rendering="crispEdges" />
                <rect x="2" y="90" width="30" height="30" rx="15" stroke="#F1F3F6" stroke-width="2" shape-rendering="crispEdges" />
                <path d="M14.48 110.927C14.3268 110.927 14.175 110.897 14.0335 110.838C13.8919 110.779 13.7634 110.693 13.6552 110.585L9.17517 106.105C9.06374 105.997 8.97486 105.868 8.91372 105.726C8.85257 105.584 8.82039 105.431 8.81904 105.276C8.8177 105.121 8.84721 104.967 8.90588 104.824C8.96454 104.68 9.05117 104.55 9.16071 104.441C9.27025 104.331 9.40051 104.245 9.54389 104.186C9.68727 104.127 9.84089 104.098 9.9958 104.099C10.1507 104.1 10.3038 104.133 10.4461 104.194C10.5885 104.255 10.7172 104.344 10.8248 104.455L14.48 108.11L23.1752 99.4151C23.3952 99.2026 23.6899 99.085 23.9958 99.0877C24.3017 99.0903 24.5943 99.213 24.8106 99.4294C25.0269 99.6457 25.1496 99.9383 25.1523 100.244C25.1549 100.55 25.0374 100.845 24.8248 101.065L15.3048 110.585C15.1966 110.693 15.0681 110.779 14.9265 110.838C14.785 110.897 14.6332 110.927 14.48 110.927Z" fill={scrollIndex < 5 && scrollIndex > 0 ? 'white' : 'none'} />
              </g>
              <g filter="url(#filter2_d_41_27)">
                <rect x="3" y="179" width="28" height="28" rx="14" fill={scrollIndex < 5 && scrollIndex > 1 ? 'currentColor' : 'white'} shape-rendering="crispEdges" />
                <rect x="2" y="178" width="30" height="30" rx="15" stroke="#F1F3F6" stroke-width="2" shape-rendering="crispEdges" />
                <path d="M14.48 198.927C14.3268 198.927 14.175 198.897 14.0335 198.838C13.8919 198.779 13.7634 198.693 13.6552 198.585L9.17517 194.105C9.06374 193.997 8.97486 193.868 8.91372 193.726C8.85257 193.584 8.82039 193.431 8.81904 193.276C8.8177 193.121 8.84721 192.967 8.90588 192.824C8.96454 192.68 9.05117 192.55 9.16071 192.441C9.27025 192.331 9.40051 192.245 9.54389 192.186C9.68727 192.127 9.84089 192.098 9.9958 192.099C10.1507 192.1 10.3038 192.133 10.4461 192.194C10.5885 192.255 10.7172 192.344 10.8248 192.455L14.48 196.11L23.1752 187.415C23.3952 187.203 23.6899 187.085 23.9958 187.088C24.3017 187.09 24.5943 187.213 24.8106 187.429C25.0269 187.646 25.1496 187.938 25.1523 188.244C25.1549 188.55 25.0374 188.845 24.8248 189.065L15.3048 198.585C15.1966 198.693 15.0681 198.779 14.9265 198.838C14.785 198.897 14.6332 198.927 14.48 198.927Z" fill={scrollIndex < 5 && scrollIndex > 1 ? 'white' : 'none'} />
              </g>
              <g filter="url(#filter3_d_41_27)">
                <rect x="3" y="279" width="28" height="28" rx="14" fill={scrollIndex < 5 && scrollIndex > 2 ? 'currentColor' : 'white'} shape-rendering="crispEdges" />
                <rect x="2" y="278" width="30" height="30" rx="15" stroke="#F1F3F6" stroke-width="2" shape-rendering="crispEdges" />
                <path d="M14.48 298.927C14.3268 298.927 14.175 298.897 14.0335 298.838C13.8919 298.779 13.7634 298.693 13.6552 298.585L9.17517 294.105C9.06374 293.997 8.97486 293.868 8.91372 293.726C8.85257 293.584 8.82039 293.431 8.81904 293.276C8.8177 293.121 8.84721 292.967 8.90588 292.824C8.96454 292.68 9.05117 292.55 9.16071 292.441C9.27025 292.331 9.40051 292.245 9.54389 292.186C9.68727 292.127 9.84089 292.098 9.9958 292.099C10.1507 292.1 10.3038 292.133 10.4461 292.194C10.5885 292.255 10.7172 292.344 10.8248 292.455L14.48 296.11L23.1752 287.415C23.3952 287.203 23.6899 287.085 23.9958 287.088C24.3017 287.09 24.5943 287.213 24.8106 287.429C25.0269 287.646 25.1496 287.938 25.1523 288.244C25.1549 288.55 25.0374 288.845 24.8248 289.065L15.3048 298.585C15.1966 298.693 15.0681 298.779 14.9265 298.838C14.785 298.897 14.6332 298.927 14.48 298.927Z" fill={scrollIndex < 5 && scrollIndex > 2 ? 'white' : 'none'} />
              </g>
              <g filter="url(#filter4_d_41_27)">
                <rect x="3" y="376" width="28" height="28" rx="14" fill={scrollIndex === 4 ? 'currentColor' : 'white'} shape-rendering="crispEdges" />
                <rect x="2" y="375" width="30" height="30" rx="15" stroke="#F1F3F6" stroke-width="2" shape-rendering="crispEdges" />
                <path d="M14.48 298.927C14.3268 298.927 14.175 298.897 14.0335 298.838C13.8919 298.779 13.7634 298.693 13.6552 298.585L9.17517 294.105C9.06374 293.997 8.97486 293.868 8.91372 293.726C8.85257 293.584 8.82039 293.431 8.81904 293.276C8.8177 293.121 8.84721 292.967 8.90588 292.824C8.96454 292.68 9.05117 292.55 9.16071 292.441C9.27025 292.331 9.40051 292.245 9.54389 292.186C9.68727 292.127 9.84089 292.098 9.9958 292.099C10.1507 292.1 10.3038 292.133 10.4461 292.194C10.5885 292.255 10.7172 292.344 10.8248 292.455L14.48 296.11L23.1752 287.415C23.3952 287.203 23.6899 287.085 23.9958 287.088C24.3017 287.09 24.5943 287.213 24.8106 287.429C25.0269 287.646 25.1496 287.938 25.1523 288.244C25.1549 288.55 25.0374 288.845 24.8248 289.065L15.3048 298.585C15.1966 298.693 15.0681 298.779 14.9265 298.838C14.785 298.897 14.6332 298.927 14.48 298.927Z" fill={scrollIndex < 5 && scrollIndex > 2 ? 'white' : 'none'} />
              </g>
              <defs>
                <filter id="filter0_d_41_27" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_27" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_27" result="shape" />
                </filter>
                <filter id="filter1_d_41_27" x="0" y="88" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_27" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_27" result="shape" />
                </filter>
                <filter id="filter2_d_41_27" x="0" y="176" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_27" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_27" result="shape" />
                </filter>
                <filter id="filter3_d_41_27" x="0" y="274" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_27" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_27" result="shape" />
                </filter>
                <filter id="filter4_d_41_27" x="0" y="374" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_27" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_27" result="shape" />
                </filter>
              </defs>
            </svg>


          </div>
          {scrollIndex === 0 &&
            <div className=" sm:w-1/3 w-fit">
              <div className="slider-content">
                <img src={timeline1} alt="" />
              </div>
            </div>
          }
          {scrollIndex === 1 &&
            <div className=" sm:w-1/3 w-fit">
              <div className="slider-content">
                <img src={timeline2} alt="" />
              </div>
            </div>
          }
          {scrollIndex === 2 &&
            <div className=" sm:w-1/3 w-fit">
              <div className="slider-content">
                <img src={timeline3} alt="" />
              </div>
            </div>
          }
          {scrollIndex === 3 &&
            <div className=" sm:w-1/3 w-fit">
              <div className="slider-content">
                <img src={timeline4} alt="" />
              </div>
            </div>
          }
          {scrollIndex === 4 &&
            <div className=" sm:w-1/3 w-fit">
              <div className="slider-content">
                <img src={timeline5} alt="" />
              </div>
            </div>
          }

        </div>

      </div>
    </div>
  );
}
