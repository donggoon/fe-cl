import React from 'react';
import { getOptionColor } from '../../../../functions/commonUtil';

function CheckIcon({ checked, correct }) {
  return (
    <svg className="h-5 w-5 flex-none" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
        fill={getOptionColor(checked, correct)}
      />
    </svg>
  );
}

export default CheckIcon;
