import React, { useState } from 'react';
import HorizontalLine from '../components/HorizonLine';
import 'bootstrap/dist/css/bootstrap.css';

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
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <span>회원가입</span>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control placeholder='이름' onChange={userName} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type='email' placeholder='이메일' onChange={userEmail} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type='password' placeholder='비밀번호' onChange={userPassword} />
            </Form.Group>

            <Button variant='info' type='button' className='my-3' onClick={signUp}>
              회원가입
            </Button>
            <HorizontalLine text={'or'} />
            <Button onClick={onHide}>Close</Button>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;
