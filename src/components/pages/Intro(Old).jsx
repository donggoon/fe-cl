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
  }, []);

  const getProgressCnt = progressSet => {
    return progressSet.filter(value => value === '2' || value === '1').length;
  };

  const handleContinueClick = history => {
    dispatch(initQuiz(history));

    const continueIndex = history.progressSet.findIndex(
      value => value === '0' || value === '1',
    );

    if (continueIndex < 0) navigate(`/q/${history.questionSet[0]}`);
    else navigate(`/q/${history.questionSet[continueIndex]}`);
  };

  const handleReviewClick = history => {
    navigate(`/r/${history.id}`);
  };

  return (
    <div className="space-y-16">
      <IntroHeader />
      <div className="relative py-6 sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block md:mr-[3.25rem]" />
        <div className="space-y-16">
          {histories.map(history => {
            return (
              <article key={history.id} className="group relative">
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
                    {history.categoryNm}
                    <StatusText value={history.successCd} />
                  </h3>
                  <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 mt-2 mb-4">
                    <p>{`총 ${
                      history.questionSet.length
                    }문제 중 ${getProgressCnt(
                      history.progressSet,
                    )} 문제 완료`}</p>
                  </div>
                  <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt className="sr-only">Date</dt>
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time dateTime={history.start_dt}>
                        {new Intl.DateTimeFormat('ko-KR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }).format(new Date(history.startDt))}
                      </time>
                    </dd>
                  </dl>
                </div>
                {isEmpty(history.successCd) ? (
                  <AnchorButton onClick={() => handleContinueClick(history)}>
                    계속하기
                  </AnchorButton>
                ) : (
                  <AnchorButton onClick={() => handleReviewClick(history)}>
                    검토하기
                  </AnchorButton>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Intro;
