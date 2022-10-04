import React from 'react';

function LoginInput({ type, id, name, required, placeholder, children }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {children}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default LoginInput;
