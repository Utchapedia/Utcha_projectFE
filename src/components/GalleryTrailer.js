import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const GalleryTrailer = (props) => {
  const movie_list = useSelector((state) => state.movieList.list);

    const settings = {    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        
      };
    
return(
    <GalleryTrailerWrap>
        <GalleryWrap>    
        <GalleryTitle>
        갤러리
        </GalleryTitle>
        <div style={{ position: "relative", transform: "translate3d(0,0,0)" }}>
        <ImageWrap>
        <Slider {...settings} >
        
          <Div style={{display : 'block'}}>
            <Img1 style={{backgroundImage: `url(${movie_list.galleryUrls[0]})` }} />
          </Div>
          <Div>
          <Img2 style={{backgroundImage: `url(${movie_list.galleryUrls[1]})` }} />
          </Div>
          
          <Div>
          <Img3 style={{backgroundImage: `url(${movie_list.galleryUrls[2]})` }} />
          </Div>
          <Div>
          <Img4 style={{backgroundImage: `url(${movie_list.galleryUrls[3]})` }} />
          </Div>

        </Slider>
        </ImageWrap>
        </div>
        </GalleryWrap>
       

<hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "24px 20px 0 20px" }} />
        <TrailerWrap>    
        <TrailerTitle>
        동영상
        </TrailerTitle>
        <Slider {...settings}>
          <div className="img1">
            <Trailer1 >
              <Link to ="{movie_list.videoUrls[0]}">  1 </Link></Trailer1>
          </div>
          <div>
            <Trailer2>2</Trailer2>
          </div>

        </Slider>
        </TrailerWrap>



    </GalleryTrailerWrap>
    )
}



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









export default GalleryTrailer;