/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function QuestionSider() {
  const navigate = useNavigate();
  const quiz = useSelector(state => state.quiz);
  const { id } = useParams();

  const handleClick = (e, questionNumber) => {
    e.preventDefault();

    navigate(`../../q/${questionNumber}`);
  };

  const getIsProgressed = index => {
    if (String(quiz.progressSet[index]) === '0') {
      return false;
    }
    return true;
  }

  const getProgressedText = index => {
    if (String(quiz.progressSet[index]) === '2') {
      return '완료됨';
    }
    if (String(quiz.progressSet[index]) === '1') {
      return '건너뜀';
    }
    return '미완료';
  }

  const getProgressedStyle = index => {
    return `ml-2 rounded-full ${String(quiz.progressSet[index]) === '2'
      ? 'bg-sky-400/10 text-sky-600 dark:text-sky-400'
      : 'dark:highlight-white/5 bg-slate-400/20'
      } px-2 py-0.5 text-xs font-semibold leading-5`;
  }


  return (
    <div className="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block">
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        검토하기
      </h5>
      <ul className="text-sm leading-6 text-slate-700">
        {quiz.questionSet.map((questionNumber, index) => {
          return (
            <li>
              <button
                type="button"
                name={questionNumber}
                className={`py-1 font-medium ${id === questionNumber
                  ? 'text-sky-500 dark:text-sky-400'
                  : 'hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
                  }`}
                onClick={e => handleClick(e, questionNumber)}
              >
                {`질문 ${questionNumber}`}
              </button>
              {getIsProgressed(index) ?
                <span
                  className={getProgressedStyle(index)}
                >
                  {getProgressedText(index)}
                </span> : null}
            </li>
          );
        })}
        {/* <li className="ml-4"><a href="#setting-the-font-family" className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"><svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>Setting the font family</a></li> */}
      </ul>
    </div>
  );
}

export default QuestionSider;
