import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { menuChanged } from '../../features/menu/menuSlice';
import { initQuiz } from '../../features/quiz/quizSlice';

import {
  callApi,
  getCategoryInfoText,
  getFormattedQuizInfo,
} from '../../functions/commonUtil';

function Category() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(
      menuChanged({
        id: 'Category',
        name: '카테고리 선택하기',
        description: '원하는 카테고리를 선택하면 시험을 시작합니다.',
      }),
    );

    callApi('get', '/q/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleClick = category => {
    const params = {
      category_id: category.id,
      question_cnt: category.question_cnt,
      user_id: user.id,
    };
    callApi('post', '/q/start', params)
      .then(response => {
        const payload = getFormattedQuizInfo(response.data);
        dispatch(initQuiz(payload));
        navigate(`/q/${payload.questionSet[0]}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ul className="sm:space-y-6">
      {categories.map(category => (
        <li
          key={category.id}
          className="-mx-4 flex flex-col-reverse items-start bg-slate-50 p-4 pb-10 sm:mx-0 sm:rounded-2xl sm:p-10 xl:flex-row"
        >
          <div className="flex-auto">
            <h3 className="mb-4 text-sm font-semibold leading-6 text-indigo-600">
              {getCategoryInfoText(
                category.question_cnt,
                category.time_limit,
                category.success_percent,
              )}
            </h3>
            <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900">
              {category.name}
            </p>
            <div className="mb-6 space-y-4 text-sm leading-6 text-slate-600">
              <p>
                {`총 ${category.question_cnt} 문항 중 ${category.success_percent}% 합격`}
              </p>
              <p>{category.description}</p>
            </div>
            <button
              className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              // to="../q"
              type="button"
              onClick={() => handleClick(category)}
            >
              시험보기
              <svg
                className="ml-3 overflow-visible text-slate-300 group-hover:text-slate-200"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </button>
          </div>
          <div className="mb-10 w-full flex-none xl:mb-0 xl:ml-8 xl:w-[29rem]">
            <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] overflow-hidden rounded-lg bg-slate-100 shadow-lg">
              <picture>
                <source
                  type="image/jpeg"
                  srcSet={category.logo_url}
                  media="(min-width: 640px)"
                />
                <img className="my-0 mx-auto" src={category.logo_url} alt="" />
              </picture>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Category;
