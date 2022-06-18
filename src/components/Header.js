import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Container>
      <img src={logo} style={{ width: '180px', height: 'auto', cursor: 'pointer' }} alt='logo' />
      <HeaderItems>
        <SearchBar>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='#dcdcdc' />
          <input type='text' placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요.' />
        </SearchBar>
        <div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </HeaderItems>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;
  z-index: 1;

  border: none;
  border-bottom: 1px solid #eee;

  box-sizing: border-box;
  padding: 0 10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const HeaderItems = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  & button {
    margin-left: 20px;
  }
`;

const SearchBar = styled.div`
  background-color: #f5f5f7;
  width: 300px;
  height: 30px;

  padding: 4px 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & input {
    width: 100%;
    height: 25px;

    background-color: transparent;
    margin-left: 5px;

    border: none;
    outline: none;
  }
`;

export default Header;
