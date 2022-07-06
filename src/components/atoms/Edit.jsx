import React from 'react';

import { getBorderRadius } from '../../functions/commonStyle';

function Edit({
  id,
  name,
  type,
  autoComplete,
  required,
  placeholder,
  styleoption,
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={`relative block w-full appearance-none ${getBorderRadius(
          styleoption.borderRadius,
        )} border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Edit;
