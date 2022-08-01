/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className="space-y-16">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
          테스트 정보
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          아래 버튼을 클릭하여 새로운 테스트를 시작할 수 있습니다.
        </p>
        {/* <div className="mt-8 flex lg:mt-0 lg:shrink-0"> */}
        <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
          <div className="mt-3 flex grow px-2">
            <Link
              to="../c"
              className="flex-auto rounded-md border-y border-transparent bg-sky-500 py-2 px-3 text-sm font-semibold text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 dark:hover:bg-sky-400 dark:focus:ring-sky-700 dark:focus:ring-offset-slate-900"
            >
              새 테스트
            </Link>
          </div>
        </section>
        {/* </div> */}
      </header>
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
    </div>
  );
}

export default Intro;
