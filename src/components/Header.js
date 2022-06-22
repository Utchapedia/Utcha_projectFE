import React, { useState } from 'react';
import '../css/total.css';
import styled from 'styled-components';
import logo from '../images/logo.png';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logOutDB } from '../redux/modules/user';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //* 로그인 검사 부분
  const is_login = useSelector((state) => state.user.is_login);
  // console.log(is_login);

  React.useEffect(() => {}, [is_login]);

  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);

  const logOut = () => {
    dispatch(logOutDB());
    window.location.reload('/');
  };

  // // 모달 체인지(테스트)
  // const getChangeState = (value) => {
  //   setSignUpModalOn(value);
  // };

  return (
    <>
      <SignUpModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />
      <SignInModal show={signInModalOn} onHide={() => setSignInModalOn(false)} />

      <Container className='inner-set'>
        <img
          src={logo}
          style={{ width: '150px', height: 'auto', cursor: 'pointer' }}
          alt='logo'
          onClick={() => navigate('/')}
        />
        <HeaderItems>
          <SearchBar>
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#dcdcdc' />
            <input type='text' placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요.' />
          </SearchBar>
          <ButtonArea>
            {is_login === false ? (
              <>
                <button className='btn-1' onClick={() => setSignInModalOn(true)}>
                  로그인
                </button>
                <button className='btn-2' onClick={() => setSignUpModalOn(true)}>
                  회원가입
                </button>
              </>
            ) : (
              <button className='btn-2' onClick={logOut}>
                로그아웃
              </button>
            )}
          </ButtonArea>
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
    margin-left: 15px;
  }
`;

const SearchBar = styled.div`
  background-color: #f5f5f7;
  width: 310px;
  height: 30px;

  padding: 4px 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & input {
    width: 100%;
    height: 25px;

    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;

    cursor: text;

    background-color: transparent;
    margin-left: 5px;

    border: none;
    outline: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-flow: row nowrap;

  .btn-1 {
    background-color: transparent;
    color: #74747b;
    font-size: 14px;

    border: none;
  }

  .btn-2 {
    background-color: transparent;
    color: #353535;

    font-size: 14px;
    font-weight: bold;

    letter-spacing: -0.3px;
    line-height: 20px;
    height: 32px;

    padding: 5px 14px 6px 14px;

    border-radius: 6px;
    border: 1px solid rgba(116, 116, 123, 0.5);
  }
`;

export default React.memo(Header);
