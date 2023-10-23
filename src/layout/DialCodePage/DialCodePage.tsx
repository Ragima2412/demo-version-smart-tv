import React from "react";
import HeroImageBg from "../../components/HeroImageBg/HeroImageBg";
import Sidebar from "../../components/Sidebar/Sidebar";
import CloseBtn from "../../components/CloseBtn/CloseBtn";
import ScanCode from "../../components/ScanCode/ScanCode";
import "./DialCodePage.scss";

const DialCodePage = () => {
  return (
    <div className="dialcode-page">
      <Sidebar />
      <HeroImageBg />
      <CloseBtn />
      <ScanCode />
    </div>
  );
};
export default DialCodePage;
