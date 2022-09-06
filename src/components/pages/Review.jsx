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
import Chart from '../molecules/Chart';
import QuestionOptionGroup from '../molecules/QuestionOptionGroup';

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [history, setHistory] = useState({
    resultDetails: [],
  });
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
      <div className="mx-auto max-w-2xl px-4 pt-5 pb-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-8 lg:pb-12">
        <div className="flex items-center lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            {`${history.category_nm} 결과`}
          </h3>
          <StatusText value={history.success_cd} />
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <Chart history={history} />
        </div>
        <div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-3 lg:pb-8 lg:pr-4">
          <p className="mb-2 text-sm font-semibold leading-6 text-indigo-600">{`${history.total_q_cnt}개의 질문  |  2시간  |  합격하려면 ${history.success_per}%의 정답을 달성해야함`}</p>
          <div className="mt-4">
            <ul className="list-disc space-y-2 pl-4 text-xl">
              {String(history.success_cd) === 'F' ? (
                <li className="text-rose-600">
                  <span>
                    {`합격하려면 ${history.success_per}%를 달성해야 함`}
                  </span>
                </li>
              ) : null}
              <li className="text-slate-700">
                <span className="text-3xl font-extrabold text-slate-900">
                  {`${history.correct_per}% `}
                </span>
                <span className="text-slate-900">
                  {`정답 (${history.correct_cnt}/${history.total_q_cnt})`}
                </span>
              </li>
              <li className="text-slate-700">
                <span className="text-slate-900">1시간 52분</span>
              </li>
              <li className="text-slate-700">
                <span className="text-slate-900">{history.end_dt}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {history.resultDetails.map((resultDetail, index) => {
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
      })}
    </div>
  );
}

export default Review;
