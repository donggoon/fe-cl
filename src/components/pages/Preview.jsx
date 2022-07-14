/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Preview() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Practice Test</span>
          <span className="block text-indigo-600">
            AWS Certified Developer Associate - DVA - 001
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="question"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              테스트 시작
            </a>
          </div>
        </div>
      </div>
      <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-2xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            65개의 질문 | 2시간 10분 | 합격하려면 72%의 정답을 달성해야 함
          </p>
        </div>
      </main>
    </div>
  );
}

export default Preview;
