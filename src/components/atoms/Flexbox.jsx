import React from 'react';

import { getAlignItems, getHeight } from '../../functions/commonStyle';

function Flexbox({ styleoption = { alignItems: 'start' }, children }) {
  return (
    <div
      className={`flex ${getAlignItems(styleoption.alignItems)} ${getHeight(
        styleoption.height,
      )}`}
    >
      {children}
    </div>
  );
}

export default Flexbox;
