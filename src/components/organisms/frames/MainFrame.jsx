import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { Route, Routes, useMatch, Outlet } from 'react-router-dom';
// import Category from '../../pages/Category';
// import Question from '../../pages/Question';

function MainFrame() {
  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
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
        {/* <div
          id="content-wrapper"
          className="prose prose-slate dark:prose-dark relative z-20 mt-8"
        > */}
        <div
          id="content-wrapper"
          className="prose prose-slate relative z-20 mt-8"
        >
          <Outlet />
        </div>
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
      </div>
    </div>
  );
}
export default MainFrame;
