import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cancelAlert, cancelConfirm } from './features/modal/modalSlice';

import Category from './components/pages/Category';
import Intro from './components/pages/Intro';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Question from './components/pages/Question';
import Register from './components/pages/Register';
import Review from './components/pages/Review';
import Alert from './components/pages/Alert';
import Confirm from './components/pages/Confirm';
import Header from './components/pages/Header';

function App() {
  const dispatch = useDispatch();

  // modal 새로고침해도 활성화 되어있어서 추가
  useEffect(() => {
    dispatch(cancelAlert());
    dispatch(cancelConfirm());
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        >
          <Route index element={<Intro />} />
          <Route path="q/:id" element={<Question />} />
          <Route path="c" element={<Category />} />
          <Route path="r/:id" element={<Review />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Alert />
      <Confirm />
    </Router>
  );
}

export default App;
