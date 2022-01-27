import React from "react";
import HeaderBanner from "../Header/HeaderBanner";
import DownloadApp from "./DownloadApp";
import HowItWorks from "./HowItWorks";

export default function HomeScreen() {
  return (
    <>
      <HeaderBanner />
      <HowItWorks />
      <DownloadApp/>
    </>
  );
}
