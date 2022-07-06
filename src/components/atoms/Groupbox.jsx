import React from 'react';

import {
  getSpaceBetween,
  getBorderRadius,
  getBoxShadow,
  getMarginTop,
} from '../../functions/commonStyle';

function Groupbox({ styleoption, children }) {
  return (
    <div
      className={`${getSpaceBetween(
        styleoption.spaceBetween,
      )} ${getBorderRadius(styleoption.borderRadius)} ${getBoxShadow(
        styleoption.boxShadow,
      )} ${getMarginTop(styleoption.marginTop)}`}
    >
      {children}
    </div>
  );
}

// -space-y-px rounded-md shadow-sm
// mt-4 space-y-4

export default Groupbox;
