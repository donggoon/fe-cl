import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderFrame from '../organisms/frames/HeaderFrame';
import MainFrame from '../organisms/frames/MainFrame';

function Main() {
  return (
    <div>
      <HeaderFrame />
      <MainFrame />
    </div>
  );
}

export default Main;
