import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import 'swiper/css';
import { Navigation } from "swiper";


const Credit = (props) => {
  //console.log(props)
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
      };
   
    const creditOne = props.credits
      
    
    

    return (
      <>
        <CreditTitle>
        출연/제작
        </CreditTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="FirstGroup">
            <li>
            
            </li>
          
          
          
          </div>
          <div className="SecondGroup"></div>
        </SwiperSlide>
        
            
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
    </>
    );
  }
  const CreditTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  `

  
  
  const creditPhoto = styled.div`
  width: 100px;
  height: 100px;
  `

  const FirstGroup = styled.div`
  float: left;
  width: 50%;
  background-color: tomato;
  `

  const SecondGroup = styled.div`
  float: right;
  width: 50%;
  background-color: skyblue;
  ` 

  const CreditPageTwo = styled.div`
  
  `

  const ThirdGroup = styled.div`
  float: left;
  width: 50%;
  background-color: tomato;
  `

  const FourthGroup = styled.div`
  float: right;
  width: 50%;
  background-color: skyblue;
  `
    





export default Credit;