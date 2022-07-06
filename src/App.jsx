import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Question from './components/pages/Question';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/question" component={Question} />
    </BrowserRouter>
  );
}

export default App;
