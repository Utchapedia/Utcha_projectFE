import React from 'react';
import styled from 'styled-components';
import '../css/total.css';

const MovieBoxTitle = ({ title }) => {
  return (
    <Container className='inner-set'>
      <p className='font-color-black'>{title}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;

  p {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
  }
`;

export default MovieBoxTitle;
