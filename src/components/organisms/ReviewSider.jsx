import React from 'react';
import { useSelector } from 'react-redux';
import StatusText from '../atoms/StatusText';

function ReviewSider() {
  const history = useSelector(state => state.history);

  return (
    <div className="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block">
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        바로가기
      </h5>
      <ul className="text-sm leading-6 text-slate-700">
        {history.resultDetails.map((resultDetail, index) => {
          const { question } = resultDetail;
          return (
            <li className="flex items-center" key={question.id}>
              <button
                type="button"
                name={question.id}
                className={`py-1 font-medium ${
                  // id === question.id
                  // ? 'text-sky-500 dark:text-sky-400'
                  // : 'hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
                  'hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
                }`}
                onClick={resultDetail.handleScroll}
              >
                {`질문 ${index + 1}`}
              </button>
              <StatusText value={question.correct_yn} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReviewSider;
