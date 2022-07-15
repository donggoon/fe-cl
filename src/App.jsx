import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Category from './components/pages/Category';
import Login from './components/pages/Login';
import Preview from './components/pages/Preview';
import Question from './components/pages/Question';
import Ready from './components/pages/Ready';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/ready" component={Ready} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/preview/:name" component={Preview} />
      <Route exact path="/question" component={Question} />
    </BrowserRouter>
  );
}

export default App;
