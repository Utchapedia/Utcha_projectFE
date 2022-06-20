import React from 'react';
import styled from 'styled-components';

const HorizontalLine = ({ text }) => {
  return (
    <Style>
      <span>{text}</span>
    </Style>
  );
};

const Style = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin: 10px 0 20px;

  span {
    background: #fff;
    padding: 0 10px;
  }
`;

export default HorizontalLine;
