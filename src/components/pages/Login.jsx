import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';

import Edit from '../atoms/Edit';
import Anchor from '../atoms/Anchor';
import LoginForm from '../organisms/forms/LoginForm';
import LoginFooter from '../organisms/footers/LoginFooter';
import Button from '../atoms/Button';
import Groupbox from '../atoms/Groupbox';
import LabelCheck from '../molecules/LabelCheck';

function Login() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or <Anchor href="#">start your 14-day free trial</Anchor>
          </p>
        </div>
        <LoginForm>
          <Groupbox
            styleoption={{
              spaceBetween: { axis: 'y', weight: 4 },
              borderRadius: 'none',
              marginTop: '4',
            }}
          >
            <Edit
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              styleoption={{ rounded: 'top-only' }}
            />
            <Edit
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              styleoption={{ rounded: 'bottom-only' }}
            />
          </Groupbox>
          <LoginFooter>
            <LabelCheck
              id="remember-me"
              name="remember-me"
              label="Remember me"
            />
            <div className="text-sm">
              <Anchor href="#">Forgot your password?</Anchor>
            </div>
          </LoginFooter>

          <Link to="/question">
            <Button>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </Button>
          </Link>
        </LoginForm>
      </div>
    </div>
  );
}

export default Login;
