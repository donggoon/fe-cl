import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { isEmpty } from '../../functions/commonUtil';

import ClockIcon from '../atoms/ClockIcon';
import QuestionProgressBar from '../atoms/QuestionProgressBar';

function QuestionHeader() {
  const quiz = useSelector(state => state.quiz);

  const [progressTime, setProgressTime] = useState(
    (new Date().getTime() - new Date(quiz.startDt).getTime()) / 1000,
  );

  const [completeCount, setCompleteCount] = useState(
    quiz.progressSet.filter(value => value === 2).length,
  );
  const [totalCount] = useState(quiz.questionSet.length);
  const [progressPercent, setProgressPercent] = useState(
    (completeCount / totalCount) * 100,
  );

  const getProgressTimeText = originProgressTime => {
    const hour = String(parseInt(originProgressTime / 3600, 10)).padStart(
      2,
      '0',
    );
    const minute = String(
      parseInt(originProgressTime / 60, 10) % 3600,
    ).padStart(2, '0');
    const second = String(parseInt(originProgressTime % 60, 10)).padStart(
      2,
      '0',
    );
    return `${hour}:${minute}:${second}`;
  };

  const [progressTimeText, setProgressTimeText] = useState(
    getProgressTimeText(progressTime + 1),
  );

  useEffect(() => {
    const countup = setInterval(() => {
      setProgressTime(progressTime + 1);
      setProgressTimeText(getProgressTimeText(progressTime + 1));
    }, 1000);
    return () => clearInterval(countup);
  }, [progressTime]);

  useEffect(() => {
    setCompleteCount(quiz.progressSet.filter(value => value === 2).length);
  }, [quiz.progressSet]);

  useEffect(() => {
    setProgressPercent((completeCount / totalCount) * 100);
  }, [completeCount, totalCount]);

  return (
    <div className="relative z-10 p-4">
      {/* <div className="flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10"> */}
      <div className="flex rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        <div className="flex flex-auto items-center border-l border-slate-200/60 pr-4 pl-6 text-[0.8125rem] leading-5 text-slate-700">
          <div>
            {completeCount}/{totalCount}
          </div>
          <QuestionProgressBar progressPercent={progressPercent} />
          <ClockIcon />
          <div className="ml-1">{progressTimeText}</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionHeader;
