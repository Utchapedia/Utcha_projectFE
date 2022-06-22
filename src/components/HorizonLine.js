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
  border-bottom: 1px solid #bcbcbc;
  line-height: 0.1em;
  margin: 20px 0;

  span {
    background: #fff;
    color: #a0a0a0;
    padding: 0px 14px;

    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
  }
`;

export default HorizontalLine;
