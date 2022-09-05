import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HeaderFrame from '../organisms/frames/HeaderFrame';
import MainFrame from '../organisms/frames/MainFrame';

import { isEmpty } from '../../functions/commonUtil';

function Main() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isEmpty(user.id)) {
      return navigate('/login');
    }
  }, [user.id]);

  return (
    <>
      <HeaderFrame />
      <MainFrame />
    </>
  );
}

export default Main;
