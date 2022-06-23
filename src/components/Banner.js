import { React, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import CommentModal from '../modals/CommentModal';
//import InputComment from '../modals/InputComment';

const Banner = ({ movie_id }) => {
  const moviePostId = useSelector((state) => state.detail.list);
  const [ModalShow, setModalShow] = useState(false);

  // 로그인 검사 (오누리 작성)
  const is_login = useSelector((state) => state.user.is_login);
  // console.log(is_login);

  const loginCheck = () => {
    if (is_login === false) {
      alert('로그인이 필요합니다!');
    } else {
      setModalShow(true);
    }
  };

  return (
    <>
      <CommentModal show={ModalShow} onHide={() => setModalShow(false)} movie_id={movie_id} />
      <Container>
        
        <Poster style={{ backgroundImage: `url(${moviePostId.posterUrl})` }} />
          <WrapInfo>
            <Original style={{ backgroundImage: `url(${moviePostId.originalTitle})` }} />
            <Characters>
            <InfoAndRating>
              <div className='title'> {moviePostId.title}</div>
              <div className='yearGenreCountry'>
                {moviePostId.year} • {moviePostId.genre} • {moviePostId.country}
              </div>
              <div className='scoreAvr'>
                평균 <FontAwesomeIcon icon={faStar} width='12' height='10' /> 3.5점
              </div>
            </InfoAndRating>
          
          <RatingAndComment>
            <GiveStars>
              <div className='starTitle'>평가하기</div>
              <Stars>
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
              </Stars>
            </GiveStars>

            <OpenComment>
              <div className='commentTitle'>코멘트</div>
              <CommentIcon onClick={loginCheck}></CommentIcon>
            </OpenComment>
          </RatingAndComment>
          </Characters>
        </WrapInfo>
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 60vh;
  
  background-color: #fff;
`;

const Poster = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  margin-top: -50px;
  background-size: cover;
  media (min-width: 1023px).css-1mcdpgu-BlurPoster {
    width: 768px;
  }
`;
const WrapInfoAndStars=styled.div`
display: flex;
flex-direction: column;
margin-right: 50px;


`

const WrapInfo = styled.div`
  height: 10%;
  display: flex;
  position: relative;
  justify-content: left;
  margin-left: 25vw;
  
`;

const Characters = styled.div`
display: flex;

flex-direction: column;
transform: translate(3%, 220%);
text-align: left;
`

const Original = styled.div`
  width: 140px;
  height: 200px;
  transform: translate(20, -3%);
  background-size: cover;
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
`;
const InfoAndRating = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 13px;
  text-align: left;
  justify-content: center;
  margin-left: 10px;
  margin-top: -100px;
  
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .yearGenreCountry {
    margin-top: 1.3em;
    display: flex;
    color: #848484;
    font-size: 1rem;
  }
  .scoreAvr {
    margin-top: 20px;
    font-size: 1rem;
  }
`;


const RatingAndComment = styled.div`
  display: flex;
  justify-content: center;
  transform: translate(-25%, 30%);
  margin-left: 10px;
`;

const GiveStars = styled.div`
  display: column;
  justify-content: center;
  text-align: center;
  
  .starTitle {
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.5rem;
  }
`;

const Stars = styled.div`
  justify-content: center;
`;

const OpenComment = styled.div`
transform: translate(70%, 5%);
display: flex;
flex-direction: column;


  .commentTitle {
    margin-bottom: 0.2rem;    
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.5rem;
    transform: translate(-20%, -10%);
  }
`;

const CommentIcon = styled(FaPencilAlt)`
  position: relative;
  font-size: 1.8em;
  color: #000;
`;

export default Banner;
