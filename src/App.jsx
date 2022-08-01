import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Category from './components/pages/Category';
import Intro from './components/pages/Intro';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import MyPage from './components/pages/MyPage';
import Question from './components/pages/Question';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Intro />} />
          <Route path="q" element={<Question />} />
          <Route path="c" element={<Category />} />
          <Route path="m" element={<MyPage />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
