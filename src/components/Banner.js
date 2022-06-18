import React from "react";
import styled from "styled-components";
import { FaStar, FaPencilAlt } from 'react-icons/fa';


const Banner= () => {
    return(
    <Container>
        <TitleImg />
        
        <WrapInfo>
            <Poster > 
            </Poster>
            <InfoAndRating>
                <SimpleInfo>
                    <Title>
                    범죄도시2
                    </Title>
                    <YearGenreCountry>
                        <Year>2022</Year> • <Genre>범죄/액션</Genre> • <Country>한국</Country> 
                    </YearGenreCountry>
                    <Score>
                        평균★ 3.6
                    </Score>
                </SimpleInfo>
            </InfoAndRating>
            <RatingAndComment>
                <GiveStars>
                    <h3 className="starTitle"> 평가하기</h3>
                    <Stars>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Stars>
                </GiveStars>
                <OpenComment>
                    <h3 className="commentTitle"> 코멘트</h3>
                        <CommentIcon />
                </OpenComment>
            </RatingAndComment>
        </WrapInfo>
    </Container>
    );

}
const Container = styled.div`
height: 60vh;
background-color: #fff;
`

const TitleImg = styled.div`
height: 40vh;
width: 100%;
display: flex;
background-image: url('https://image.cine21.com/resize/cine21/still/2022/0513/16_18_42__627e0652dce3e[H800-].jpg');
background-size: cover;
media (min-width: 1023px).css-1mcdpgu-BlurPoster {width: 768px;}

`

const WrapInfo = styled.div`
height: 30%;
display: flex;
position: relative;
justify-content: center;
margin-top: 10px;

`

const Poster = styled.div`
width: 140px;
height: 200px;
transform: translate(0, -10%);
background-size: cover;

display: flex;
align-items: flex-end;
background-image: url('https://w.namu.la/s/d0295ada5124aa37f7d06c7455dcfebcb28ca0716b6b98f214c6e176bd953ffcda3596b8a074216d23f4e4fcd2fa9e0f8588b49eedb8d775e320e4d92bfa005f778667994bc8846d22209b8ef96f4cca301d9a6d8863cb118b341e96a07e96018efc4b77959c89058f5b23c08c3cd627');


`
const InfoAndRating = styled.div`
display: flex;
flex-direction: column;
`

const SimpleInfo = styled.div`
display: flex;
flex-direction: column;
line-height: 13px;
text-align: left; 
justify-content: center;
margin-left: 20px;

`

const Title = styled.h1`
font-size: 2rem;
`

const YearGenreCountry = styled.div`

display: flex;
color: #848484;

`
const Year = styled.h3`
margin : 0px;
font-size: 1.2rem;`

const Genre = styled.h3`
margin : 0px;
font-size: 1.2rem;`

const Country = styled.h3`
font-size: 1.2rem;
margin : 0px;`

const Score = styled.h3`
margin-top: 30px;
`

const RatingAndComment = styled.div`
display: flex;
justify-content: center;

`

const GiveStars = styled.div`
display: column;
justify-content: center;
line-height: 1px;
.starTitle{
    font-size: 1.2rem;
}

`
const Stars = styled.div`
justify-content: center;
`
const StarIcon = styled(FaStar)`
    position: relative;
    left: 35px;
    font-size: 2rem;
    color: #ddd;
  
`


const OpenComment = styled.div`
.commentTitle{
    font-size: 1.2rem;`

const CommentIcon = styled(FaPencilAlt)`
position: relative;
  
    font-size: 2rem;
    color: #000;
`





export default Banner;