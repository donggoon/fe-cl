import React from 'react';

function ModalContent({ title, message }) {
  return (
    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      <h3
        className="text-lg font-medium leading-6 text-gray-900"
        id="modal-title"
      >
        {title}
      </h3>
      <div className="mt-2">
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}

export default ModalContent;
