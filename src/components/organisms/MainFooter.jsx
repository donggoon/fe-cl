import React from 'react';

function MainFooter() {
  return (
    <footer className="mt-12 text-sm leading-6">
      <div className="justify-between border-t border-slate-200 pt-10 pb-28 text-slate-500 dark:border-slate-200/5 sm:flex">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright © 2022 </p>
        </div>
        <a
          className="hover:text-slate-900 dark:hover:text-slate-400"
          href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/utility-first.mdx"
        >
          Edit this page on GitHub
        </a>
      </div>
    </footer>
  );
}

export default MainFooter;
