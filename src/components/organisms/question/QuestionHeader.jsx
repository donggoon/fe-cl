import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccumSec } from '../../../features/quiz/quizSlice';
import {
  getIsProgressed,
  getProgressTimeText,
} from '../../../functions/commonUtil';

import ClockIcon from '../../atoms/common/icons/ClockIcon';
import QuestionProgressBar from '../../atoms/question/QuestionProgressBar';

function QuestionHeader() {
  const quiz = useSelector(state => state.quiz);
  const dispatch = useDispatch();

  const [progressTime, setProgressTime] = useState(quiz.accumSec);

  const [completeCount, setCompleteCount] = useState(
    quiz.progressSet.filter(value => String(value) === '2').length,
  );
  const [totalCount] = useState(quiz.questionSet.length);
  const [progressPercent, setProgressPercent] = useState(
    (completeCount / totalCount) * 100,
  );

  const [progressTimeText, setProgressTimeText] = useState(
    getProgressTimeText(progressTime + 1),
  );

  useEffect(() => {
    const countup = setInterval(() => {
      dispatch(setAccumSec(progressTime + 1));
      setProgressTime(progressTime + 1);
      setProgressTimeText(getProgressTimeText(progressTime + 1));
    }, 1000);
    return () => clearInterval(countup);
  }, [progressTime]);

  useEffect(() => {
    setCompleteCount(
      quiz.progressSet.filter(value => getIsProgressed(value)).length,
    );
  }, [quiz.progressSet]);

  useEffect(() => {
    setProgressPercent((completeCount / totalCount) * 100);
  }, [completeCount, totalCount]);

  return (
    <div className="relative z-10 p-4">
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
