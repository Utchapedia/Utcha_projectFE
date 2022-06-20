import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const GalleryTrailer = (props) => {
    const settings = {    
        dots: true,
        infinite: true,
        // arrows: true,
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
        <Slider {...settings}>
            <div >
          <Img1>           
            </Img1>
          <Img2>            
            </Img2>
          <Img3>           
            </Img3>
          <Img4>            
            </Img4>
            </div>
        </Slider>
        </GalleryWrap>
<hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "24px 20px 0 20px" }} />
        <TrailerWrap>    
        <TrailerTitle>
        동영상
        </TrailerTitle>
        <Slider {...settings}>
          <TrailImg1>           
            </TrailImg1>
          <TrailImg2>            
            </TrailImg2>
         
        </Slider>
        </TrailerWrap>



    </GalleryTrailerWrap>
    )
}



const GalleryTrailerWrap = styled.div``
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


const Img1 = styled.div`
width: 50px;
height: 130px;
background-color: tomato;

`

const Img2 = styled.div`
width: 40px;
height: 120px;
background-color: #ddd
`

const Img3 = styled.div`
width: 40px;
height: 120px;
background-color: tomato;

`

const Img4 = styled.div`
width: 40px;
height: 120px;
background-color: #ddd
`
const TrailerTitle = styled.div`
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;`

const TrailerWrap = styled.div``

const TrailImg1 = styled.div`
width: 40px;
height: 120px;
background-color: tomato;
`

const TrailImg2 = styled.div`
width: 40px;
height: 120px;
background-color: #ddd;`





export default GalleryTrailer;