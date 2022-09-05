/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initHistory } from '../../features/history/historySlice';

import { menuChanged } from '../../features/menu/menuSlice';

import { callApi } from '../../functions/commonUtil';
import Divider from '../atoms/Divider';
import QutestionImage from '../atoms/QuestionImage';
import QuestionTitle from '../atoms/QuestionTitle';
import StatusText from '../atoms/StatusText';
import Chart from '../organisms/Chart';
import QuestionOptionGroup from '../organisms/QuestionOptionGroup';

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [history, setHistory] = useState({
    resultDetails: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const itemsRef = useRef([]);

  const getFormattedOptions = options => {
    return options.map(option => {
      return {
        ...option,
        checked: option.select_yn === 'Y',
        correct: option.correct_yn === 'Y',
      };
    });
  };

  useEffect(() => {
    dispatch(
      menuChanged({
        id: 'Review',
        name: '검토하기',
        description: '완료된 테스트 결과를 확인하고 오답을 확인해 보세요.',
      }),
    );

    callApi('get', `/u/his/${id}`)
      .then(response => {
        console.log(response);
        const payload = {
          ...response.data,
          resultDetails: response.data.resultDetails.map(
            (resultDetail, index) => {
              return {
                ...resultDetail,
                handleScroll: e => {
                  e.preventDefault();
                  window.scrollTo({
                    top: itemsRef.current[index].offsetTop,
                    left: 0,
                    behavior: 'smooth',
                  });
                },
              };
            },
          ),
        };
        dispatch(initHistory(payload));
        setHistory(payload);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="flex items-center lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {history.category_nm}
          </h1>
          <StatusText value={history.success_cd} />
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <Chart history={history} />
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">요약</h3>

            <div className="mt-4">
              <ul className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    {`합격 기준 : ${history.success_per}% 정답`}
                  </span>
                </li>

                <li className="text-gray-400">
                  <span className="text-gray-600">
                    {`내 결과 : ${history.correct_per}% 정답 (${history.correct_cnt}/${history.total_q_cnt})`}
                  </span>
                </li>

                <li className="text-gray-400">
                  <span className="text-gray-600">
                    {`테스트 시간 : ${history.start_dt} ~ ${history.end_dt}`}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="mt-10">
            <button
              type="button"
              className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-indigo-50 px-3 text-sm font-semibold text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-2 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              검토하기
              <span className="sr-only">, utility-first fundamentals</span>
              <svg
                className="ml-3 overflow-visible text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
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
            </button>
          </div> */}
        </div>
      </div>
      {isOpen
        ? history.resultDetails.map((resultDetail, index) => {
            const { question, options } = resultDetail;
            return (
              <div
                className="mb-6 overflow-hidden shadow sm:rounded-md"
                key={question.id}
                ref={ref => {
                  itemsRef.current = { ...itemsRef.current, [index]: ref };
                }}
              >
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="space-y-2">
                    <QuestionTitle
                      seq={index + 1}
                      text={question.text}
                      status={question.correct_yn}
                    >
                      <QutestionImage src={question.image} />
                    </QuestionTitle>
                    <Divider padding="1" />
                    <QuestionOptionGroup
                      type={question.type}
                      options={getFormattedOptions(options)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Review;
