import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PartnerSec from "../components/PartnerSec";
import Timeline from "../components/Timeline";
import Branded from "../components/Branded";
import home from "../images/Home.png";
import Tabs from "../components/Tabs";
import Reviews from "../components/Reviews";
import Platform from "../components/Platform";
import Footer from "../components/Footer";
import shadow from "../images/43.png";

export default function HomePage() {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: `url('${shadow}')`,
          backgroundPosition: "left",
          backgroundSize: "138% 141%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Banner />
      </div>
      <div className="">
        <PartnerSec />
      </div>
      <Timeline />
      <Branded />
      <Tabs />
      <Reviews />
      <Platform />
      <Footer />
    </div>
  );
}
