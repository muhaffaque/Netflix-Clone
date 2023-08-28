import React from 'react'
import { styled } from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start,end)=>{
        return movies.slice(start,end)
    }

  return (
    <SlideWrapper>
        <MovieSlider data = {getMoviesBetween(0,10)} title="Only on Netflix"/>
        <MovieSlider data = {getMoviesBetween(10,20)} title="Trending Now"/>
        <MovieSlider data = {getMoviesBetween(20,30)} title="Only on Netflix"/>
        <MovieSlider data = {getMoviesBetween(30,40)} title="Popular On Netflix"/>
        <MovieSlider data = {getMoviesBetween(40,50)} title="Romantic Movie"/>
        <MovieSlider data = {getMoviesBetween(50,60)} title="Epic"/>
        <MovieSlider data = {getMoviesBetween(60,70)} title="New Releases"/>
        <MovieSlider data = {getMoviesBetween(70,80)} title="Action Movies"/>

    </SlideWrapper>
  )
}

const SlideWrapper = styled.div`

`

export default SliderContainer
