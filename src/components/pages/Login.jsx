/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

import { userLogin } from '../../features/user/userSlice';

import { isEmpty } from '../../functions/commonUtil';

function Login() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isEmpty(user.userid)) {
      return navigate('/');
    }
  }, []);

  const handleSubmit = event => {
    const formData = new FormData(event.target);
    event.preventDefault();

    console.log('email :', formData.get('email'));
    console.log('password :', formData.get('password'));

    dispatch(userLogin(formData.get('email')));
    return navigate('/');
    //   axios
    //     .post('http://3.37.139.180:9002/api/q/move', {
    //       email: formData.get('email'),
    //       password: formData.get('password'),
    //     })
    //     .then(data => {
    //       console.log(data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
  };

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
        <a className="mx-auto mb-16 h-6 w-auto text-slate-900" href="/">
          <span className="sr-only">QUIZ home page</span>
          <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
            QUIZ
          </h1>
        </a>
        <h1 className="sr-only">Log in to your account</h1>
        <form action="/" className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
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
            <span>Sign in to account</span>
          </button>
          <p className="mt-8 text-center">
            <a href="/password/reset" className="text-sm hover:underline">
              Forgot password?
            </a>
          </p>
        </form>
      </div>
      <footer className="relative shrink-0">
        <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
          <p className="text-center sm:text-left">
            Don&apos;t have an account?
          </p>
          <a
            className="inline-flex justify-center rounded-lg py-2.5 px-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
            href="/all-access"
          >
            <span>
              Get access <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Login;
