import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import { loadMovieListDB } from './redux/modules/movieList';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMovieListDB());
  }, []);

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
