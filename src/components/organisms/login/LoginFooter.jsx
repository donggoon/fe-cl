import React from 'react';

function LoginFooter() {
  return (
    <footer className="relative shrink-0">
      <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
        <p className="text-center sm:text-left">아이디가 없으신가요?</p>
        <a
          className="inline-flex justify-center rounded-lg py-2.5 px-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
          href="/register"
        >
          <span>
            사용자 등록하기 <span aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </footer>
  );
}

export default LoginFooter;
