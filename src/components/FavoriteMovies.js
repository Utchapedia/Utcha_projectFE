import React from 'react';
import styled from 'styled-components';
import '../css/favorite-movies.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteMovies = () => {
  const movie_list = useSelector((state) => state.movieList.list);
  console.log(movie_list);

  const img =
    'https://an2-img.amz.wtchn.net/image/v2/A_2H7CpybTzRqcjyuIGjew.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5URTFOREEzTWpReU5qRTJNemsxTkRZaWZRLmkxX1BMT2hqUGxQSzlWYVZPdVN2QUJ4eW0ydDBCbGpiaGQ2cWxRUTZubEE';

  return (
    <div className='wrap'>
      <p>현재 인기 영화 순위</p>

      <div className='movie-box'>
        {movie_list.map((list, idx) => {
          return (
            <div key={idx} className='movie-list'>
              <div className='movie'>
                <div className='poster-box'>
                  <img className='post-image' src={list.originalTitle} alt='postImg' />
                  <div className='rank'>{idx + 1}</div>
                </div>

                <div className='movie-name'>{list.title}</div>

                <div className='movie-info'>
                  {list.year} ・ {list.country}
                </div>

                <div className='movie-rating'>
                  <span>평균</span>
                  <FontAwesomeIcon icon={faStar} width='12' height='10' />
                  <span>{list.star}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteMovies;
