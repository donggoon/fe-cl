/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';

import CheckIcon from '../atoms/CheckIcon';

function Check({ id, name, text, checked }) {
  const [check, setCheck] = useState(checked);

  const checkInput = useRef();

  const onCheck = () => {
    setCheck(!check);
  }
  return (
    // <input
    //   id={id}
    //   name={name}
    //   type="checkbox"
    //   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    // />
    <div
      className={`group pointer-events-auto w-full cursor-pointer rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-2 ${check ? 'ring-indigo-600' : 'ring-indigo-300'
        }  hover:bg-slate-50`}
      onClick={onCheck}
    >
      <div className="flex justify-between">
        <div className="font-medium text-slate-900">{text}</div>
        <input id={id} name={name} type="hidden" ref={checkInput} value={check} />
        <CheckIcon checked={check} />
      </div>
      {/* <div className="mt-1 text-slate-700">
            Last message sent an hour ago
          </div> */}
      {/* <div className="mt-6 font-medium text-slate-900">621 users</div> */}
    </div>
  );
}

export default Check;
