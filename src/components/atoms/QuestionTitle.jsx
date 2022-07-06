import React from 'react';

function QuestionTitle({ id, children }) {
  return (
    <div className="text-base font-medium text-gray-900" aria-hidden="true">
      {`Q${id}. ${children}`}
    </div>
  );
}

export default QuestionTitle;
