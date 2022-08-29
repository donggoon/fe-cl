/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import CheckIcon from '../atoms/CheckIcon';

// function Check({ id, name, text, checked }) {
function QuestionOption({ type, option, handleChange }) {
  const [checked, setChecked] = useState(option.checked);
  const className = `group pointer-events-auto w-full cursor-pointer rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-${checked ? '2' : '1'
    } ring-indigo-${checked ? '600' : '300'}
  ${!checked ? 'ring-slate-700/10' : ''} hover:bg-slate-50`;

  useEffect(() => {
    setChecked(option.checked);
  }, [option]);

  const handleClick = e => {
    e.preventDefault();
    setChecked(!checked);
    if (type === 'S' && !checked) {
      handleChange(option.id);
    } else if (type === 'S' && checked) {
      setChecked(checked);
    }
  };
  return (
    <div className={className} onClick={handleClick}>
      <div className="flex justify-between">
        <div className="font-medium text-slate-900">{option.text}</div>
        <input id={option.seq} name={option.id} type="hidden" value={checked} />
        <CheckIcon checked={checked} />
      </div>
    </div>
  );
}

export default QuestionOption;
