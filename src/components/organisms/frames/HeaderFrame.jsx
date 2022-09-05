import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../../features/user/userSlice';

function HeaderFrame() {
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    console.log('logout');
    dispatch(userLogin({}));
  };
  return (
    <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center">
            <a
              className="mr-3 w-[2.0625rem] flex-none overflow-visible md:w-auto"
              href="/"
            >
              <span className="sr-only">QUIZ home page</span>
              <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
                QUIZ
              </h1>
            </a>
            <div className="relative ml-auto hidden items-center lg:flex">
              <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <Link to="c">
                    <li className="hover:text-sky-500 dark:hover:text-sky-400">
                      Category
                    </li>
                  </Link>
                  <a href="http://43.200.138.19:9002/">
                    <li className="hover:text-sky-500 dark:hover:text-sky-400">
                      Admin
                    </li>
                  </a>
                  <button type="button" onClick={handleLogout}>
                    <li className="hover:text-sky-500 dark:hover:text-sky-400">
                      Logout
                    </li>
                  </button>
                </ul>
              </nav>
              <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <a
                  href="https://github.com/le-cl/fe-cl"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">quiz on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="-my-1 ml-auto flex lg:hidden">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderFrame;
