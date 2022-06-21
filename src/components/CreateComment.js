import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";


const CreateComment = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>극한직업</Card.Title>
            <Card.Text>
              <textarea />
            </Card.Text>  
          </Card.Body>
        </Card>
      );
}

const SaveCommentBtn = styled.button`
width: 80px;
height: 40px;
background-color: pink;
`


export default CreateComment;