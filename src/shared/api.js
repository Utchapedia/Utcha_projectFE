import axios from 'axios';
import instance from './Request';

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
