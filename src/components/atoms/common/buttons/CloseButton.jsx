import React from 'react';
import CloseIcon from '../icons/CloseIcon';

function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600"
      tabIndex="0"
      onClick={onClick}
    >
      <span className="sr-only">Close navigation</span>
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
