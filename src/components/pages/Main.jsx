import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainFooter from '../organisms/main/MainFooter';
import MainHeader from '../organisms/main/MainHeader';
import QuestionSider from '../organisms/question/QuestionSider';
import ReviewSider from '../organisms/review/ReviewSider';
import { isEmpty } from '../../functions/commonUtil';

function Main() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const menu = useSelector(state => state.menu);
  const quiz = useSelector(state => state.quiz);
  const history = useSelector(state => state.history);

  useEffect(() => {
    if (isEmpty(user.id)) {
      navigate('/login');
    }
  }, [user.id]);

  const isProcessing = menu.id === 'Question' && !isEmpty(quiz.id);
  const isReviewing = menu.id === 'Review' && !isEmpty(history.id);

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <div
        className={`mx-auto max-w-3xl pt-10${
          isProcessing || isReviewing
            ? ' xl:mr-[15.5rem] xl:ml-0 xl:max-w-none xl:pr-16'
            : ''
        }`}
      >
        <MainHeader />
        <div
          id="content-wrapper"
          className="prose prose-slate relative z-20 mt-8"
        >
          <Outlet />
        </div>
        <MainFooter />
        {isProcessing ? <QuestionSider /> : null}
        {isReviewing ? <ReviewSider /> : null}
      </div>
    </div>
  );
}
export default Main;
