import React from 'react';

function QuestionItem({ id, children }) {
  return (
    <li className="flex items-center" key={id}>
      {children}
    </li>
  );
}

export default QuestionItem;
