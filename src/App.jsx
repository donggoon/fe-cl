import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Category from './components/pages/Category';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Preview from './components/pages/Preview';
import Question from './components/pages/Question';
import Ready from './components/pages/Ready';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/ready" component={Ready} />
      <Route path="/category" component={Category} />
      <Route path="/preview/:name" component={Preview} />
      <Route path="/q" component={Question} />
    </Router>
  );
}

export default App;
