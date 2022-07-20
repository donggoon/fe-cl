import React from 'react';

function Progress() {
  return (
    <div className="relative z-10 p-4">
      <div className="flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        <div className="flex flex-auto items-center border-l border-slate-200/60 pr-4 pl-6 text-[0.8125rem] leading-5 text-slate-700">
          <div>00:51</div>
          <div className="ml-4 flex flex-auto rounded-full bg-slate-100">
            <div className="h-2 w-1/3 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600" />
            <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600" />
          </div>
          <div className="ml-4">55:43</div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
