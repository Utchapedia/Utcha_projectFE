import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';

// import { loadComments } from '../redux/modules/commentModule';

const CommentList = ({ comment_list }) => {
  const dispatch = useDispatch();
  console.log(comment_list);
  // const comment_list = useSelector((state) => state.commentModule.list);
  // console.log(comment_list);

  // useEffect(() => {
  //   dispatch(loadComments(movie_id));
  // }, []);

  return (
    <CommentContainer>
      {comment_list.map((list, idx) => {
        console.log(list);
        return <div key={idx}>{list.comment}</div>;
      })}
      {/* <CommentTitle>코멘트</CommentTitle>
      <div className='inner-set' style={{ padding: '3px' }}> */}
      {/* <StyledSwiper
          slidesPerView={4}
          spaceBetween={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {comment_list.map((list, idx) => {
            console.log(list);
            return (
              <div>ddd</div>
              // <SwiperSlide
              //   key={idx}
              //   style={{ width: '30%', height: '20vh', backgroundColor: '#ddd' }}
              // >
              //   <Comment key={idx}>
              //     <div>{list.nickName}</div>
              //     <br />
              //     <div>{list.comment}</div>
              //     <br />
              //     <div>{list.createdAt}</div>
              //   </Comment>
              // </SwiperSlide>
            );
          })}
        </StyledSwiper> */}
      {/* </div> */}
    </CommentContainer>
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
const CommentContainer = styled.div``;

const StyledSwiper = styled(Swiper)`
  position: relative;

  width: 100%;
  height: auto;
`;

const CommentBoxes = styled.div``;
const Comment = styled.div``;

export default CommentList;
