import React from 'react';
import Check from '../atoms/Check';
import Flexbox from '../atoms/Flexbox';

function LabelCheck({ id, name, label, children }) {
  return (
    <Flexbox styleoption={{ itemAlign: 'center', paddingTop: 6 }}>
      <Check id={id} name={name} />
      <label htmlFor="remember-me" className="ml-3 text-sm text-gray-600">
        {label || children}
      </label>
    </Flexbox>
  );
}

export default LabelCheck;
