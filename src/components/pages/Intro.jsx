/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { menuClicked } from '../../features/menu/menuSlice';

function Intro() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [histories, setHistories] = useState([
    {
      id: 9,
      user_id: 1,
      seq: 5,
      category_id: 1,
      question_set:
        '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40',
      progress_set:
        '2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2',
      answer_set:
        '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
      correct_set:
        '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
      start_dt: '2022-08-07T21:15:26',
      end_dt: '2022-08-07T21:16:11',
      success_cd: null,
      question_cnt: 40,
      correct_cnt: 0,
    },
  ]);

  useEffect(() => {
    dispatch(
      menuClicked({
        id: 'Intro',
        name: '시작하기',
        description:
          '새 테스트 또는 진행하던 테스트를 이어서 시작할 수 있습니다.',
      }),
    );

    axios
      // .get(`http://43.200.138.19:9002/api/u/his?user_id=${user.userid}`)
      .get(`http://43.200.138.19:9002/api/u/his?user_id=${user.id}`)
      .then(response => {
        console.log(response);
        setHistories(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="space-y-16">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
          새 테스트
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
              시작하기
            </Link>
          </div>
        </section>
        {/* </div> */}
      </header>
      <div className="relative py-6 sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block md:mr-[3.25rem]" />
        <div className="space-y-16">
          {histories.map(history => {
            return (
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
                    {`category_id : ${history.category_id}`}
                  </h3>
                  <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 mt-2 mb-4">
                    <p>{`progress_set : ${history.progress_set}`}</p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime="2022-06-23T19:40:00.000Z">{`start_dt : ${history.start_dt}`}</time>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Intro;
