import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <FavoriteMovies />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export default Main;
