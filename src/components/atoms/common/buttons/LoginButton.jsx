import React from 'react';

function LoginButton({ children }) {
  return (
    <button
      type="submit"
      className="inline-flex w-full justify-center rounded-lg bg-slate-900 py-2.5 px-4 text-sm font-semibold text-white hover:bg-slate-700"
    >
      <span>{children}</span>
    </button>
  );
}

export default LoginButton;
