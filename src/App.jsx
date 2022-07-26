import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Category from './components/pages/Category';
// import Category from './components/pages/Category';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Preview from './components/pages/Preview';
import Question from './components/pages/Question';
// import Question from './components/pages/Question';
// import Ready from './components/pages/Ready';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Question />} />
          <Route path="q" element={<Question />} />
          <Route path="c" element={<Category />} />
        </Route>
        <Route path="login" element={<Login />} />
        {/* <Route path="ready" element={<Ready />} /> */}
        {/* <Route path="category" element={<Category />} /> */}
        <Route path="preview/:name" element={<Preview />} />
        {/* <Route path="question" element={<Question />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
