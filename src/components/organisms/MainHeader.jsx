import React from 'react';

function MainHeader() {
  return (
    <header id="header" className="relative z-20">
      <div>
        <p className="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
          Parent Category Name
        </p>
        <div className="flex items-center">
          <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
            Category Name
          </h1>
        </div>
      </div>
      <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
        Description For Test
      </p>
    </header>
  );
}

export default MainHeader;
