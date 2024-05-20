import React, { useState } from "react";
import Navbar from "../components/Navbar";
import search from "../images/Search.png";
import wave from "../images/waveline.png";
import circle from "../images/circle.png";
import shadow1 from "../images/shdaow1.png";
import Footer from "../components/Footer";
import shadow2 from "../images/shadow2.png";
import shadow3 from "../images/shadow3.png";
import shadow4 from "../images/shadow4.png";
import { useNavigate, useLocation } from "react-router-dom";
// import {supportinner} from "./SupportInner";

export default function Support() {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (tabIndex) => () => {
    setActiveTab(tabIndex);
    navigate(`/supportinner?activeTab=${tabIndex}`);
  };

  const GettingStart = [
    "Adding a Custom Domain",
    "Google Chrome Extension",
    "Creating tracking links",
    "Using UMT Tags",
    "Delete a Link",
    "Disable a Link",
    "Custom Social Media Previews",
    "Link Cloaking / URL Cloaking",
    "Link Disguiser",
    "Excluding IP Addresses",
    "HTTP Status Code",
    "About the Free Plan",
    "Managing Links without Folders",
    "About Robot Clicks",
    "QR Codes",
  ];
  const Addons = [
    "Google Sheets",
    "Zapier",
    "Importing Bitly Links",
    "Export Data as CSV",
    "API Access",
    "Bulk Link Import",
  ];
  const Shortening = ["Mailto Links", "SMS links", "Call links"];
  const Tool = ["Automatic (onsite) Link Replacement", "Linkify text"];
  const Redirects = [
    "Create App Store redirects",
    "Create Country redirects",
    "Use a link rotator",
    "Hiding referrers",
    "Podcast redirects",
    "Forwarding URL Query Parameters",
    "Fixing slow redirects",
    "Expiring Links",
  ];
  const Tracking = [
    "Using Meta / X / Google Pixels",
    "Add Meta Pixel to Links",
    "Adding Twitter Tailored Audience Tag to Links",
    "Facebook/Meta Pixel & Amazon Retargeting",
    "Google Tag Manager",
  ];

  const Traffic = [
    "Links Blocked by Spam Filters",
    "Inflated Click Figure",
    "ISP Lookup",
    "Search Bots",
    "Cloud Providers",
    "Links Blocked by Facebook/Instagram/Meta",
  ];
  const Domain = [
    "Add a custom domain",
    "Using Namecheap",
    "Default Domain Redirect",
  ];
  const Miscellaneous = [
    "Feature Request",
    "Anti-Spam Policy",
    "Release Notes",
  ];

  return (
    <div
      className="relative z-20"
      // style={{
      //     backgroundImage: `url('${shadow1}')`,
      //     backgroundPosition: "left",
      //     backgroundSize: "38% 200%",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <img
        className="absolute -left-96 -top-96 z-0 h-fit"
        src={shadow1}
        alt=""
      />

      <img className="absolute left-0 -top-52 z-0" src={wave} alt="" />
      <img className="absolute right-1 z-0" src={circle} alt="" />
      <Navbar />
      <div className="main-container relative z-30">
        <div className="flex items-center flex-col sm:flex-row mt-8 text-center md:text-left land:mt-20">
          <div className="land:w-1/2">
            <h2 className="mb-4 inter700 land:text-[50px] md:text-[38px] lg:text-[70px] leading-none">
              How can we help?
            </h2>
            <p className="inter400 mb-5 text-[12px]  land:text-[18px] md:w-[88%] land:w-[78%]">
              Find answers by searching, or see our popular guides below. Need
              extra help? Ask our support in the chat widget.
            </p>
            <div className="bg-white  w-80 px-3 py-2 rounded-[10px] flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#595C5F"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                className="outline-none"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          {/* <div className="absolute "><img src={shadow} alt="" className="w" /></div> */}

          <div className="land:w-1/2 mt-5 ">
            <div className="">
              <img className="mx-auto" src={search} alt="" />
            </div>
          </div>
        </div>
        {/* section */}
        <div className=" mt-20">
          <h2 className="inter700 text-[20px] md:text-[30px] land:text-[40px] text-center">
            How Linkly Works
          </h2>
          <div className="w-8/12 m-auto mt-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-center md:text-left">
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6 cursor-pointer">
                  Create Tracking Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6 cursor-pointer">
                  Custom Domain
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6 cursor-pointer">
                  Link Cloaking
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6 cursor-pointer">
                  Create Expiring Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6 cursor-pointer">
                  Link Rotator
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6 cursor-pointer">
                  Shortening Mailto Links
                </p>
              </div>
            </div>
            <div className="w-[80%] m-auto my-12">
              <hr className="border-t-[3px]  " />
            </div>
            {/* section */}
          </div>
        </div>
        <div className="relative z-10">
          <img
            className="absolute -left-96 -top-96 z-0 h-fit"
            src={shadow2}
            alt=""
          />
          <h2 className="inter700 text-[20px] md:text-[30px] land:text-[40px] text-center">
            Topics
          </h2>
          <div className="w-12/12 m-auto mt-8">
            <div className="flex flex-col md:flex-row justify-center md:gap-96">
              <div className="md:ml-auto  text-center md:text-left relative">
                {/* <img
                  className="absolute bottom-0 left-0 z-0"
                  src={shadow4}
                  alt=""
                /> */}
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6">
                  Getting Started
                </h2>
                {GettingStart.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}

                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Addons & Integrations
                </h2>
                {Addons.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
              
               
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Shortening Unusual Links
                </h2>
                {Shortening.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
                
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Tools for Publishers
                </h2>
                {Tool.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
                
              </div>
              <div className="text-center md:text-left md:mr-[19px] relative ">
                {/* <img className="absolute right-0 z-0" src={shadow3} alt="" /> */}
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 ">
                  Redirects
                </h2>
                {Redirects.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
                
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Tracking Pixels
                </h2>
                {Tracking.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
                
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Traffic Quality
                </h2>
                {Traffic.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
                
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Domains
                </h2>
                {Domain.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
                
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Miscellaneous
                </h2>
                {Miscellaneous.map((item, index) => (
                  <p
                    className={`inter400 text-[12px] land:text-[18px] ${
                      activeTab === index ? "text-blue-600" : "text-[#307EF3]"
                    } underline underline-offset-4 mb-6 cursor-pointer`}
                    onClick={handleNavigation(index)}
                  >
                    {item}
                  </p>
                ))}
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
