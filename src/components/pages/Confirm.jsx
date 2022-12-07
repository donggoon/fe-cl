import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelConfirm } from '../../features/modal/modalSlice';
import Modal from '../templates/Modal';

function Confirm() {
  const confirm = useSelector(state => state.modal.confirm);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    confirm.callback();
    dispatch(cancelConfirm());
  };

  const handleCancel = () => {
    dispatch(cancelConfirm());
  };

  return (
    <Modal
      type="confirm"
      info={confirm}
      handleConfirm={handleConfirm}
      handleCancel={handleCancel}
    />
  );
}

export default Confirm;
