import React from 'react';

import CheckIcon from './CheckIcon';

function Check({ id, name, text, checked }) {
  return (
    // <input
    //   id={id}
    //   name={name}
    //   type="checkbox"
    //   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    // />
    <div className="group pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-2 ring-indigo-600 hover:bg-slate-50">
      <div className="flex justify-between">
        <div className="font-medium text-slate-900">{text}</div>
        <input
          id={id}
          name={name}
          type="hidden"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          value={checked}
        />
        <CheckIcon checked={checked} />
      </div>
      {/* <div className="mt-1 text-slate-700">
            Last message sent an hour ago
          </div> */}
      {/* <div className="mt-6 font-medium text-slate-900">621 users</div> */}
    </div>
  );
}

export default Check;
