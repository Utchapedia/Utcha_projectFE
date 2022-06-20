import React from "react";
import styled from "styled-components";
import GalleryTrailer from "./GalleryTrailer";
import Credit from "./Credit";

const MovieInfo= () => {
    return(
        <MovieInfoContainer>
            <ContainerInner>
                <LeftContent>
                    <DetailInfo style={{ padding: "8px 0px 0px" }}>
                        <BasicInfoTitle>
                            기본 정보
                        </BasicInfoTitle>
                            <BasicInfoAndDesc>
                                <BasicInfo>
                                    '범죄도시'
                                    <br />
                                    <span>'2022' · '한국' · '범죄'</span>
                                    <br />
                                    <span>'1시간 46분' · '15'세</span>
                                </BasicInfo>
                                {/* <hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "24px 20px 0 20px" }} /> */}
                            
                                <Description>
                                    
                                <span>
                                “느낌 오지? 이 놈 잡아야 하는 거”<br />
                                <br />
                                가리봉동 소탕작전 후 4년 뒤, 금천서 강력반은 베트남으로 도주한 용의자를 인도받아 오라는 미션을 받는다. <br />
                                괴물형사 ‘마석도’(마동석)와 ‘전일만’(최귀화) 반장은 현지 용의자에게서 수상함을 느끼고, 
                                그의 뒤에 무자비한 악행을 벌이는 ‘강해상’(손석구)이 있음을 알게 된다. 
                                ‘마석도’와 금천서 강력반은 한국과 베트남을 오가며 역대급 범죄를 저지르는 ‘강해상’을 본격적으로 쫓기 시작하는데...<br />
                                <br />
                                나쁜 놈들 잡는 데 국경 없다!<br />
                                통쾌하고 화끈한 범죄 소탕 작전이 다시 펼쳐진다!<br />
                                </span>
                                    
                                </Description>
                        </BasicInfoAndDesc>
                    </DetailInfo>
                    <Credit />  
                </LeftContent>
                <RightGalleryAndTrailer>
                <GalleryTrailer />
                </RightGalleryAndTrailer>
            </ContainerInner>
        </MovieInfoContainer>
    );

}
const MovieInfoContainer = styled.div`
padding: 28px 0px 48px;
overflow: hidden;`

const ContainerInner = styled.div`
max-width: 976px;
margin: 0px auto;
display: table;
`

const DetailInfo = styled.div`

border: 1px solid;
border-radius: 6px;
background: rgb(255, 255, 255);
overflow: hidden;
border-color: rgb(227, 227, 227) !important;
text-align: left;

`
const LeftContent = styled.div`
width: 640px;
padding: 0px 8px;
display: table-cell
`

const BasicInfoAndDesc = styled.div`
color: rgb(74, 74, 74);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.2px;
line-height: 24px;
margin: 8px 10px;


`

const BasicInfoTitle=styled.div`
color: black;
font-size: 25px;
font-weight: 900;
letter-spacing: -0.7px;
line-height: 28px;
margin: 8px 0px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 10px;
margin-inline-end: 0px;

`
const BasicInfo=styled.div`
color: rgb(74, 74, 74);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.2px;
line-height: 24px;
margin: 8px 0px;
`
const Description = styled.div`
word-break: break-all;
max-height: 300px;
margin: 0px;
overflow: hidden;
font-size: 15px;
font-weight: 400;
line-height: 22px;
white-space: pre-wrap;
letter-spacing: -0.2px;
`



const RightGalleryAndTrailer = styled.div`
border: 1px solid;
border-radius: 6px;
background: rgb(255, 255, 255);
overflow: hidden;
border-color: rgb(227, 227, 227) !important;
@media only screen and (max-width: 1023px) {
    display:none
    }  
max-width: 450px;
padding: 0px 8px;
display: table-cell
`




export default MovieInfo;