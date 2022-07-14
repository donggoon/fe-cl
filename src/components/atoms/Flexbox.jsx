import React from 'react';

import {
  getAlignItems,
  getHeight,
  getPaddingY,
} from '../../functions/commonStyle';

function Flexbox({
  styleOption = { alignItems: 'start', paddingY: 3 },
  children,
}) {
  return (
    <div
      className={`flex ${getAlignItems(styleOption.alignItems)} ${getHeight(
        styleOption.height,
      )} ${getPaddingY(styleOption.paddingY)}`}
    >
      {children}
    </div>
  );
}

export default Flexbox;
