import React from 'react';
import { Link } from 'react-router-dom';

function IntroHeader() {
  return (
    <div className="rounded-md border-2 border-solid border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
          <span className="block">새 테스트를 시작하시나요?</span>
          <span className="block text-indigo-600">
            시작하기 버튼을 눌러 테스트를 시작하세요.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="../c"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroHeader;
