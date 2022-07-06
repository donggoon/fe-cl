import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/pages/Login';
import Question from './components/pages/Question';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/question" component={Question} />
    </Router>
  );
}

export default App;
