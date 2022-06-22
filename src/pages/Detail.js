import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../components/Banner';
import MovieInfoComment from '../components/MovieInfoComment';

import { useParams } from 'react-router-dom';
import { loadOneMovieListDB } from '../redux/modules/detail';

const Detail = (props) => {
  const dispatch = useDispatch();

  const movie_id = useParams().movieId;
  //console.log(movie_id);

  const movieIdPost = useSelector((state) => state.detail.list);
  //console.log(movieIdPost);

  React.useEffect(() => {
    dispatch(loadOneMovieListDB(movie_id));
  }, []);
  return (
    <Container>
      <div>{movieIdPost.title}</div>
    <Banner movie_id={movie_id}/> 
    <MovieInfoComment movie_id={movie_id}/>
    </Container>
    
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export default Detail;
