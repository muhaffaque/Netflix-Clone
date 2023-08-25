import React, { useState } from "react";
import TopNav from "../components/TopNav";
import styled from 'styled-components'

const Netflix = () => {
  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
  };
  console.log(isScroll);

  return (
    <HereContainer className="hero">
      <TopNav isScroll={isScroll}/>
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
        alt="hero-img"
      />
      
    </HereContainer>
  );
};

const HereContainer = styled.div`

`

export default Netflix;
