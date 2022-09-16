import React from 'react';
import Alert from '../molecules/Alert';
import Confirm from '../molecules/Confirm';

function ModalFrame() {
  return (
    <div className="z-50">
      <Alert />
      <Confirm />
    </div>
  );
}

export default ModalFrame;
