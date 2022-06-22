import axios from 'axios';
import instance from './Request';
const token = localStorage.getItem("is_login");

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
  createComment: (comment, username, movie_Id) => {
    instance
      .post(`/comments/${movie_Id}`,
       {
        comment:comment, 
        username:username},
      { headers: { Authorization: `Bearer ${token}` }}
      )
      .then((res) => {
        console.log(res)
        const new_comment ={
          comment: comment, 
          commentId: res.data.wrritenComment.commentId,
          countLikes: res.data.wrritenComment.countLikes,
          createdAt: res.data.wrritenComment.createdAt,
          movieId: res.data.wrritenComment.movieId,
          nickName: res.data.wrritenComment.nickName
        
        }

        console.log(new_comment)
        return res;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  loadComment: (movieId) => {
    instance
      .get(`/comments/${movieId}`)
      .then((res) => {
        console.log(res)
        return res;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  updateComment: (comment, movieId) => {
    instance
      .put(`/comment/${movieId}`, comment)
      // { headers: { Authorization: `Bearer ${token}` }}
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },

  deleteComment: (comment, postId) => {
    instance
      .delete(`/comment/${postId}`, comment)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },
};
