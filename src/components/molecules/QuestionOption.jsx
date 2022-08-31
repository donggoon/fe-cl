/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { getOptionStyle, isEmpty } from '../../functions/commonUtil';

import CheckIcon from '../atoms/CheckIcon';
import StatusText from '../atoms/StatusText';

// function Check({ id, name, text, checked }) {
function QuestionOption({ type, option, handleChange }) {
  const [checked, setChecked] = useState(option.checked);

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
      className={`group pointer-events-auto w-full cursor-pointer whitespace-pre-wrap rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ${getOptionStyle(
        checked,
        option.correct,
      )} hover:bg-slate-50`}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <div className="font-medium text-slate-900">{option.text}</div>
        <input id={option.seq} name={option.id} type="hidden" value={checked} />
        {option.correct ? (
          <StatusText value={option.correct_yn} />
        ) : (
          <CheckIcon checked={checked} correct={option.correct} />
        )}
      </div>
    </div>
  );
}

export default QuestionOption;
