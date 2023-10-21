import React, { useEffect, useLayoutEffect, useState } from "react";
import "./HomePage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {

const [isVisible, setIsVisible] = useState<boolean>(false);


  useLayoutEffect(() => {
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
