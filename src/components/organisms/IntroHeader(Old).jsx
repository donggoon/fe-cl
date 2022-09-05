import React from 'react';
import { Link } from 'react-router-dom';

function IntroHeader() {
  return (
    <header className="py-16 sm:text-center">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl">
        새 테스트
      </h1>
      <p className="text-lg text-slate-700 dark:text-slate-400">
        아래 버튼을 클릭하여 새로운 테스트를 시작할 수 있습니다.
      </p>
      <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
        <div className="mt-3 flex grow px-2">
          <Link
            to="../c"
            className="flex-auto rounded-md border-y border-transparent bg-sky-500 py-2 px-3 text-sm font-semibold text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 dark:hover:bg-sky-400 dark:focus:ring-sky-700 dark:focus:ring-offset-slate-900"
          >
            시작하기
          </Link>
        </div>
      </section>
    </header>
  );
}

export default IntroHeader;
