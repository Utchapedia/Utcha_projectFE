import {React, useState, useRef} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import {createMyComment} from '../redux/modules/commentModule'
// import { propTypes } from 'react-bootstrap/esm/Image';

const CommentModal =({show, onHide}) => {
    const param = useParams();    
    const inputComment = useRef();
    const[comment, setComment] = useState("");
   
    const dispatch = useDispatch();
    const moviePostId = useSelector((state)=>state.detail.list)
   
    const createComment = () => { 
        // dispatch(createMyComment(inputComment.current.value))
        
      };
    return(
    <Modal
      show={show}
      onHide={onHide}  
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {moviePostId.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="의견을 자유롭게 남겨줘용" ref={inputComment} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
      <Button variant="primary" type="button" 
        onClick={()=>{createComment()}}
        >
        저장</Button>
      
      </Modal.Footer>
    </Modal>
  );
}
export default CommentModal