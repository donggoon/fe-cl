import React from 'react';
import { Outlet } from 'react-router-dom';

import MainFooter from '../MainFooter';
import MainHeader from '../MainHeader';
import MainSider from '../MainSider';

function MainFrame() {
  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
        <MainHeader />
        {/* <div
          id="content-wrapper"
          className="prose prose-slate dark:prose-dark relative z-20 mt-8"
        > */}
        <div
          id="content-wrapper"
          className="prose prose-slate relative z-20 mt-8"
        >
          <Outlet />
        </div>
        <MainFooter />
        <MainSider />
      </div>
    </div>
  );
}
export default MainFrame;
