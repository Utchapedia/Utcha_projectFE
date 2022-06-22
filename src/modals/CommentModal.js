import {React, useState, useRef} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { Button, Modal, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {CreateCommentDB} from '../redux/modules/commentModule'

import { propTypes } from 'react-bootstrap/esm/Image';

const CommentModal =({show, onHide, movie_id}) => {
    const param = useParams();    
    const inputComment = useRef();
    const[comment, setComment] = useState("");
    const username = useSelector((state)=>state.user.user)
    
    const dispatch = useDispatch();
    
    const moviePostId = useSelector((state)=>state.detail.list)
    const addComment = inputComment.current
    //console.log(movie_id)
    
    const createComment = () => { 
        dispatch(CreateCommentDB(inputComment.current.value, username, movie_id)) 
        
      };

    

    return(
    <Modal
      show={show}
      onHide={onHide}  
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          {moviePostId.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                ref={inputComment}
                value={comment}
                onChange={(e) => setComment(inputComment.current?.value)}
                placeholder="의견을 자유롭게 남겨줘용"  
              />
          </Form.Group>
        
        </Form>
      </Modal.Body>

      <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
      <Button onClick={() =>{createComment(); onHide()}}>저장</Button>
       
      
      </Modal.Footer>
      </Container>
    </Modal>
  );
}

// const Container = styled.div`
// `
export default CommentModal