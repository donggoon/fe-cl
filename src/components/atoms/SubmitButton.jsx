import React from 'react';

function SubmitButton({ name, onClick, children }) {
  return (
    <button
      name={name}
      type="submit"
      onClick={onClick}
      className="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
