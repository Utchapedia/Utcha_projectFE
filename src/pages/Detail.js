import React from "react";
import styled from "styled-components";

//components
import Banner from "../components/Banner";
import MovieInfo from "../components/MovieInfo";
import Comment from "../components/Comment";

const Detail= (props) => {   
return(
     <Container>
       <Banner style= {{backgroundColor: "#ddd"}} />
        <MovieInfo />
        
        <Comment />
    </Container>
    );

}
const Container = styled.div`
height: 100%;
width: 100%;
background-color: #F2F2F2;
`;




export default Detail;