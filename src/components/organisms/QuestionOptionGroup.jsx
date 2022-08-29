import React from 'react';

import QuestionOption from '../molecules/QuestionOption';

function QuestionOptionGroup({ type, options, setOptions, children }) {
  const handleChange = id => {
    setOptions(
      options.map(option => {
        if (id !== option.id) {
          return {
            ...option,
            checked: false,
          };
        }
        return option;
      }),
    );
  };

  const getOptions = _options => {
    return _options.map(option => {
      return (
        <QuestionOption
          type={type}
          option={option}
          handleChange={handleChange}
        />
      );
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
