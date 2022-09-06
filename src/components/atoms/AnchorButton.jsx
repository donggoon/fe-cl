import React from 'react';

function AnchorButton({ name, onClick, children }) {
  return (
    <button
      name={name}
      type="button"
      className="flex items-center text-sm font-medium text-sky-500"
      onClick={onClick}
    >
      <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6" />
      <span className="relative">{children}</span>
      <svg
        className="relative mt-px ml-2.5 overflow-visible text-sky-300"
        width="3"
        height="6"
        viewBox="0 0 3 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0L3 3L0 6" />
      </svg>
    </button>
  );
}

export default AnchorButton;
