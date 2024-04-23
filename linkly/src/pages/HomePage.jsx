import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PartnerSec from "../components/PartnerSec";
import Timeline from "../components/Timeline";
import Branded from "../components/Branded";

export default function HomePage() {
  return (
    <div className="">
      <div className="bg-gradient-to-tr to-pink-100 from-white h-screen">
        <Navbar />
        <Banner />
        
      </div>
      <div className="">
      <PartnerSec/>
      </div>
      <Timeline/>
      <Branded/>
    </div>
  );
}
