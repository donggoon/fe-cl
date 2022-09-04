import React from 'react';

function QuestionTitle({ seq, text, children }) {
  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {`질문 ${seq}`}
        </h3>
        <p className="mt-1 whitespace-pre-line text-sm text-gray-600">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default QuestionTitle;
