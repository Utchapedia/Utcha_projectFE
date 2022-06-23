import React from "react";
import styled, {useRef, useState} from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import "swiper/css";
import '../css/total.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "@mui/system";

const GalleryTrailer = ({moviePostId}) => {

  //console.log(moviePostId.galleryUrls[0])
return(
  <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
          {/* <div className="box" style={{ backgroundImage: `url(${moviePostId.galleryUrls[0]})` }}></div> */}

        <SwiperSlide>Slide 2</SwiperSlide>
        
      </Swiper>
    
  </>
     );


const Box = styled.div`
 width: 80px;
 height: 50px;
 background-color: #ddd
`;
const Gallery= styled.div`
  
`;








const GalleryTrailerWrap = styled.div`
`
const GalleryWrap=styled.div`
margin-bottom: 50px;

`
const GalleryTitle = styled.div`
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
`

const ImageWrap = styled.div`
margin-bottom: 50px`


const Div= styled.div`
margin: 0 10px;
`
const Img1 = styled.div`
width: 100%;
height: 110px;
background-size: cover;

`
const Img2 = styled.div`
width: 100%;
height: 110px;
background-size: cover;

`
const Img3 = styled.div`
width: 100%;
height: 110px;
background-size: cover;

`
const Img4 = styled.div`
width: 100%;
height: 110px;
background-size: cover;

`


const TrailerTitle = styled.div`
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;`

const TrailerWrap = styled.div`
margin-bottom: 50px
`

const Trailer1 = styled.div`
width: 200px;
height: 110px;
background-color: tomato;
`
const Trailer2 = styled.div`
width: 200px;
height: 110px;
background-color: skyblue;
`
}








export default GalleryTrailer;