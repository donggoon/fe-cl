import React from 'react';

function Radio({ id, name }) {
  return (
    <input
      id={id}
      name={name}
      type="radio"
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    />
  );
}

export default Radio;
