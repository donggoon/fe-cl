import React from 'react';

function MainSider() {
  return (
    <div className="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block">
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        Category Name
      </h5>
      <ul className="text-sm leading-6 text-slate-700">
        <li>
          <a
            href="#overview"
            className="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          >
            Previous Question
          </a>
        </li>
        <li>
          <a
            href="#why-not-just-use-inline-styles"
            className="block py-1 text-sky-500 dark:text-sky-400"
          >
            Current Question
          </a>
        </li>
        <li>
          <a
            href="#maintainability-concerns"
            className="block py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          >
            Next Question
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MainSider;
