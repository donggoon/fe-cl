import React from 'react';

function QuestionTitle({ id, children }) {
  return (
    <div
      className="w-11/12 p-4 text-base font-medium text-gray-900"
      aria-hidden="true"
    >
      {`Q${id}. ${children}`}
    </div>
  );
}

export default QuestionTitle;
