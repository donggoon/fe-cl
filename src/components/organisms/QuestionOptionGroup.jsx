import React from 'react';

import QuestionOption from '../molecules/QuestionOption';

function QuestionOptionGroup({ options, children }) {
  const getOptions = _options => {
    return _options.map(option => {
      return <QuestionOption option={option} />;
    });
  };

  return (
    <fieldset>
      <legend className="sr-only">Options</legend>
      <div className="relative z-10 p-4">
        <div className="space-y-4">
          {options ? getOptions(options) : children}
        </div>
      </div>
    </fieldset>
  );
}

export default QuestionOptionGroup;
