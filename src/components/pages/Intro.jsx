/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { menuChanged } from '../../features/menu/menuSlice';
import {
  callApi,
  getFormattedQuizInfo,
  isEmpty,
} from '../../functions/commonUtil';

import { initQuiz } from '../../features/quiz/quizSlice';
import StatusText from '../atoms/StatusText';
import IntroHeader from '../organisms/IntroHeader';
import AnchorButton from '../atoms/AnchorButton';

function Intro() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [histories, setHistories] = useState([]);

  useEffect(() => {
    if (!isEmpty(user.id)) {
      dispatch(
        menuChanged({
          id: 'Intro',
          name: '시작하기',
          description:
            '새 테스트 또는 진행하던 테스트를 이어서 시작할 수 있습니다.',
        }),
      );

      callApi('get', `/u/his?user_id=${user.id}`)
        .then(response => {
          const payload = response.data.map(data => {
            return getFormattedQuizInfo(data);
          });
          setHistories(payload);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const getProgressCnt = progressSet => {
    return progressSet.filter(value => value === '2' || value === '1').length;
  };

  const handleContinueClick = history => {
    dispatch(initQuiz(history));

    const continueIndex = history.progressSet.findIndex(value => value === '0');

    if (continueIndex < 0) navigate(`/q/${history.questionSet[0]}`);
    else navigate(`/q/${history.questionSet[continueIndex]}`);
  };

  const handleReviewClick = history => {
    navigate(`/r/${history.id}`);
  };

  return (
    <div className="mt-8 space-y-4 sm:mt-10">
      <ul className="divide-y divide-gray-100">
        {histories.map(history => {
          return (
            <li key={history.id}>
              <div className="group relative py-6 sm:rounded-2xl">
                <div className="absolute -inset-x-4 -inset-y-px bg-gray-50 opacity-0 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl lg:-inset-x-8" />
                <div className="relative flex items-center">
                  <div className="relative h-[3.125rem] w-[3.125rem] flex-none sm:h-[3.75rem] sm:w-[3.75rem]">
                    <img
                      className="absolute inset-0 h-full w-full rounded-full object-cover"
                      src={history.logoUrl}
                      alt=""
                    />
                    <div className="absolute inset-0 rounded-full ring-0 ring-inset ring-black/[0.08]" />
                  </div>
                  <dl className="ml-4 flex flex-auto flex-wrap gap-y-1 gap-x-2 overflow-hidden sm:ml-6 sm:grid sm:grid-cols-[auto_1fr_auto_auto] sm:items-center">
                    <div className="col-span-2 mr-2.5 flex-none sm:mr-0">
                      <dt className="sr-only">Host</dt>
                      <dd className="text-xs font-semibold leading-6 text-gray-900">
                        Amazon Web Service
                      </dd>
                    </div>
                    <div className="col-start-3 row-start-2 -ml-2.5 sm:ml-0 sm:pl-6">
                      <dt className="sr-only">Category</dt>
                      <dd className="flex items-center text-xs leading-6 text-gray-600">
                        <StatusText value={history.successCd} />
                      </dd>
                    </div>
                    <div className="col-span-2 col-start-1 w-full flex-none">
                      <dt className="sr-only">Category</dt>
                      <dd className="text-[0.9375rem] font-semibold leading-6 text-gray-900">
                        <button
                          type="button"
                          onClick={() => {
                            if (isEmpty(history.successCd)) {
                              return handleContinueClick(history);
                            }
                            return handleReviewClick(history);
                          }}
                        >
                          <span className="absolute -inset-x-4 inset-y-[calc(-1*(theme(spacing.6)+1px))] sm:-inset-x-6 sm:rounded-2xl lg:-inset-x-8" />
                          {history.categoryNm}
                        </button>
                      </dd>
                    </div>
                    <div className="mr-2.5 flex-none">
                      <dt className="sr-only">Progress</dt>
                      <dd className="text-xs leading-6 text-gray-600">
                        {`총 ${
                          history.questionSet.length
                        }문제 중 ${getProgressCnt(
                          history.progressSet,
                        )} 문제 완료`}
                      </dd>
                    </div>
                    <div className="col-start-4 row-start-2 ml-auto flex-none sm:pl-6">
                      <dt className="sr-only">Start</dt>
                      <dd className="text-xs leading-6 text-gray-400">
                        <time dateTime={history.start_dt}>
                          {new Intl.DateTimeFormat('ko-KR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }).format(new Date(history.startDt))}
                        </time>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <IntroHeader />
    </div>
  );
}

export default Intro;
