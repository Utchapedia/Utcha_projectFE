import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Comment= () => {
    //slick-carousel 세팅
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return(
        <CommentContainer>
        <CommentTitle>
        코멘트
    </CommentTitle>
    <Slider {...settings}>
          <div>
            <CommentBox>
                랄랄라
            닉네임
            별점
            내용
            </CommentBox>
          </div>
          <div>
          <CommentBox>
                랄랄라
            닉네임
            별점
            내용
            </CommentBox>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
          
        </CommentContainer>
        
    );
}


const CommentTitle = styled.div`
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
`
const CommentContainer = styled.div``

const CommentWrap = styled.div`

`

const CommentBox = styled.div`
width: 20vw;
height: 35vh;
border-radius: 7px;
margin-left: 6px; 
margin-right: 6px; 
margin-bottom: 10px;

background-color: #ddd



`

  {/* <CommentBox>
                랄랄라
            닉네임
            별점
            내용
            </CommentBox> */}

export default Comment;