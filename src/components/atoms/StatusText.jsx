import React from 'react';
import {
  getIsProgressed,
  getStatusStyle,
  getStatusText,
} from '../../functions/commonUtil';

function StatusText({ value }) {
  return getIsProgressed(value) ? (
    <span
      className={`ml-2 rounded-full ${getStatusStyle(
        value,
      )} max-h-6 min-w-fit px-2 py-0.5 text-xs font-semibold`}
    >
      {getStatusText(value)}
    </span>
  ) : null;
}

export default StatusText;
