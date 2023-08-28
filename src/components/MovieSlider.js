import React, { useState } from "react";
import Card from "./Card";
import { styled } from "styled-components";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

export default React.memo(function MovieSlider({ data, title }) {

    const [controlVisibility, setControlVisibility] = useState(false)

  return (
    <Container
    controlVisibility = {controlVisibility}
    onMouseEnter={()=>setControlVisibility(true)}
    onMouseLeave={()=>setControlVisibility(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div className={`slider-action left ${!controlVisibility ? 'none' : ""}`}>
            <AiOutlineLeft/>
        </div>
        <div className="slider">
          {data.map((movies, index) => {
            return <Card movieData={movies} index={index} key={movies.id} />;
          })}
        </div>
        <div className={`slider-action right ${!controlVisibility ? 'none' : ""}`}>
            <AiOutlineRight/>
        </div>
      </div>
    </Container>
  );
});

const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 1rem 0;
  h1 {
    margin-left: 10px;
    font-size: 25px;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .wrapper {   
    .slider {
      display: flex;
      width: max-content;
      gap: 0.6rem;
      transform: translateX(0px);
      transition: 1s ease-in-out;
      margin-left: 10px;
    }
    .slider-action{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 99;
        height: 100%;
        top: 2rem;
        bottom: 0;
        width: 50px;
        transition: 1s ease-in-out;
        svg{
        font-size: 2rem;
        cursor: pointer;
        color: white;    
        }
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
    .none{
        display: none;
    }
  }
`;
