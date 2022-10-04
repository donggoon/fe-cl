import React from 'react';

function AnchorButton({ id, current, onClick, children }) {
  return (
    <button
      type="button"
      name={id}
      className={`py-1 font-medium ${
        id === current ? 'text-sky-500' : 'hover:text-slate-900'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AnchorButton;
