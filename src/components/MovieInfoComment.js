import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GalleryTrailer from './GalleryTrailer';
import Credit from './Credit';
import CommentList from './CommentList';
import { LoadCommentDB, loadComments } from '../redux/modules/commentModule';
import { loadMovieListDB } from '../redux/modules/movieList';

const MovieInfoComment = ({ movie_id }) => {
  const moviePostId = useSelector((state) => state.detail.list);
  const dispatch = useDispatch();

  console.log(movie_id);
  
  const comment_list = useSelector((state) => state.commentModule.list);
  //console.log(comment_list);
  // React.useEffect(() => {
  //   dispatch(loadMovieListDB(movie_id));
  //   dispatch(loadComments(movie_id));
  // }, []);
//console.log(moviePostId.galleryUrls)
  return (
    <MovieInfoContainer>
      <ContainerInner>
        <LeftContent>
          <DetailInfo style={{ padding: '8px 0px 0px' }}>
            <div className='BasicInfoTitle'>기본정보</div>
            <BasicInfoAndDesc>
              <BasicInfo>
                {moviePostId.OriginalName}
                <br />
                <span>
                  {moviePostId.year} • {moviePostId.genre} • {moviePostId.country}
                </span>
                <br />
                <span>
                  {moviePostId.duration} · {moviePostId.age}
                </span>
              </BasicInfo>
              <Description>{moviePostId.description}</Description>
            </BasicInfoAndDesc>
          </DetailInfo>
          <hr
            style={{ border: '0', borderBottom: '1px solid #f0f0f0', margin: '24px 20px 0 20px' }}
          />
          <CreditWrap>
            <Credit {...moviePostId} />
          </CreditWrap>
          <br />
          <hr
            style={{ border: '0', borderBottom: '1px solid #f0f0f0', margin: '24px 20px 0 20px' }}
          />
          <CommentList comment_list={comment_list} />
        </LeftContent>
        
        <RightGalleryAndTrailer>
          <GalleryTrailer {...moviePostId}/>
          
        </RightGalleryAndTrailer>
      </ContainerInner>
    </MovieInfoContainer>
  );
};
const MovieInfoContainer = styled.div`
  padding: 28px 0px 48px;
  overflow: hidden;
`;

const ContainerInner = styled.div`
  max-width: 976px;
  margin: 0px auto;
  display: table;
`;

const DetailInfo = styled.div`
  .BasicInfoTitle {
    color: black;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: -0.7px;
    line-height: 28px;
    margin: 8px 0px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 10px;
    margin-inline-end: 0px;
  }
`;

const LeftContent = styled.div`
width: 640px;
padding: 0px 8px;
display: table-cell
border: 1px solid;
border-radius: 6px;
overflow: hidden;
border-color: rgb(227, 227, 227) !important;
text-align: left;
height: 165vh;
`;

const BasicInfoAndDesc = styled.div`
  color: rgb(74, 74, 74);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 24px;
  margin: 8px 10px;
`;

const BasicInfoTitle = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: -0.7px;
  line-height: 28px;
  margin: 8px 0px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 10px;
  margin-inline-end: 0px;
`;
const BasicInfo = styled.div`
  color: rgb(74, 74, 74);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 24px;
  margin: 8px 0px;
`;
const Description = styled.div`
  word-break: break-all;
  max-height: 300px;
  margin: 0px;
  overflow: hidden;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  white-space: pre-wrap;
  letter-spacing: -0.2px;
`;

const CreditWrap = styled.div``;

const RightGalleryAndTrailer = styled.div`
  border: 1px solid;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  border-color: rgb(227, 227, 227) !important;
  max-width: 300px;
  padding: 0px 8px;
  display: table-cell;
`;
export default MovieInfoComment;
