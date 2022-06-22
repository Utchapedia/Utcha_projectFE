import React, { useState } from 'react';
import HorizontalLine from '../components/HorizonLine';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.png';

import { Button, Modal, Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signUpDB } from '../redux/modules/user';

const SignUpModal = ({ show, onHide }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const userName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  const userEmail = (e) => {
    setEmail(e.target.value);
  };

  const userPassword = (e) => {
    setPassword(e.target.value);
  };

  // 이메일 체크
  const emailcheck = (email) => {
    const email_check = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

    return email_check.test(email);
  };

  // 회원가입 버튼 누를 시
  const signUp = () => {
    if (name === '' || email === '' || password === '') {
      alert('빈칸을 모두 입력해주세요!');
      return;
    }
    if (!emailcheck(email)) {
      alert('이메일 형식이 맞지 않습니다!');
      return;
    }

    dispatch(signUpDB(name, email, password));
    console.log(name, email, password);
  };

  return (
    <ModalStyled
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Container>
        <Top>
          <img src={logo} style={{ width: '200px', height: 'auto' }} alt='logo' />
          <h2>로그인</h2>
        </Top>

        <Modal.Body>
          <Form>
            <input className='input mb-2' type='text' placeholder='닉네임' onChange={userName} />
            <input className='input mb-2' type='email' placeholder='이메일' onChange={userEmail} />
            <input
              className='input mb-2'
              type='password'
              placeholder='비밀번호'
              onChange={userPassword}
            />

            <Button variant='info' type='button' className='my-2 login-btn' onClick={signUp}>
              회원가입
            </Button>

            <SignUpArea>
              이미 가입하셨나요?
              <button disabled>로그인</button>
            </SignUpArea>

            <HorizontalLine text={'OR'} />
          </Form>
        </Modal.Body>
      </Container>
    </ModalStyled>
  );
};

const ModalStyled = styled(Modal)`
  .modal {
    display: flex;
  }

  .modal-dialog {
    width: 400px;
  }

  .modal-content {
    border-radius: 10px;
  }

  .modal-body {
    padding: 1rem 0.5rem;
  }

  .input {
    height: 44px;
    width: 100%;

    box-sizing: border-box;
    padding: 0 15px;

    font-size: 16px;
    font-weight: bold;
    line-height: 21px;

    caret-color: #ff2f6e;

    border: none;
    border-radius: 6px;

    background-color: #f5f5f5;
    outline: none;
  }

  //? 플레이스홀더 색상 변경
  input::-ms-input-placeholder {
    color: #b3b3b3;
  }
  input::-webkit-input-placeholder {
    color: #b3b3b3;
  }
  input::-moz-placeholder {
    color: #b3b3b3;
  }

  .login-btn {
    width: 100%;
    height: 44px;

    color: #fff;
    text-align: center;
    font-size: 17px;

    background-color: #ff2f6e;
    border: none;
  }
`;

const Top = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin-top: 35px;

  h2 {
    font-size: 17px;
    letter-spacing: -0.5px;
    line-height: 22px;
    font-weight: 700;
    text-align: center;
    margin-top: 25px;
  }
`;

const Tip = styled.div`
  background-color: #f7f7f7;
  color: #8c8c8c;

  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 23px;
  text-align: center;
  padding: 10px 13px;
  margin-top: 48px;
`;

const SignUpArea = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: rgb(140, 140, 140);
  text-align: center;

  margin-top: 10px;

  button {
    background-color: transparent;
    border: none;
    color: #ff2f6e;

    cursor: pointer;
    margin: 0;
  }
`;

export default SignUpModal;
