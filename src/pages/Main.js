import React from 'react';
import styled from 'styled-components';
import '../css/total.css';

import FavoriteMovies from '../components/SwiperTest';

import { useSelector } from 'react-redux';
import MovieBoxTitle from '../components/MovieBoxTitle';
import SwiperTest from '../components/SwiperTest';

const Main = () => {
  const movie_list = useSelector((state) => state.movieList.list);
  const title = ['현재 인기 영화 순위', '읏챠 인기 영화'];

  return (
    <Container>
      <MovieBoxTitle title={title[0]} />
      {/* <FavoriteMovies movie_list={movie_list} /> */}
      <SwiperTest movie_list={movie_list} />

      <MovieBoxTitle title={title[1]} />
      <SwiperTest movie_list={movie_list} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export default Main;
