import React from 'react';
import Check from '../atoms/Check';
import Flexbox from '../atoms/Flexbox';

function LabelCheck({ id, name, label, children }) {
  return (
    <Flexbox styleoption={{ itemAlign: 'center' }}>
      <Check id={id} name={name} />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        {label || children}
      </label>
    </Flexbox>
  );
}

export default LabelCheck;
