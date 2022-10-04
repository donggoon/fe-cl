import React from 'react';
import LoginFooter from './LoginFooter';

function LoginForm({ name, onSubmit, children }) {
  return (
    <main className="relative flex h-screen flex-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
        <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          QUIZ
        </h1>
        <form action="/" className="w-full max-w-sm" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
      {name === 'login' ? <LoginFooter /> : null}
    </main>
  );
}

export default LoginForm;
