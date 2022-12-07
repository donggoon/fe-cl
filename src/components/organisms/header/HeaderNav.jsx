import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../../features/user/userSlice';
import CloseButton from '../../atoms/common/buttons/CloseButton';

function HeaderNav({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    setIsOpen(false);
    dispatch(userLogin({}));
  };

  return isOpen ? (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 h-screen bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        aria-hidden="true"
      >
        <div className="fixed top-4 right-4 w-full max-w-[10rem] rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg lg:hidden">
          <CloseButton
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <ul className="space-y-6">
            <li>
              <Link
                className="hover:text-sky-500"
                to="c"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                New
              </Link>
            </li>
            <li>
              <a
                className="hover:text-sky-500"
                href="http://43.200.138.19:9002/"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Admin
              </a>
            </li>
            <li>
              <button
                className="hover:text-sky-500"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : null;
}

export default HeaderNav;
