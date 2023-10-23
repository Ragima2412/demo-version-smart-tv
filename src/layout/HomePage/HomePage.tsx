import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Banner from "../../components/Banner/Banner";
import "./HomePage.scss";

const HomePage = () => {

const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
        setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="home-page">
      <VideoPlayer />
      <Banner isVisible={isVisible}/>
    </div>
  );
};
export default HomePage;
