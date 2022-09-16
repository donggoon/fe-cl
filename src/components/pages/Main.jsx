import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HeaderFrame from '../organisms/HeaderFrame';
import MainFrame from '../organisms/MainFrame';

import { isEmpty } from '../../functions/commonUtil';
import ModalFrame from '../organisms/ModalFrame';

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
      <ModalFrame />
    </>
  );
}

export default Main;
