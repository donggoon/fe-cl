import React, { useState, useEffect } from 'react';
import { getOptionStyle, isEmpty } from '../../../functions/commonUtil';

import CheckIcon from '../../atoms/common/icons/CheckIcon';
import Status from '../../atoms/common/Status';

function QuestionOption({ type, option, handleChange }) {
  const [checked, setChecked] = useState(option.checked);
  const className = `group pointer-events-auto w-full cursor-pointer whitespace-pre-wrap rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ${getOptionStyle(
    checked,
    option.correct,
  )} hover:bg-slate-50`;

  useEffect(() => {
    setChecked(option.checked);
  }, [option]);

  const handleClick = e => {
    e.preventDefault();
    if (!isEmpty(option.select_yn)) {
      return;
    }
    setChecked(!checked);
    if (type === 'S' && !checked) {
      handleChange(option.id);
    } else if (type === 'S' && checked) {
      setChecked(checked);
    }
  };
  return (
    <div
      className={className}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      onKeyDown={() => {}}
    >
      <div className="flex items-center justify-between">
        <div className="font-medium text-slate-900">{option.text}</div>
        <input id={option.seq} name={option.id} type="hidden" value={checked} />
        {option.correct ? (
          <Status value={option.correct_yn} />
        ) : (
          <CheckIcon checked={checked} correct={option.correct} />
        )}
      </div>
    </div>
  );
}

export default QuestionOption;
