/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Anchor({ href, children }) {
  return (
    <a
      href={href}
      className="font-medium text-indigo-600 hover:text-indigo-500"
    >
      {children}
    </a>
  );
}

export default Anchor;
