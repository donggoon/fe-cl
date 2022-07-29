/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function MyPage() {
  return (
    <>
      <div className="py-6 lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h5 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Donggun Kim
          </h5>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Full-time
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              $120k &ndash; $140k
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Closing on January 9, 2020
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              View
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Publish
            </button>
          </span>

          <div className="relative ml-3 sm:hidden">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              id="mobile-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              More
              <svg
                className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className="absolute right-0 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
              tabIndex="-1"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="mobile-menu-item-0"
              >
                Edit
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="mobile-menu-item-1"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-6 sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block md:mr-[3.25rem]" />
        <div className="space-y-16">
          <article className="group relative">
            <div className="absolute -inset-y-2.5 -inset-x-4 group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6" />
            <svg
              viewBox="0 0 9 9"
              className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block md:mr-12"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="4.5"
                stroke="currentColor"
                className="fill-white dark:fill-slate-900"
                strokeWidth="2"
              />
            </svg>
            <div className="relative">
              <h3 className="pt-8 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 lg:pt-0">
                AWS 1230012990213i09
              </h3>
              <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 mt-2 mb-4">
                <p>총 100 문항 중 80 문항 정답</p>
              </div>
              <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                <dt className="sr-only">Date</dt>
                <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                  <time dateTime="2022-06-23T19:40:00.000Z">June 24, 2022</time>
                </dd>
              </dl>
            </div>
            <a
              className="flex items-center text-sm font-medium text-sky-500"
              href="/blog/2022-06-23-tailwind-templates-and-all-access"
            >
              <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6" />
              <span className="relative">Continue</span>
              <svg
                className="relative mt-px ml-2.5 overflow-visible text-sky-300 dark:text-sky-700"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </article>
          <article className="group relative">
            <div className="absolute -inset-y-2.5 -inset-x-4 group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6" />
            <svg
              viewBox="0 0 9 9"
              className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block md:mr-12"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="4.5"
                stroke="currentColor"
                className="fill-white dark:fill-slate-900"
                strokeWidth="2"
              />
            </svg>
            <div className="relative">
              <h3 className="pt-8 text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 lg:pt-0">
                ADsP 12312312-312--
              </h3>
              <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 mt-2 mb-4">
                <p>총 50 문항 중 30 문항 정답</p>
              </div>
              <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                <dt className="sr-only">Date</dt>
                <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                  <time dateTime="2022-06-07T15:00:00.000Z">June 8, 2022</time>
                </dd>
              </dl>
            </div>
            <a
              className="flex items-center text-sm font-medium text-sky-500"
              href="/blog/tailwindcss-v3-1"
            >
              <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6" />
              <span className="relative">Continue</span>
              <svg
                className="relative mt-px ml-2.5 overflow-visible text-sky-300 dark:text-sky-700"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </>
  );
}

export default MyPage;
