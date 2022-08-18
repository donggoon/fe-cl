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

  useEffect(() => {
    console.log('id', id);
    dispatch(
      menuClicked({
        id: 'Question',
        name: '문제풀기',
        description: '문제를 잘 읽고 정답을 고르세요.',
      }),
    );

    console.log('api call');
    callApi('get', `/api/q/${id}`)
      .then(response => {
        console.log(response);
        setQuestion(response.data.question);
        setOptions(response.data.options);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getFormattedAnswer = entries => {
    let formattedAnswer = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of entries) {
      if (value === 'true') {
        formattedAnswer += key;
      }
    }

    return formattedAnswer;
  };

  const handleSubmit = event => {
    const formData = new FormData(event.target);
    event.preventDefault();

    const currentIdx = quiz.questionSet.indexOf(id);
    // eslint-disable-next-line no-unused-vars
    const { answerSet, progressSet, correctSet } = quiz;
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
      question_id: id,
      question_set: quiz.questionSet,
      success_cd: quiz.successCd,
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
  );
}

export default Question;
