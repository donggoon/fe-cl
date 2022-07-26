import React from 'react';
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderFrame from '../organisms/frames/HeaderFrame';
import MainFrame from '../organisms/frames/MainFrame';
// import Category from './Category';
// import Question from './Question';

function Main() {
  return (
    <>
      <HeaderFrame />
      <MainFrame />
    </>
  );
}

export default Main;
