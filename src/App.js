import React from 'react';
import { Routes, Route, useParams, BrowserRouter } from 'react-router-dom';
import './App.css';

import Detail from "./pages/Detail";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>

  </div>
  )
}

export default App;
