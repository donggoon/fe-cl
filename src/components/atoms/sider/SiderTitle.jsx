import React from 'react';

function SiderTitle({ title, children }) {
  return (
    <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900">
      {title || children}
    </h5>
  );
}

export default SiderTitle;
