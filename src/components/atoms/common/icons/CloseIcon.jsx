import React from 'react';

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 10 10"
      className="h-2.5 w-2.5 overflow-visible"
      aria-hidden="true"
    >
      <path
        d="M0 0L10 10M10 0L0 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CloseIcon;
