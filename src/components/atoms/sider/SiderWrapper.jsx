import React from 'react';

function SiderWrapper({ children }) {
  return (
    <div className="fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block">
      {children}
    </div>
  );
}

export default SiderWrapper;
