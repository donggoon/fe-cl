import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import StatusText from '../atoms/StatusText';

function ReviewSider() {
  const navigate = useNavigate();
  const quiz = useSelector(state => state.quiz);
  const { id } = useParams();

  const handleClick = (e, questionNumber) => {
    e.preventDefault();

    navigate(`../../q/${questionNumber}`);
  };

  return (
    <div className="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block">
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        바로가기
      </h5>
      <ul className="text-sm leading-6 text-slate-700">
        {quiz.questionSet.map((questionNumber, index) => {
          return (
            <li>
              <button
                type="button"
                name={questionNumber}
                className={`py-1 font-medium ${
                  id === questionNumber
                    ? 'text-sky-500 dark:text-sky-400'
                    : 'hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
                }`}
                onClick={e => handleClick(e, questionNumber)}
              >
                {`질문 ${questionNumber}`}
              </button>
              <StatusText value={quiz.progressSet[index]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReviewSider;
