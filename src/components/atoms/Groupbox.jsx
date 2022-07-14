import React from 'react';

import {
  getSpaceBetween,
  getBorderRadius,
  getBoxShadow,
  getMarginTop,
  getPaddingTop,
} from '../../functions/commonStyle';

function Groupbox({ styleOption, children }) {
  return (
    <div
      className={`${getSpaceBetween(
        styleOption.spaceBetween,
      )} ${getBorderRadius(styleOption.borderRadius)} ${getBoxShadow(
        styleOption.boxShadow,
      )} ${getMarginTop(styleOption.marginTop)} ${getPaddingTop(
        styleOption.paddingTop,
      )}`}
    >
      {children}
    </div>
  );
}

export default Groupbox;
