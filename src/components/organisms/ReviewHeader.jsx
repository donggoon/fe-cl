import React from 'react';
import {
  getCategoryInfoText,
  getFormattedProgressTimeText,
} from '../../functions/commonUtil';
import StatusText from '../atoms/StatusText';
import ReviewChart from '../molecules/ReviewChart';

function ReviewHeader({ history }) {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-8 lg:pb-12">
      <div className="flex items-center lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          {`${history.category_nm} 결과`}
        </h3>
        <StatusText value={history.success_cd} />
      </div>
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <ReviewChart history={history} />
      </div>
      <div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-3 lg:pb-8 lg:pr-4">
        <p className="mb-2 text-sm font-semibold leading-6 text-indigo-600">
          {getCategoryInfoText(
            history.total_q_cnt,
            history.time_limit,
            history.success_per,
          )}
        </p>
        <div className="mt-12">
          <ul className="list-disc space-y-2 pl-4 text-base">
            {String(history.success_cd) === 'F' ? (
              <li className="text-rose-600">
                <span>
                  {`합격하려면 ${history.success_per}%를 달성해야 함`}
                </span>
              </li>
            ) : null}
            <li className="text-slate-700">
              <span className="text-2xl font-extrabold text-slate-900">
                {`${history.correct_per}% `}
              </span>
              <span className="text-slate-900">
                {`정답 (${history.correct_cnt}/${history.total_q_cnt})`}
              </span>
            </li>
            <li className="text-slate-700">
              <span className="text-slate-900">
                {getFormattedProgressTimeText(history.accum_sec)}
              </span>
            </li>
            <li className="text-slate-700">
              <span className="text-slate-900">{history.end_dt}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReviewHeader;
