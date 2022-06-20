import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";

//components
import Banner from "../components/Banner";
import MovieInfoComment from "../components/MovieInfoComment";


const Detail= (props) => {   
  const {postId} = useParams();
  

return(
     <Container>
       <Banner/>
        <MovieInfoComment />
    </Container>
    );

}
const Container = styled.div`
height: 100%;
width: 100%;
background-color: #F2F2F2;
`;




export default Detail;