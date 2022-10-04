import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../features/user/userSlice';
import NavButton from '../atoms/common/buttons/NavButton';
import GithubIcon from '../atoms/common/icons/GithubIcon';
import HeaderNav from '../organisms/header/HeaderNav';

function Header() {
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(userLogin({}));
  };

  return (
    <div className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 w-full flex-none bg-white transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 border-b border-slate-900/10 py-4 lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center">
            <a
              className="mr-3 w-[2.0625rem] flex-none overflow-visible md:w-auto"
              href="/"
            >
              <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                QUIZ
              </h1>
            </a>
            <div className="relative ml-auto hidden items-center lg:flex">
              <nav className="text-sm font-semibold leading-6 text-slate-700">
                <ul className="flex space-x-8">
                  <Link to="c">
                    <li className="hover:text-sky-500">New</li>
                  </Link>
                  <a href="http://43.200.138.19:9002/">
                    <li className="hover:text-sky-500">Admin</li>
                  </a>
                  <button type="button" onClick={handleLogout}>
                    <li className="hover:text-sky-500">Logout</li>
                  </button>
                </ul>
              </nav>
              <div className="ml-6 flex items-center border-l border-slate-200 pl-6">
                <a
                  href="https://github.com/le-cl/fe-cl"
                  className="ml-6 block text-slate-400 hover:text-slate-500"
                >
                  <span className="sr-only">quiz on GitHub</span>
                  <GithubIcon />
                </a>
              </div>
            </div>
            <div className="-my-1 ml-auto flex lg:hidden">
              <NavButton
                onClick={() => {
                  setIsNavOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <HeaderNav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </div>
  );
}

export default Header;
