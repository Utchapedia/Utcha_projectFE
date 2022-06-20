import React, { useState } from 'react';
import '../css/total.css';
import styled from 'styled-components';
import logo from '../images/logo.png';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);

  return (
    <>
      <SignUpModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />
      <SignInModal show={signInModalOn} onHide={() => setSignInModalOn(false)} />

      <Container className='inner-set'>
        <img src={logo} style={{ width: '180px', height: 'auto', cursor: 'pointer' }} alt='logo' />
        <HeaderItems>
          <SearchBar>
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#dcdcdc' />
            <input type='text' placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요.' />
          </SearchBar>
          <div>
            <button onClick={() => setSignInModalOn(true)}>로그인</button>
            <button>로그아웃</button>
            <button onClick={() => setSignUpModalOn(true)}>회원가입</button>
          </div>
        </HeaderItems>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;
  z-index: 30;

  border: none;
  border-bottom: 1px solid #eee;

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
