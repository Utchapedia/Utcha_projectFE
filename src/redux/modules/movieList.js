// movieList.js
import instance from '../../shared/Request';
import { movieListApi } from '../../shared/api';

// Actions
const LOAD = 'movieList/LOAD';

const initialState = {
  list: {title: "마녀(魔女) Part2. The Other One",
  originalName: "마녀(魔女) Part2. The Other One",
year: 2022,
genre : '액션',
country : '한국',
duration: '2시간 몇분',
age : '15세 관람가',
description : '"통제불능의 존재가 세상 밖으로 나왔다!`자윤`이 사라진 뒤, 정체불명의 집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 `아크`가 초토화된다. 그곳에서 홀로 살아남은 `소녀`는 생애 처음 세상 밖으로 발을 내딛고 우연히 만난 `경희`의 도움으로 농장에서 지내며 따뜻한 일상에 적응해간다. 한편, `소녀`가 망실되자 행방을 쫓는 책임자 `장`과 마녀 프로젝트의 창시자 `백총괄`의 지령을 받고 제거에 나선 본사 요원 `조현`, `경희`의 농장 소유권을 노리는 조직의 보스 `용두`와 상해에서 온 의문의 4인방까지 각기 다른 목적을 지닌 세력이 하나 둘 모여들기 시작하면서 `소녀`안에 숨겨진 본성이 깨어나는데…모든 것의 시작,더욱 거대하고 강력해진 마녀가 온다.',
posterUrl : "https://an2-img.amz.wtchn.net/image/v2/D-JbuDyVJHU3ryYaII9f7A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UWTFNek0yT1RFeU16TTNOREExTWpZMU5DSjkuOTAtZjZVZzM2aHlCcjRUdVVHVXZxeXdtb2ZNTEs4bGxTZEN0alY1TTFySQ",
originalUrl : "https://an2-img.amz.wtchn.net/image/v2/A_2H7CpybTzRqcjyuIGjew.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5URTFOREEzTWpReU5qRTJNemsxTkRZaWZRLmkxX1BMT2hqUGxQSzlWYVZPdVN2QUJ4eW0ydDBCbGpiaGQ2cWxRUTZubEE",   
galleryUrls: [
  "https://an2-img.amz.wtchn.net/image/v2/SDVIUK9wIxRl4YeLpSn7PQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU16TTJPVEV5TXpNM05EQTFNalkxTkNJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuc0p0ajhudmJGRkdhcXRqaE9EQkVRSEpVN2hWSXVPOFFEZWl0VlJuMDl3VQ",
  "https://an2-img.amz.wtchn.net/image/v2/nPfIjVA-u12Vaq05I063Kw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU5EWXhNalk1TURVME1qa3pOVGd3TkNJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuanlsdlF2SW5CdjRSUFBpWFkxVUNqOFBOLTh6QmQ4R0pLSUpZYzBCX3plQQ",
  "https://an2-img.amz.wtchn.net/image/v2/zSdBblEGE0-kOzQ2aLlA3A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU16TTJPVEV5TXpRNU16WXpOemd3TXlJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuT0Q3a0dtd3hncXNBREpfZ01lLWZjckRFV0hHdi1KX1ExYXRsQ3VfekZFRQ",
  "https://an2-img.amz.wtchn.net/image/v2/ZHA6mmvHnBJcK9ht-S0I-Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMU1qUXpNVFV3T0RZMk56QXdOakU0TlNJc0luRWlPamd3TENKM0lqb3hPVEl3ZlEuNjBaeDhzVGJGdmhwbWJ4QVgwSExFZnBwSGJqUV9hNDFOSmVrSW5TSjBPcw"
],
videoUrls: [
  {
      "title": "[마녀 2] 메인 예고편",
      "url": "https://www.youtube.com/watch?v=0zjDQe4LnAA"
  },
  {
      "title": "[마녀 2] 1급 기밀 티저 예고편",
      "url": "https://www.youtube.com/watch?v=kB1_NYSVYx8"
  }
],
}
};

// middlewares
export const loadMovieListDB = () => {
  return async function (dispatch) {
    // 만들어둔 instance에 보낼 요청 타입과 주소로 요청.
    const data = await movieListApi.loadMovieList();
    // console.log(data.data[0].movies);
    dispatch(loadMovieList(data.data[0].movies));
  };
};

// Actions Creators
export function loadMovieList(movie_list) {
  return { type: LOAD, movie_list };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'movieList/LOAD': {
      return { list: action.movie_list };
    }
    default:
      return state;
  }
}
