import React,  {useRef, useState, useEffect}  from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import {loadMovieListDB} from '../redux/modules/movieList'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "@mui/system";

const GalleryTrailer = () => {
const dispatch=useDispatch();
const param = useParams()
  // console.log(props.galleryUrls)

  const moviePostId = useSelector((state) => state.detail.list);

// useEffect(()=>{
//   moviePostId.length>1 && dispatch(loadMovieListDB(param.movie_id));
  
// }, [])


const imgList= moviePostId
console.log(imgList)

return(
  <div>
    <GalleryTitle>
      갤러리
    </GalleryTitle>
    <Gallery>
      <StyledSwiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="galleryImg">
            <img src="https://an2-img.amz.wtchn.net/image/v2/UOcFw-BDSh-yoR0gmc35tQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZek9EYzNPVFEwTURrNE5EWTRNRFV3TWlJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEucGhzVmxHWFNxNmF5bmYwVDUzYUJDRU41MExXcUVUSGhOc3NwNldQbWFwVQ" alt='galleryImg' />
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="galleryImg">
          <img src="https://an2-img.amz.wtchn.net/image/v2/Z8jafJT0TOkoU1C0Z5xo_Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU16ZzRPVFUyTmpRM09UVXlPVFV5T0NJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuU0FCTjdoeVIxbVZ6bDRoZjdTeE5mUFZXNzhuZ204d3NaOW5FNzRTQWhfaw" alt='galleryImg' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="galleryImg">
          <img src="https://an2-img.amz.wtchn.net/image/v2/sebA6lArfqpQN7FZYY9Whg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU16ZzRPVFUyTmpVNU9ERXhOVE16TmlJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuMzJZX2lFaW1QQVlkVmx6d0dOSDVGeWtCNFhSY0JLa2N4YWRMR2kxSGM4TQ" alt='galleryImg' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="galleryImg"> 
            <img src="https://an2-img.amz.wtchn.net/image/v2/bA5nxr-gHvq5oAq1ttw6VQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU16ZzRPVFUyTmpVek16TXhOakU1T1NJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuQ215YjRtbUlTdEdaTDBhY1BGeDdEWkpmQTBaWXN6MFhySUlULVBEX0lXdw" alt='galleryImg' />
          </div>
        </SwiperSlide>
      
      </StyledSwiper>
      </Gallery>
</div>
     );
}
const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: auto;
`;

// const Box = styled.div`
//  width: 80px;
//  height: 50px;
//  background-color: #ddd
// `;
const GalleryTitle = styled.div`
font-size: 25px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
`
const Gallery= styled.div`
img {
  width: 100%;
  height: 80px;
  border-radius: 5px;
}
`;

const GalleryTrailerWrap = styled.div`
`
const ImgOne=styled.div`
width: 150px;
height: 80px;
`

const GalleryWrap=styled.div`
margin-bottom: 50px;

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