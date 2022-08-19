/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import QuestionTitle from '../atoms/QuestionTitle';
// eslint-disable-next-line no-unused-vars
import QuestionOption from '../molecules/QuestionOption';
import QuestionOptionGroup from '../organisms/QuestionOptionGroup';

import { menuClicked } from '../../features/menu/menuSlice';
import { setAnswerSet, setProgressSet } from '../../features/quiz/quizSlice';

import { callApi } from '../../functions/commonUtil';

function Question({ history }) {
  const quiz = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [progressTime, setProgressTime] = useState(0);
  const [progressTimeText, setProgressTimeText] = useState('00:00:00');

  const completeCount = quiz.questionSet.indexOf(id);
  const totalCount = quiz.questionSet.length;
  const progressPercent = (completeCount / totalCount) * 100;

  useEffect(() => {
    dispatch(
      menuClicked({
        id: 'Question',
        name: '문제풀기',
        description: '문제를 잘 읽고 정답을 고르세요.',
      }),
    );

    callApi('get', `/api/q/${id}`)
      .then(response => {
        setQuestion(response.data.question);
        setOptions(response.data.options);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const countup = setInterval(() => {
      setProgressTime(progressTime + 1);
      const hour = String(parseInt((progressTime + 1) / 3600, 10)).padStart(
        2,
        '0',
      );
      const minute = String(
        parseInt((progressTime + 1) / 60, 10) % 3600,
      ).padStart(2, '0');
      const second = String((progressTime + 1) % 60).padStart(2, '0');
      setProgressTimeText(`${hour}:${minute}:${second}`);
    }, 1000);
    return () => clearInterval(countup);
  }, [progressTime]);

  const getFormattedAnswer = entries => {
    let formattedAnswer = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of entries) {
      if (value === 'true') {
        formattedAnswer += `${key}:`;
      }
    }

    return formattedAnswer.slice(0, -1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const currentIdx = quiz.questionSet.indexOf(id);
    const answerSet = [...quiz.answerSet];
    const progressSet = [...quiz.progressSet];
    // eslint-disable-next-line no-unused-vars
    const correctSet = [...quiz.correctSet];
    // 현재 문제 정답 체크
    answerSet[currentIdx] = getFormattedAnswer(formData.entries());
    // 현재 문제 완료 체크
    progressSet[currentIdx] = 2;
    // 다음 문제 진행 체크
    progressSet[currentIdx + 1] = 1;

    const params = {
      answer_set: answerSet,
      category_id: quiz.categoryId,
      correct_set: quiz.correctSet,
      id: quiz.id,
      progress_set: quiz.progressSet,
      question_id: id,
      question_set: quiz.questionSet,
      // success_cd: quiz.successCd,
      success_cd: 'S',
    };

    callApi('post', '/api/q/move', {
      ...params,
    })
      .then(response => {
        dispatch(setAnswerSet(answerSet));
        dispatch(setProgressSet(progressSet));

        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative z-10 p-4">
        {/* <div className="flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10"> */}
        <div className="flex rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
          <div className="flex flex-auto items-center border-l border-slate-200/60 pr-4 pl-6 text-[0.8125rem] leading-5 text-slate-700">
            <div className="w-4">
              {completeCount}/{totalCount}
            </div>
            <div className="ml-4 flex flex-auto rounded-full bg-slate-100">
              <div
                className="h-2 flex-none rounded-l-full rounded-r-[1px] bg-indigo-600"
                style={{
                  width: `${progressPercent}%`,
                }}
              />
              <div className="-my-[0.3125rem] ml-0.5 h-[1.125rem] w-1 rounded-full bg-indigo-600" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="ml-1 w-12">{progressTimeText}</div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <QuestionTitle id={question.id}>{question.text}</QuestionTitle>
            {question.image ? (
              <img
                className="my-0 mx-auto"
                src={`data:image/png;base64,${question.image}`}
                alt="no images"
              />
            ) : null}
            <QuestionOptionGroup options={options} />
            {/* <QuestionOptionGroup>
              {options.map(option => {
                return <QuestionOption option={option} />;
              })}
            </QuestionOptionGroup> */}
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="button"
              onClick={() => {
                history.goBack();
              }}
              className="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Previous
            </button>
            <button
              type="submit"
              className="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Question;
