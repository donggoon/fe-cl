import React from 'react';
import { isEmpty } from '../../functions/commonUtil';
import StatusText from './StatusText';

function QuestionTitle({ seq, text, status, children }) {
  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <div className="flex items-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {`질문 ${seq}`}
          </h3>
          {!isEmpty(status) ? <StatusText value={status} /> : null}
        </div>
        <p className="mt-1 whitespace-pre-wrap text-sm text-gray-600">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default QuestionTitle;
