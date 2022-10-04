import React from 'react';

function ConfirmButton({ color, onClick, children }) {
  return (
    <button
      type="button"
      className={`inline-flex w-full justify-center rounded-md border border-transparent bg-${color}-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ConfirmButton;
