import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import '../css/total.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const SwiperTest = ({ movie_list }) => {
  const navigate = useNavigate();

  SwiperCore.use([Navigation, Pagination]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const settings = {
    spaceBetween: 12,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    draggable: false,
    scrollbar: false,
    breakpoints: {
      900: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
    onBeforeInit: (swiper) => {
      // 초기 설정
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    },
  };

  return (
    <div className='inner-set' style={{ marginBottom: '40px', position: 'relative' }}>
      <StyledRoot>
        <Swiper {...settings}>
          {movie_list.map((list, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Movie
                  key={idx}
                  onClick={() => {
                    navigate(`/detail/${list.movieId}`);
                  }}
                >
                  <div>
                    <div className='poster-img'>
                      <img src={list.originalTitle} alt='posterImg' />
                      <div>{idx + 1}</div>
                    </div>
                    <div className='movie-info font-color-black'>
                      <span>{list.title}</span>
                      <span>
                        {list.year} ・ {list.country}
                      </span>
                    </div>
                  </div>
                </Movie>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button className='left-btn' ref={prevRef}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <button className='right-btn' ref={nextRef}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        {/* <button className='right-btn' ref={nextRef}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button> */}
      </StyledRoot>
    </div>
  );
};

const StyledRoot = styled.div`
  width: 100%;

  button {
    position: absolute;
    z-index: 100;

    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid rgb(249, 249, 249);
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;
    background-size: 12px;
    width: 34px;
    height: 34px;
    cursor: pointer;

    color: #c1c1c1;
    padding: 0;
  }

  .left-btn {
    top: 0;
    left: 0;
    margin-left: calc(250px - 12px);
    margin-top: 9%;
  }

  .right-btn {
    top: 0;
    right: 0;
    margin-top: 9%;
    margin-right: calc(250px - 12px);
  }

  .swiper {
    &-wrapper,
    &-container {
      width: 120rem;
      margin: 0;
    }
    &-container {
      margin: 0 3.2rem;
    }
    &-button-disabled {
      visibility: hidden;
    }
  }
`;

const Movie = styled.div`
  min-width: 100%;

  display: block;
  flex-flow: column nowrap;

  box-sizing: border-box;

  .poster-img {
    display: inline-flex;

    margin-bottom: 10px;
    position: relative;

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

    div {
      background-color: rgba(0, 0, 0, 0.77);
      color: #fff;
      width: 24px;
      height: 24px;

      position: absolute;
      top: 5px;
      left: 5px;

      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .movie-info {
    display: flex;
    flex-flow: column nowrap;

    & > :nth-child(1) {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }

    & > :nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 21px;
      padding-bottom: 1px;
    }
  }

  .rank {
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 0;
    line-height: 14px;
    display: flex;

    * {
      margin-right: 2px;
    }
  }
`;

export default SwiperTest;

// import React from 'react';
// import styled from 'styled-components';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
// import { useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// import '../css/total.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/bundle';

// const MovieListBox = ({ movie_list }) => {
//   const navigate = useNavigate();

//   SwiperCore.use([Navigation, Pagination]);

//   return (
//     <div className='inner-set' style={{ marginBottom: '40px' }}>
//       <StyledSwiper
//         spaceBetween={12}
//         slidesPerView={4}
//         slidesPerGroup={4}
//         // scrollbar={{ draggable: true }}
//         navigation
//         draggable={false}
//         // pagination={{ clickable: true }}

//         //* 반응형 설정
//         breakpoints={{
//           900: {
//             slidesPerView: 5,
//             slidesPerGroup: 5,
//           },
//         }}
//       >
//         {movie_list.map((list, idx) => {
//           return (
//             <SwiperSlide key={idx}>
//               <Movie
//                 key={idx}
//                 onClick={() => {
//                   navigate(`/detail/${list.movieId}`);
//                 }}
//               >
//                 <div>
//                   <div className='poster-img'>
//                     <img src={list.originalTitle} alt='posterImg' />
//                     <div>{idx + 1}</div>
//                   </div>
//                   <div className='movie-info font-color-black'>
//                     <span>{list.title}</span>
//                     <span>
//                       {list.year} ・ {list.country}
//                     </span>
//                   </div>
//                 </div>
//               </Movie>
//             </SwiperSlide>
//           );
//         })}
//       </StyledSwiper>
//     </div>
//   );
// };

// const StyledSwiper = styled(Swiper)`
//   position: relative;

//   width: 100%;
//   height: auto;

//   .swiper-button-next {
//     top: 35%;
//   }

//   .swiper-button-prev {
//     top: 35%;
//   }
// `;

// const Movie = styled.div`
//   min-width: 100%;

//   display: block;
//   // flex-flow: column nowrap;

//   box-sizing: border-box;

//   .poster-img {
//     display: inline-flex;

//     margin-bottom: 10px;
//     position: relative;

//     img {
//       width: 100%;
//       height: auto;
//       border-radius: 5px;
//     }

//     div {
//       background-color: rgba(0, 0, 0, 0.77);
//       color: #fff;
//       width: 24px;
//       height: 24px;

//       position: absolute;
//       top: 5px;
//       left: 5px;

//       border-radius: 4px;

//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }

//   .movie-info {
//     display: flex;
//     flex-flow: column nowrap;

//     & > :nth-child(1) {
//       font-size: 16px;
//       font-weight: 500;
//       line-height: 22px;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       margin-bottom: 3px;
//     }

//     & > :nth-child(2) {
//       font-size: 14px;
//       font-weight: 400;
//       letter-spacing: normal;
//       line-height: 21px;
//       padding-bottom: 1px;
//     }
//   }

//   .rank {
//     font-size: 14px;
//     font-weight: 400;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     letter-spacing: 0;
//     line-height: 14px;
//     display: flex;

//     * {
//       margin-right: 2px;
//     }
//   }
// `;

// export default MovieListBox;
