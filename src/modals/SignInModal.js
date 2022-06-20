import React, { useRef } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';

import HorizontalLine from '../components/HorizonLine';
import 'bootstrap/dist/css/bootstrap.css';

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

    dispatch(signInDB(email.current.value, password.current.value));
    // console.log(email.current.value, password.current.value);
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
          <span>로그인</span>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control type='email' placeholder='이메일' ref={email} />
              {/* <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type='password' placeholder='비밀번호' ref={password} />
            </Form.Group>

            <Button block variant='info' type='button' className='my-3' onClick={signIn}>
              로그인
            </Button>
            <HorizontalLine text={'or'} />
            <Button onClick={onHide}>Close</Button>
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;
