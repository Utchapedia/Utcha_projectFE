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
        // console.log(localStorage.getItem('name'));
        // console.log(localStorage.getItem('is_login'));
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
        console.log(res);
        // localStorage.setItem('is_login', res.data.token);
        // localStorage.setItem('name', res.data.name);
        console.log('로그인 성공!!');
        alert('로그인 되었습니다!');
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  },
};

export const movieListApi = {
  loadMovieList: async () => {
    return await instance
      .get('movies')
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
