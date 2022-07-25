import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderFrame from '../organisms/frames/HeaderFrame';
import MainFrame from '../organisms/frames/MainFrame';
// import Category from './Category';
import Question from './Question';

function Main() {
  return (
    // <Router>
    <>
      <HeaderFrame />
      <MainFrame>
        <Question />
        {/* <Route path="/q" component={Question} />
        <Route path="/c" component={Category} /> */}
      </MainFrame>
    </>
    // </Router>
  );
}

export default Main;
