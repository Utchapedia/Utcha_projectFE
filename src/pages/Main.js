import React from 'react';
import styled from 'styled-components';
import '../css/total.css';

import { useSelector } from 'react-redux';
import MovieBoxTitle from '../components/MovieBoxTitle';
import SwiperTest from '../components/SwiperTest';

const Main = () => {
  const movie_list = useSelector((state) => state.movieList.list);
  console.log(movie_list);

  const title = [
    '현재 인기 영화 순위',
    '읏챠 인기 영화',
    '넷플릭스 영화 순위',
    '읏챠 급상승 Top 10',
  ];

  return (
    <Container>
      <MovieBoxTitle title={title[0]} />
      <SwiperTest movie_list={movie_list.slice(0, 10)} />

      <MovieBoxTitle title={title[1]} />
      <SwiperTest movie_list={movie_list.slice(10, 20)} />

      <MovieBoxTitle title={title[2]} />
      <SwiperTest movie_list={movie_list.slice(20, 30)} />

      <MovieBoxTitle title={title[3]} />
      <SwiperTest movie_list={movie_list.slice(30, 40)} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export default Main;
