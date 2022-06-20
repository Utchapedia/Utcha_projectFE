import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../css/total.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const SwiperTest = ({ movie_list }) => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className='inner-set' style={{ marginBottom: '40px' }}>
      <StyledSwiper
        spaceBetween={12}
        slidesPerView={5}
        slidesPerGroup={5}
        // scrollbar={{ draggable: true }}
        navigation
        draggable={false}
        // pagination={{ clickable: true }}

        //* 반응형 설정
        // breakpoints={{
        //   768: {
        //     slidesPerView: 7,
        //   },
        // }}
      >
        {movie_list.map((list, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Movie key={idx}>
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
                    <div className='rank font-color-gray'>
                      <span>평균</span>
                      <FontAwesomeIcon icon={faStar} width='12' height='10' />
                      <span>{list.star}</span>
                    </div>
                  </div>
                </div>
              </Movie>
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </div>
  );
};

const StyledSwiper = styled(Swiper)`
  position: relative;

  width: 100%;
  height: auto;

  .swiper-button-next {
    top: 35%;
  }

  .swiper-button-prev {
    top: 35%;
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
