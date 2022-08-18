/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../firebase';
// import axios from 'axios';

import { userLogin } from '../../features/user/userSlice';

import { isEmpty } from '../../functions/commonUtil';

function Register() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');
  const [PWConfirm, setPWConfirm] = useState('');
  const [Flag, setFlag] = useState(false);
  const [ErrMsg, setErrMsg] = useState('');

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isEmpty(user.id)) {
      return alert('navigate?');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrMsg('');
    }, 5000);
  }, [ErrMsg]);

  const handleSubmit = async event => {
    const formData = new FormData(event.target);
    event.preventDefault();

    dispatch(userLogin(formData.get('email')));

    console.log(`${Name}/${Email}/${PW}/${PWConfirm}`);

    if (!(Name && Email && PW && PWConfirm)) {
      return alert('모든 항목을 입력해 주세요.');
    }

    if (PW !== PWConfirm) {
      return alert('패스워드와 패스워드 확인이 다릅니다.');
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(Email, PW);
      navigate('/login');
    } catch (err) {
      if (err.code === 'auth/invalid-mail') {
        setErrMsg('이메일 형식이 잘못되었습니다.');
      } else if (err.code === 'auth/weak-password') {
        setErrMsg('비밀번호는 6자리 이상이어야 합니다.');
      } else if (err.code === 'auth/email-already-in-use') {
        setErrMsg('이미 존재하는 이메일입니다.');
      }
    }

    const body = {
      email: Email,
      displayName: Name,
    };

    // eslint-disable-next-line no-undef, consistent-return
    axios.post('/api/user/register', body).then(response => {
      setFlag(false);
      if (response.data.success) {
        navigate('/login');
      } else {
        return alert('회원가입에 실패하였습니다.');
      }
    });

    return alert('회원가입 완료! (구현중)');
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
            Register
          </h1>
        </a>
        <h1 className="sr-only">Log in to your account</h1>
        <form action="/" className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              value={Name}
              name="name"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="Enter your name"
              onChange={event => setName(event.currentTarget.value)}
            />
          </div>
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
              value={Email}
              name="email"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="Enter your email"
              onChange={event => setEmail(event.currentTarget.value)}
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
              value={PW}
              name="password"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="Enter your password"
              onChange={event => setPW(event.currentTarget.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password Confirm
            </label>
            <input
              type="password"
              id="passwordConfirm"
              value={PWConfirm}
              name="passwordConfirm"
              className="mt-2 block h-10 w-full appearance-none rounded-md bg-white px-3 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
              required=""
              placeholder="Enter your password again"
              onChange={event => setPWConfirm(event.currentTarget.value)}
            />
          </div>
          {ErrMsg !== '' && <p>{ErrMsg}</p>}
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-lg bg-slate-900 py-2.5 px-4 text-sm font-semibold text-white hover:bg-slate-700"
            disabled={Flag}
          >
            <span>Create Account</span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
