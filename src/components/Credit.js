import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Credit = (props) => {
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
      };
    return (
        <div>
        <CreditTitle>
            출연/제작        
        </CreditTitle>
        <Slider {...settings}>
          <div>
            <CreditPageOne>
                <FirstGroup>
						<span>
							<strong>1</strong>st
						</span>
						<p>Nickname</p>
					
					<li>
						<span>
							<strong>2</strong>nd
						</span>
						<p>Nickname</p>
					</li>
					<li>
						<span>
							<strong>3</strong>rd
						</span>
						<p>Nickname</p>
					</li>
					<li>
						<span>
							<strong>4</strong>th
						</span>
						<p>Nickname</p>
					</li>
                    </FirstGroup>
                    <SecondGroup>
						<span>
							<strong>5</strong>th
						</span>
						<p>Nickname</p>
                        <span>
							<strong>6</strong>th
						</span>
						<p>Nickname</p>
                        <span>
							<strong>7</strong>th
						</span>
						<p>Nickname</p>
                        <span>
							<strong>8</strong>th
						</span>
						<p>Nickname</p>
                    

                    </SecondGroup>

            </CreditPageOne>
          </div>
          <div>
          <CreditPageTwo>
                <ThirdGroup>
						<span>
							<strong>1</strong>st
						</span>
						<p>Nickname</p>
					
					<li>
						<span>
							<strong>2</strong>nd
						</span>
						<p>Nickname</p>
					</li>
					<li>
						<span>
							<strong>3</strong>rd
						</span>
						<p>Nickname</p>
					</li>
					<li>
						<span>
							<strong>4</strong>th
						</span>
						<p>Nickname</p>
					</li>
                    </ThirdGroup>
                    <FourthGroup>
						<span>
							<strong>5</strong>th
						</span>
						<p>Nickname</p>
                        <span>
							<strong>6</strong>th
						</span>
						<p>Nickname</p>
                        <span>
							<strong>7</strong>th
						</span>
						<p>Nickname</p>
                        <span>
							<strong>8</strong>th
						</span>
						<p>Nickname</p>
                    

                    </FourthGroup>

            </CreditPageTwo>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          
        </Slider>


        </div>
    );
  }
  const CreditTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  `
  
  const CreditPageOne = styled.div`
  
  `

  const FirstGroup = styled.div`
  float: left;
  width: 50%;
  background-color: tomato;
  `

  const SecondGroup = styled.div`
  float: right;
  width: 50%;
  background-color: skyblue;
  ` 

  const CreditPageTwo = styled.div`
  
  `

  const ThirdGroup = styled.div`
  float: left;
  width: 50%;
  background-color: tomato;
  `

  const FourthGroup = styled.div`
  float: right;
  width: 50%;
  background-color: skyblue;
  `
    





export default Credit;