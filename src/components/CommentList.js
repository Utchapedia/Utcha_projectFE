import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Container } from 'react-bootstrap';


import { LoadCommentDB, loadComments } from '../redux/modules/commentModule';
import { loadMovieListDB } from '../redux/modules/movieList';

const CommentList = () => {
const comment_list = useSelector((state) => state.commentModule.list);
  const params = useParams();
  const movie_id = params.movie_id;
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    dispatch(LoadCommentDB(movie_id));
  },[]);
  
  return (
    <>
    <CommentContainer>
      <CommentTitle>코멘트</CommentTitle>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {comment_list.length>1 &&comment_list.map((list, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Comment key={idx}>
               <CommentBox>
                <UpperComment>
                  <div className="userName">
                  <span>{list.nickName}</span>  
                  </div>
                  <StarFrame>
                    <FontAwesomeIcon icon={faStar} width='12' height='10'/>
                    <span style={{margin: "5px"}}> 5</span>
                  </StarFrame>


                  
                </UpperComment>
                <hr />
                <MiddleComment>
                  <div className="commentContent"> {list.comment}</div>         
                  <Btns>
                  <Button variant="light" size="sm" style={{margin:"2px"}}> 수정</Button>
                  <Button variant="light" size="sm" style={{margin:"2px"}}> 삭제</Button>
                  
                  </Btns>
                </MiddleComment>
                <hr />
                <BottomComment>
                  <div className="LikeBtn">
                  <FontAwesomeIcon icon={faThumbsUp} style={{width:'20', height:'18'}}/>
                  <span> 3397</span>
                  </div>
                </BottomComment>
                </CommentBox>   
                
              </Comment>
            </SwiperSlide>
          );
        })}
        {/* <div class='swiper-button-prev'></div>
        <div class='swiper-button-next'></div> */}
      </Swiper>
    </CommentContainer>
    </>
  );
};

const CommentTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;
  // margin-block-start: 0.83em;
  // margin-block-end: 0.83em;
`;
const CommentContainer = styled.div`
`;

const Comment = styled.div`

`;

const CommentBox = styled.div`
background-color: rgb(242,242,242);
box-sizing: border-box;
padding: 20px 20px;
border-radius: 6px;
overflow: hidden;
margin: 0px 3px;
max-height: 500px;
width: 98% !important

.userName{
  font-size: 5rem;
}
`;
const UpperComment = styled.div`
display: flex;
justify-content: space-between;
align-items: center

`
const StarFrame = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: rgb(74, 74, 74);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 19px;
  box-sizing: border-box;
  width: 50px;
  height: 26px;
  padding: 0px 10px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 13px;
  margin: 8px 0px 0px 16px;
  img {
    vertical-align: top;
    margin: 0px 3px 0px 0px;
    border-style: none;
    width: 16px;
    aspect-ratio: auto 16 / 16;
    height: 16px;
  }
`;

const MiddleComment = styled.div`
height: 100px;
`

const Btns=styled.div`
transform: translate(65%, 150%);
`




const BottomComment = styled.div``

export default CommentList;
