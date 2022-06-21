import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import { loadMovieListDB } from './redux/modules/movieList';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { loadUserDB } from './redux/modules/user';
import { loadOneMovieListDB } from './redux/modules/detail';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMovieListDB());
    dispatch(loadUserDB());
  }, []);

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:movieId' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
