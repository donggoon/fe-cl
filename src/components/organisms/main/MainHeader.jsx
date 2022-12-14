import React from 'react';

import { useSelector } from 'react-redux';

function MainHeader() {
  const menu = useSelector(state => state.menu);

  return (
    <header id="header" className="relative z-20">
      <div>
        <p className="mb-2 text-sm font-semibold leading-6 text-indigo-600">
          {menu.id}
        </p>
        <div className="flex items-center">
          <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {menu.name}
          </h1>
        </div>
      </div>
      <p className="mt-2 text-lg text-slate-700">{menu.description}</p>
    </header>
  );
}

export default MainHeader;
