import React from 'react';

function QuestionProgressBar({ progressPercent }) {
  return (
    <div className="ml-4 flex flex-auto rounded-full bg-slate-100">
      <div
        className="h-2 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600"
        style={{
          width: `${progressPercent}%`,
        }}
      />
      <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600" />
    </div>
  );
}

export default QuestionProgressBar;
