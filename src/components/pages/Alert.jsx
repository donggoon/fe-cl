import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cancelAlert } from '../../features/modal/modalSlice';
import Modal from '../templates/Modal';

function Alert() {
  const alert = useSelector(state => state.modal.alert);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    alert.callback();
    dispatch(cancelAlert());
  };

  return <Modal type="alert" info={alert} handleConfirm={handleConfirm} />;
}

export default Alert;
