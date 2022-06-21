import axios from 'axios';
import instance from './Request';

export const authApi = {
  signUp: (name, email, password) => {
    instance
      .post('/users/signup', {
        nickName: name,
        userId: email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert('회원가입에 성공했습니다!');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  },

  signIn: (email, password) => {
    instance
      .post('/users/auth', {
        userId: email,
        password,
      })
      .then((res) => {
        // console.log(res);
        // localStorage.setItem('is_login', res.data.token);
        // localStorage.setItem('name', res.data.name);
        console.log('로그인 성공!!');
        localStorage.setItem('is_login', res.data.token);
        localStorage.setItem('nickName', res.data.nickName);
        // console.log(localStorage.getItem('nickName'));
        // console.log(localStorage.getItem('is_login'));
        alert('로그인 되었습니다!');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  },
};

export const movieListApi = {
  loadMovieList: async () => {
    return await instance
      .get('/movies')
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // 오누리 작성 부분(디테일 페이지 테스트)
  loadOneMovieList: async (movie_id) => {
    return await instance
      .get(`/movies/${movie_id}`)
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export const commentApi = {
  createComment: (comment, username) => {
    instance
      .post(`/comment/{postId}`, comment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },
  loadComment: (comment) => {
    instance
      .get(`/comment/{postId}`, comment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },

  updateComment: (comment) => {
    instance
      .put(`/comment/{postId}`, comment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },

  deleteComment: (comment) => {
    instance
      .delete(`/comment/{postId}`, comment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },
};
