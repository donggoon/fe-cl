/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Category() {
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
      if (row.id === 3) {
        return {
          ...row,
          // url: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
          url: 'https://miro.medium.com/max/1004/1*mkz-YzBveUCAu9lUM92Arg.png',
        };
      }
      if (row.id === 4) {
        return {
          ...row,
          url: 'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
        };
      }
      return row;
    });
  };

  useEffect(() => {
    axios
      .get('http://3.37.139.180:9002/api/q/category')
      .then(data => {
        console.log(data);
        setCategories(injectUrl(data.data));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
            <Link
              className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
              // to={`../q/${category.id}`}
              to="../q"
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
            </Link>
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
