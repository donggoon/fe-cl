import React from 'react';

function Divider(padding = 1) {
  return (
    <div className="hidden sm:block" aria-hidden="true">
      <div className={`py-${padding}`}>
        <div className="border-t border-gray-200" />
      </div>
    </div>
  );
}

export default Divider;
