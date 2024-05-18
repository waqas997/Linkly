import React from "react";
import Navbar from "../components/Navbar";
import search from "../images/Search.png";
import wave from "../images/waveline.png";
import circle from "../images/circle.png";
import shadow1 from "../images/shdaow1.png";
import Footer from "../components/Footer";

export default function Support() {
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
            <p className="inter400 mb-5 text-[12px] land:text-[12px] land:text-[18px] md:w-[88%] land:w-[78%]">
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
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Create Tracking Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Custom Domain
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Link Cloaking
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Create Expiring Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Link Rotator
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
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
        <div className=" ">
          <h2 className="inter700 text-[20px] md:text-[30px] land:text-[40px] text-center">
            Topics
          </h2>
          <div className="w-12/12 m-auto mt-8">
            <div className="flex flex-col md:flex-row justify-center md:gap-96">
              <div className="md:ml-auto  text-center md:text-left">
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6">
                  Getting Started
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Adding a Custom Domain
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Google Chrome Extension
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Creating tracking links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Using UMT Tags
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Delete a Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Disable a Link
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Custome Social Media Previews
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Link Cloaking / URL Cloaking
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Link Disguiser
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Excluding IP Addresses
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  HTTP Status Code
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  About the Free Plan
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Managing Links without Folders
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  About Robot Clicks
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  QR Codes
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Addons & Integrations
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Google Sheets
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Zapier
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Google Chrome Extension
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Importing Bitly Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Export Data as CSV
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  API Access
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Bulk Link Import
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Shortening Unusual Links
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Mailto Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  SMS links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Call links
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Tools for Publishers
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Automatic (onsite) Link Replacement
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Linkify text
                </p>
              </div>
              <div className="text-center md:text-left md:mr-[19px]">
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 ">
                  Redirects
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Create App Store redirects
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Create Country redirects
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Use a link rotator
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Hiding referrers
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Podcast redirects
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Forwarding URL Query Parameters
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Fixing slow redirects
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Expiring Links
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Tracking Pixels
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Using Meta / X / Google Pixels
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Add Meta Pixel to Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Adding Twitter Tailored Audience Tag to Links
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Facebook/Meta Pixel & Amazon Retargeting
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Google Tag Manager
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Traffic Quality
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Links Blocked by Spam Filters
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Inflated Click Figure
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  ISP Lookup
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Search Bots
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Cloud Providers
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Links Blocked by Facebook/Instagram/Meta
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Domains
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Add a custom domain
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Using Namecheap
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Default Domain Redirect
                </p>
                <h2 className="inter600 text-[16px] land:text-[22px] text-[#1d1d1d] mb-6 mt-8">
                  Miscellaneous
                </h2>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Feature Request
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Anti-Spam Policy
                </p>
                <p className="inter400 text-[12px] land:text-[18px] text-[#307EF3] underline underline-offset-4 mb-6">
                  Release Notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
