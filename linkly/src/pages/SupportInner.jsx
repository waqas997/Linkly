import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function SupportInner() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeTab = parseInt(params.get("activeTab"), 10);

  const [active, setActive] = useState(activeTab || 0);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

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

  
  const allSections = [
    ...GettingStart,
    ...Addons,
    ...Shortening,
    ...Tool,
    ...Redirects,
    ...Tracking,
    ...Traffic,
    ...Domain,
    ...Miscellaneous,
  ];

  const getSectionOffset = (section) => {
    switch (section) {
      case "GettingStart":
        return 0;
      case "Addons":
        return GettingStart.length;
      case "Shortening":
        return GettingStart.length + Addons.length;
      case "Tool":
        return GettingStart.length + Addons.length + Shortening.length;
      case "Redirects":
        return GettingStart.length + Addons.length + Shortening.length + Tool.length;
      case "Tracking":
        return (
          GettingStart.length + Addons.length + Shortening.length + Tool.length + Redirects.length
        );
      case "Traffic":
        return (
          GettingStart.length +
          Addons.length +
          Shortening.length +
          Tool.length +
          Redirects.length +
          Tracking.length
        );
      case "Domain":
        return (
          GettingStart.length +
          Addons.length +
          Shortening.length +
          Tool.length +
          Redirects.length +
          Tracking.length +
          Traffic.length
        );
      case "Miscellaneous":
        return (
          GettingStart.length +
          Addons.length +
          Shortening.length +
          Tool.length +
          Redirects.length +
          Tracking.length +
          Traffic.length +
          Domain.length
        );
      default:
        return 0;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between mt-20">
          <div className="w-12/12 md:w-2/12 ">
            <div className="bg-white w-62 px-3 py-2 rounded-[10px] flex items-center justify-between">
              <input className="outline-none" type="search" placeholder="Search" />
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
            </div>
            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Getting Started
            </h2>
            {GettingStart.map((item, index) => (
              <p
                key={`GettingStart-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("GettingStart") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("GettingStart") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Addons & Integrations
            </h2>
            {Addons.map((item, index) => (
              <p
                key={`Addons-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Addons") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Addons") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Shortening Unusual Links
            </h2>
            {Shortening.map((item, index) => (
              <p
                key={`Shortening-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Shortening") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Shortening") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Tools for Publishers
            </h2>
            {Tool.map((item, index) => (
              <p
                key={`Tool-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Tool") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Tool") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6">
              Redirects
            </h2>
            {Redirects.map((item, index) => (
              <p
                key={`Redirects-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Redirects") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Redirects") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Tracking Pixels
            </h2>
            {Tracking.map((item, index) => (
              <p
                key={`Tracking-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Tracking") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Tracking") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Traffic Quality
            </h2>
            {Traffic.map((item, index) => (
              <p
                key={`Traffic-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Traffic") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Traffic") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Domains
            </h2>
            {Domain.map((item, index) => (
              <p
                key={`Domain-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Domain") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Domain") + index)}
              >
                {item}
              </p>
            ))}

            <h2 className="inter600 text-[12px] land:text-[16px] text-[#313131] mb-6 mt-8">
              Miscellaneous
            </h2>
            {Miscellaneous.map((item, index) => (
              <p
                key={`Miscellaneous-${index}`}
                className={`inter400 text-[10px] land:text-[14px] cursor-pointer mb-6 ${
                  active === getSectionOffset("Miscellaneous") + index ? "text-[#307EF3] inter600" : ""
                }`}
                onClick={() => setActive(getSectionOffset("Miscellaneous") + index)}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="w-9/12 bg-white rounded-xl">
            {allSections.map((item, index) => (
              <div
                key={`content-${index}`}
                className={`tabs-content px-7 py-5 ${active === index ? "block" : "hidden"}`}
              >
                <h2 className="inter700 text-[20px] md:text-[30px] land:text-[40px]">
                  {item}
                </h2>
                <p className="text-[12px] land:text-[16px] text-[#313131] mt-4">
                  Content for {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
