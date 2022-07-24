import React from 'react';

import Check from '../molecules/Check';

function CheckGroup({ options }) {
  return (
    <div className="relative z-10 p-4">
      <div className="space-y-4">
        {options.map(option => {
          return (
            <Check
              id={option.id}
              name={option.name}
              text={option.text}
              checked={option.checked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CheckGroup;
