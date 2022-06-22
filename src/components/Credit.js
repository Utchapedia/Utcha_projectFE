import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import 'swiper/css';
import { Navigation } from "swiper";
import axios from "axios";


const Credit = (props) => {
  const moviePostId = useSelector((state)=>state.detail.list);
  const list = moviePostId;
    return (
      <>
        <CreditTitle>
        출연/제작
        </CreditTitle>
        {list.credits && list.credits.map((v,idx)=> {
          return(

         <CreditTwoSet key={idx} >
          <FirstGroup>
            <CreditOne>
              <CreditImg style={{backgroundImage: `url(${v.image})`}}/>
              <Characters>
                <div className="CreditName">{v.name}</div>
                <CreditRole>{v.role}</CreditRole>
              </Characters>
            </CreditOne>
          </FirstGroup>
          {/* <SecondGroup>
          <CreditOne>
              <CreditImg> </CreditImg>
              <Characters>
                <div className="CreditName">또봉이</div>
                <CreditRole>감독</CreditRole>
              </Characters>
            </CreditOne>
          </SecondGroup> */}
          </CreditTwoSet>
           )
          })}
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
  const CreditTwoSet = styled.div``
  const FirstGroup = styled.div`
  float: left;
  width: 50%;
`
  
  const CreditImg = styled.div`
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 56px;
  height: 56px;
  overflow: hidden;
  border: none;
  margin: 0px 12px 0px 0px;
  border-radius: 5px !important;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;
  background: url("${(props) => props.src}") center center / cover no-repeat;
  `
  const CreditOne = styled.div`
  display: flex;
  webkit-box-align: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
  height: 76px;

  `
  const Characters = styled.div`
  
  .CreditName={
    color: rgb(30, 30, 30);
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }  
  `

 
  const CreditRole = styled.div`
    color: rgb(140, 140, 140);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    white-space: nowrap;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis
  `

  const SecondGroup = styled.div`
      float: right;
      width: 50%;
      background-color: skyblue;
  ` 

  




export default Credit;