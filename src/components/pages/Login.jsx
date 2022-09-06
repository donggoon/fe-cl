/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userLogin } from '../../features/user/userSlice';

import { callApi, isEmpty } from '../../functions/commonUtil';

function Login() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(user.id)) {
      navigate('/');
    }
  }, [user.id]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const params = {
      login_id: formData.get('id'),
      password: formData.get('password'),
    };
    callApi('post', '/u/login', params)
      .then(response => {
        dispatch(userLogin(response.data));
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <main className="relative flex h-screen flex-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
        <a className="mx-auto mb-16 h-6 w-auto text-slate-900" href="/">
          <span className="sr-only">QUIZ login page</span>
          <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            QUIZ
          </h1>
        </a>
        <h1 className="sr-only">로그인</h1>
        <form action="/" className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="id"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              아이디
            </label>
            <input
              // type="id"
              id="id"
              name="id"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
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
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-lg bg-slate-900 py-2.5 px-4 text-sm font-semibold text-white hover:bg-slate-700"
          >
            <span>로그인</span>
          </button>
        </form>
      </div>
      <footer className="relative shrink-0">
        <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
          <p className="text-center sm:text-left">계정이 없으신가요?</p>
          <a
            className="inline-flex justify-center rounded-lg py-2.5 px-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
            href="/register"
          >
            <span>
              가입하기 <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Login;
