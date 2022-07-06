import React from 'react';

import Radio from '../atoms/Radio';
import Flexbox from '../atoms/Flexbox';

function LabelTextRadio({ id, name, label, text, children }) {
  return (
    <Flexbox>
      <Flexbox styleoption={{ height: 5, itemAlign: 'center' }}>
        <Radio id={id} name={name} />
      </Flexbox>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {label}
        </label>
        <p className="text-gray-500">{text || children}</p>
      </div>
    </Flexbox>
  );
}

export default LabelTextRadio;
