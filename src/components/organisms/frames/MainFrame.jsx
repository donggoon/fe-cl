import React from 'react';

import Question from '../../pages/Question';

function MainFrame() {
  return (
    <div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
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
          <div
            id="content-wrapper"
            className="prose prose-slate dark:prose-dark relative z-20 mt-8"
          >
            <Question />
            {/* <h2 className="group mb-0 flex whitespace-pre-wrap" id="overview">
              <span className="sr-only">Overview</span>
            </h2>
            <p>
              Traditionally, whenever you need to style something on the web,
              you write CSS.
            </p>
            <div className="my-6 flex items-start space-x-4">
              <div className="relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-400 text-white ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400">
                <svg
                  width="6"
                  height="6"
                  className="overflow-visible"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0L6 6M6 0L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute top-full left-[0.46875rem] mt-1 h-[1.375rem] w-px rounded-full bg-rose-200 dark:bg-red-200/25" />
              </div>
              <p className="m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200">
                Using a traditional approach where custom designs require CSS
              </p> 
          </div> */}
            <footer className="mt-12 text-sm leading-6">
              <div className="justify-between border-t border-slate-200 pt-10 pb-28 text-slate-500 dark:border-slate-200/5 sm:flex">
                <div className="mb-6 sm:mb-0 sm:flex">
                  <p>Copyright © 2022 </p>
                </div>
                <a
                  className="hover:text-slate-900 dark:hover:text-slate-400"
                  href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/utility-first.mdx"
                >
                  Edit this page on GitHub
                </a>
              </div>
            </footer>
            <div className="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto border-l border-slate-200 py-10 px-8 xl:block">
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainFrame;
