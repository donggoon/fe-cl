import React from 'react';

function LoginForm({ children }) {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      {children}
    </form>
  );
}

export default LoginForm;
