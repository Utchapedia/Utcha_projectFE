import React, { useRef } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';
import styled from 'styled-components';
import HorizontalLine from '../components/HorizonLine';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.png';

import { useDispatch } from 'react-redux';
import { signInDB } from '../redux/modules/user';

const SignInModal = ({ show, onHide }) => {
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();

  // 회원가입 버튼 누를 시
  const signIn = () => {
    if (email === '' || password === '') {
      alert('빈칸을 모두 입력해주세요!');
      return;
    }

    if (email && password !== '') {
      dispatch(signInDB(email.current.value, password.current.value));
      // console.log(email.current.value, password.current.value);
    }
  };

  // // 모달 체인지 (테스트)
  // const sendChangeState = () => {
  //   getChangeState(true);
  // };

  return (
    <ModalStyled
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Container>
        {/* <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Top>
          <img src={logo} style={{ width: '200px', height: 'auto' }} alt='logo' />
          <h2>로그인</h2>
        </Top>

        <Modal.Body>
          <Form>
            <input className='input mb-2' type='email' placeholder='이메일' ref={email} />
            <input className='input mb-2' type='password' placeholder='비밀번호' ref={password} />

            <Button type='button' className='my-2 login-btn' onClick={signIn}>
              로그인
            </Button>

            <SignUpArea>
              계정이 없으신가요?
              <button disabled>회원가입</button>
            </SignUpArea>

            {/* <HorizontalLine text={'OR'} /> */}
            {/* <Button onClick={onHide}>Close</Button> */}
          </Form>

          <Tip>TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.</Tip>
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
    font-weight: 400;
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
  font-weight: 300;
  letter-spacing: -0.2px;
  line-height: 23px;
  text-align: center;
  padding: 10px 13px;
  margin-top: 30px;
`;

const SignUpArea = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: rgb(140, 140, 140);
  text-align: center;

  margin-top: 20px;

  button {
    background-color: transparent;
    border: none;
    color: #ff2f6e;

    cursor: pointer;
    margin: 0;
  }
`;

export default SignInModal;
