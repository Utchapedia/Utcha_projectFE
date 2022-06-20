import React from 'react';
import styled from 'styled-components';
import '../css/total.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteMovies = ({ movie_list, title }) => {
  // const movie_list = useSelector((state) => state.movieList.list);
  // console.log(movie_list);

  return (
    <Container className='inner-set'>
      <div className='box'>
        {/* <div className='title'>
          <p className='font-color-black'>{title}</p>
        </div> */}
        <MovieArea>
          {movie_list.map((list, idx) => {
            return (
              <Movie key={idx}>
                <div className='poster-img'>
                  <img src={list.originalTitle} alt='posterImg' />
                  <div>{idx + 1}</div>
                </div>
                <div className='movie-info font-color-black'>
                  <span>{list.title}</span>
                  <span>
                    {list.year} ・ {list.country}
                  </span>
                  <div className='rank font-color-gray'>
                    <span>평균</span>
                    <FontAwesomeIcon icon={faStar} width='12' height='10' />
                    <span>{list.star}</span>
                  </div>
                </div>
              </Movie>
            );
          })}
        </MovieArea>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .box {
    width: 100%;
    height: 100%;
  }

  .title {
    margin-bottom: 10px;
    p {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
    }
  }
`;

const MovieArea = styled.div`
  display: flex;
  flex-flow: row nowrap;

  gap: 15px;

  overflow: hidden;
  white-space: nowrap;
`;

const Movie = styled.div`
  min-width: 18%;

  display: inline-flex;
  flex-flow: column nowrap;

  box-sizing: border-box;

  .poster-img {
    display: inline-flex;

    margin-bottom: 10px;
    position: relative;

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    div {
      background-color: rgba(0, 0, 0, 0.77);
      color: #fff;
      width: 24px;
      height: 24px;

      position: absolute;
      top: 5px;
      left: 5px;

      text-align: center;
      border-radius: 4px;
    }
  }

  .movie-info {
    display: flex;
    flex-flow: column nowrap;

    & > :nth-child(1) {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }

    & > :nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 21px;
      padding-bottom: 1px;
    }
  }

  .rank {
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0;
    line-height: 14px;
    display: flex;

    * {
      margin-right: 2px;
    }
  }
`;

export default FavoriteMovies;
