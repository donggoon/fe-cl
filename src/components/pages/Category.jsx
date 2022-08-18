/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import { menuClicked } from '../../features/menu/menuSlice';
import { initQuiz, setProgressSet } from '../../features/quiz/quizSlice';

import { callApi, isEmpty } from '../../functions/commonUtil';

function Category() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([
    {
      id: '1',
      name: 'AWS',
      p_id: '0',
      question_cnt: '100',
      success_cnt: '80',
      // url: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
      url: 'https://miro.medium.com/max/1004/1*mkz-YzBveUCAu9lUM92Arg.png',
    },
    {
      id: '2',
      name: 'ADsP',
      p_id: '0',
      question_cnt: '50',
      success_cnt: '40',
      url: 'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
    },
  ]);

  const injectUrl = data => {
    return data.map(row => {
      if (row.id === 1) {
        return {
          ...row,
          // url: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
          url: 'https://miro.medium.com/max/1004/1*mkz-YzBveUCAu9lUM92Arg.png',
        };
      }
      if (row.id === 2) {
        return {
          ...row,
          url: 'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
        };
      }
      return row;
    });
  };

  useEffect(() => {
    dispatch(
      menuClicked({
        id: 'Category',
        name: '카테고리 선택하기',
        description: '원하는 카테고리를 선택하면 시험을 시작합니다.',
      }),
    );

    callApi('get', '/api/q/category')
      .then(response => {
        console.log(response);
        setCategories(injectUrl(response.data));
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
    callApi('post', '/api/q/start', {
      ...params,
    })
      .then(response => {
        console.log('category', response);
        if (!isEmpty(response.data)) {
          const progressSet = response.data.progress_set.split(',');
          // 다음 문제 진행 체크
          progressSet[0] = 1;

          const payload = {
            answerSet: response.data.answer_set.split(','),
            categoryId: response.data.category_id,
            correctSet: response.data.correct_set.split(','),
            endDt: response.data.end_dt,
            id: response.data.id,
            progressSet,
            questionSet: response.data.question_set.split(','),
            seq: response.data.seq,
            startDt: response.data.start_dt,
            successCd: response.data.success_cd,
            userId: response.data.user_id,
          };
          dispatch(initQuiz(response.data));
          navigate(`/q/${payload.questionSet[0]}`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ul className="sm:space-y-6">
      {categories.map(category => (
        <li className="-mx-4 flex flex-col-reverse items-start bg-slate-50 p-4 pb-10 dark:bg-slate-800/50 sm:mx-0 sm:rounded-2xl sm:p-10 xl:flex-row">
          <div className="flex-auto">
            <h3 className="mb-4 text-sm font-semibold leading-6 text-blue-500">
              parent category
            </h3>
            <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
              {category.name}
            </p>
            <div className="mb-6 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                {`총 ${category.question_cnt} 문항 중 ${category.success_cnt} 문항 정답`}
              </p>
              <p>description 2</p>
            </div>
            <button
              className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
              // to="../q"
              type="button"
              onClick={() => handleClick(category)}
            >
              시험보기
              <svg
                className="ml-3 overflow-visible text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
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
            <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] overflow-hidden rounded-lg bg-slate-100 shadow-lg dark:bg-slate-800">
              <picture>
                <source
                  type="image/jpeg"
                  srcSet={category.url}
                  media="(min-width: 640px)"
                />
                <img className="my-0 mx-auto" src={category.url} alt="" />
              </picture>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Category;
