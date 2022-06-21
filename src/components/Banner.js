import { React, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import CommentModal from '../modals/CommentModal';

const Banner = () => {
  const [commentModalOn, setCommentModalOn] = useState(false);
  const movie_list = useSelector((state) => state.movieList.list);

  return (
    <>
      <CommentModal show={commentModalOn} hide={() => setCommentModalOn(false)} />
      <Container>
        <Poster style={{ backgroundImage: `url(${movie_list.posterUrl})` }} />
        <WrapInfo>
          <Original style={{ backgroundImage: `url(${movie_list.originalUrl})` }} />

          <InfoAndRating>
            <SimpleInfo>
              <div className='title' style={{ FontSize: '39pt' }}>
                {movie_list.title}
              </div>
              <div className='yearGenreCountry'>
                {movie_list.year} • {movie_list.genre} • {movie_list.country}
              </div>
              <Score>
                평균
                <FontAwesomeIcon icon={faStar} width='12' height='10' />
              </Score>
            </SimpleInfo>
          </InfoAndRating>
          <RatingAndComment>
            <GiveStars>
              <h3 className='starTitle'> 평가하기</h3>
              <Stars>
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
                <FontAwesomeIcon icon={faStar} width='20' height='20' />
              </Stars>
            </GiveStars>
            <OpenComment>
              <h3 className='commentTitle'> 코멘트</h3>
              <CommentIcon onClick={() => setCommentModalOn(true)}></CommentIcon>
            </OpenComment>
          </RatingAndComment>
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

  background-size: cover;
  media (min-width: 1023px).css-1mcdpgu-BlurPoster {
    width: 768px;
  }
`;

const WrapInfo = styled.div`
  height: 30%;
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 10px;
`;

const Original = styled.div`
  width: 140px;
  height: 200px;
  transform: translate(0, -10%);
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;
const InfoAndRating = styled.div`
  display: flex;
  flex-direction: column;
`;

const SimpleInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 13px;
  text-align: left;
  justify-content: center;
  margin-left: 20px;

  .title {
    font-size: 2rem;
  }
  .yearGenreCountry {
    margin-top: 1em;
    display: flex;
    color: #848484;
    font-size: 1.2rem;
  }
`;

const Score = styled.h3`
  margin-top: 30px;
`;

const RatingAndComment = styled.div`
  display: flex;
  justify-content: center;
`;

const GiveStars = styled.div`
  display: column;
  justify-content: center;
  line-height: 1px;
  .starTitle {
    font-size: 1.2rem;
  }
`;

const Stars = styled.div`
  justify-content: center;
`;

const OpenComment = styled.div`
.commentTitle{
    font-size: 1.2rem;`;

const CommentIcon = styled(FaPencilAlt)`
  position: relative;

  font-size: 2rem;
  color: #000;
`;

export default Banner;
