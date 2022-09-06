/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { callApi } from '../../functions/commonUtil';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const loginId = formData.get('id');
    const name = formData.get('name');
    const password = formData.get('password');
    const passwordConfirm = formData.get('passwordConfirm');

    const params = {
      login_id: loginId,
      name,
      password,
    };

    if (password !== passwordConfirm) {
      alert('패스워드와 패스워드 확인이 일치하지 않습니다.');
    } else {
      callApi('post', '/u', params)
        .then(response => {
          if (response.status === 200) {
            alert('회원가입이 완료되었습니다.\n로그인 후 이용해주세요.');
            navigate('../');
          }
        })
        .catch(err => {
          if (err.response.data.code === '1') {
            alert('중복된 이메일입니다.');
          } else {
            alert(
              '회원가입에 실패하였습니다.\n자세한 사항은 관리자에게 문의하십시오.',
            );
          }
        });
    }
  };

  return (
    <main className="relative flex h-screen flex-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
        <a className="mx-auto mb-16 h-6 w-auto text-slate-900" href="/">
          <span className="sr-only">QUIZ register page</span>
          <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            회원가입
          </h1>
        </a>
        <h1 className="sr-only">Register your account</h1>
        <form action="/" className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              이름
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="id"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              ID
            </label>
            <input
              type="id"
              id="id"
              name="id"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="ID를 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="비밀번호를 한번 더 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-lg bg-slate-900 py-2.5 px-4 text-sm font-semibold text-white hover:bg-slate-700"
          >
            <span>가입하기</span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
